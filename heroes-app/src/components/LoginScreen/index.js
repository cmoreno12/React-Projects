import React, { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { TYPES } from "../../types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    dispatch({
      type: TYPES.LOGIN,
      payload: {
        name: "Camilo",
      },
    });
    history.replace(lastPath);
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
