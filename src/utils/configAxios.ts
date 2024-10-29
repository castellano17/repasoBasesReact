// src/utils/configAxios.ts
import axios, { AxiosInstance } from "axios";

export const axiosUsers: AxiosInstance = axios.create({
  baseURL: "https://reqres.in/api/users",
});
