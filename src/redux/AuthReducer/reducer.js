import * as types from "./actionTypes";
const initState = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
};
export const reducer = (oldState = initState, { type, payload }) => {
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuth: true,
        token: payload,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuth: false,
        token: "",
      };
    default:
      return oldState;
  }
};
