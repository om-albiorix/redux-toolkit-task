import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDcrement = () => {
    dispatch(decrement());
  };

  return (
    <div style={{ border: "3px solid black", padding: "20px" }}>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDcrement}>Decrement</button>
    </div>
  );
};

export default Counter;
