// import { useState } from "react";
// import { store } from "../redux/store";
import { incCounter, decCounter } from "../redux/AppReducer/action";
import { useDispatch,useSelector } from "react-redux";

const Counter = () => {
  // const counter = store.getState().counter;
  // console.log(counter);
  // const { dispatch } = store;

  // const [state, setState] = useState(0);
  // store.subscribe(() => {
  //   forceUpdate();
  // });
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state.counter);
  // const forceUpdate = () => setState((prev) => prev + 1);
  const btnStyle = {
    border: "none",
    background: "teal",
    color: "white",
    padding: "5px 15px",
    cursor: "pointer",
    borderRadius: "5px",
  };
  return (
    <div>
      <div>
        <h2>REDUX-COUNTER</h2>
        <h1>COUNTER:{counter}</h1>
      </div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "space-evenly",
        }}
      >
        <button style={btnStyle} onClick={() => dispatch(incCounter())}>
          ADD
        </button>
        <button style={btnStyle} onClick={() => dispatch(decCounter())}>
          REDUCE
        </button>
      </div>
    </div>
  );
};

export default Counter;
