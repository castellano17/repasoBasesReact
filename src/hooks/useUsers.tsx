import axios from "axios";
import { useState, useRef, useEffect } from "react";
import type { User, ReqRESTUserListResponse } from "../interfaces";

const loadusers = async (page: number = 1): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqRESTUserListResponse>(
      "https://reqres.in/api/users",
      {
        params: {
          page: page,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);

    return [];
  }
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const currentPageRef = useRef(1);

  useEffect(() => {
    // fetch("https://reqres.in/api/users")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));

    loadusers(currentPageRef.current).then((users) => setUsers(users));
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadusers(currentPageRef.current);
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;
    currentPageRef.current--;
    const users = await loadusers(currentPageRef.current);
    setUsers(users);
  };

  return {
    //Properies
    users,

    //Methods
    nextPage,
    prevPage,
  };
};
