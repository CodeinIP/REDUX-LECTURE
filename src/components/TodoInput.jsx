import axios from "axios";
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {
  addTodoSuccess,
  addTodoFailure,
  addTodoRequest,
} from "../redux/AppReducer/action";
const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const payload = {
    title: input,
    status: false,
  };
  const addTodo = async (payload) => {
    dispatch(addTodoRequest());
    return await axios
      .post("http://localhost:8080/todos", payload)
      .then((r) => {
        console.log(r.data);
        dispatch(addTodoSuccess(r.data));
      })
      .catch((err) => dispatch(addTodoFailure()));
  };
  const addTodoHandler = () => {
    addTodo(payload);
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="add something"
      />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  );
};

export default TodoInput;
