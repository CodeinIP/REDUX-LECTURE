// import { DECREMENT, INCREMENT } from "./actionTypes";
import { loadData, saveData } from "../../utils/accessLocalStorage";
import * as types from "./actionTypes";
const initState = {
  counter: loadData("counter") || 7,
  todos: loadData("todos")||[],
  isLaoding: false,
  isError: false,
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      let newCountInc = state.counter + action.payload;
      saveData("counter", newCountInc);
      return { ...state, counter: state.counter + action.payload };
    case types.DECREMENT:
      let newCountDec = state.counter - action.payload;
      saveData("counter", newCountDec);
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case types.GET_TODOS_REQUEST:
      return {
        ...state,
        isLaoding: true,
        isError: false,
      };
    case types.GET_TODOS_SUCCESS:
      
      return {
        ...state,
        isLaoding: false,
        todos: action.payload
      };
    case types.GET_TODOS_FAILURE:
      return {
        ...state,
        isError: true,
        isLaoding: false,
      };
    case types.ADD_TODO_REQUEST:
      return {
        ...state,
        isLaoding: true,
        isError: false,
      };
    case types.ADD_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case types.ADD_TODOS_FAILURE:
      return {
        ...state,
        isError: true,
        isLaoding: false,
      };
    default:
      return state;
  }
};
