import React from "react";
import { useSelector } from "react-redux";
const TodoList = () => {
  const todos = useSelector((store)=>store.AppReducer.todos);
  return (
    <div>
        <div>
          {todos?.map((ele) => (
            <div key={ele.id}>
              <div style={{display:"flex",margin:"auto",width:"300px"}} >
                <p>{ele.title}</p>
                <p>{ele.status ? "Done" : "Not Done"}</p>
              </div>
            </div>
          ))}
        </div>
     
    </div>
  );
};

export default TodoList;
