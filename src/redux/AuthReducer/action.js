import * as types from "./actionTypes";
const loginRequest = () => {
  return {
    type: types.USER_LOGIN_REQUEST,
  };
};
const loginSuccess = () => {
  return {
    type: types.USER_LOGIN_SUCCESS,
  };
};
const loginFailure = () => {
  return {
    type: types.USER_LOGIN_FAILURE,
  };
};
export { loginFailure, loginRequest, loginSuccess };
