import { TYPES } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return { ...action.payload, logged: true };
    case TYPES.LOGOUT:
      return { logged: false };
    default:
      return state;
  }
};
