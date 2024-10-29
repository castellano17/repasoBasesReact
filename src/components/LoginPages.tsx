import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";
import DotsLoading from "./DotsLoading";

export const LoginPages = () => {
  const authStatus = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, []);

  if (authStatus === "checking") {
    return (
      <h3>
        <DotsLoading />
      </h3>
    );
  }

  return (
    <>
      <h3>Login Pages</h3>
      {authStatus === "authenticated" ? (
        <p>Usuario autenticado como: {JSON.stringify(user, null, 2)} </p>
      ) : (
        <p>Usuario no autenticado</p>
      )}

      {authStatus === "authenticated" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("Esmir@esmir.com", "123456")}>
          Login
        </button>
      )}
    </>
  );
};
