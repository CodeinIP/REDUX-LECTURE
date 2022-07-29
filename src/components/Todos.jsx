import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
} from "../redux/AppReducer/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todos = () => {
  const todosList = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const getTodos = async () => {
    dispatch(getTodosRequest());
    return await axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispatch(getTodosSuccess(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(getTodosFailure());
      });
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todosList);
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todos;
