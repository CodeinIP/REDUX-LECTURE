import * as types from "./actionTypes";
export const incCounter = () => {
  return { type: types.INCREMENT, payload: 5 };
};
export const decCounter = () => {
  return { type: types.DECREMENT, payload: 10 };
};
export const getTodosRequest = () => {
  return { type: types.GET_TODOS_REQUEST };
};
export const getTodosSuccess = (payload) => {
  return { type: types.GET_TODOS_SUCCESS, payload };
};
export const getTodosFailure = () => {
  return { type: types.GET_TODOS_FAILURE };
};
export const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST,
  };
};
export const addTodoSuccess = (payload) => {
  return { type: types.ADD_TODOS_SUCCESS, payload };
};
export const addTodoFailure = () => {
  return { type: types.ADD_TODOS_FAILURE };
};
