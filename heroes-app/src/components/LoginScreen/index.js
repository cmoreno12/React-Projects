import React, { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { TYPES } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const context = useContext(AuthContext);

  const handleLogin = () => {
    context?.dispatch({
      type: TYPES.LOGIN,
      payload: {
        name: "Camilo",
      },
    });
    history.replace("/");
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
