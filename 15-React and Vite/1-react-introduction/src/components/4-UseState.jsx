import { useState } from "react";

// 1. Hooks in react can only be used in function based components.
function Increment() {
  // useState hook will return an array with 2 elements
  // [element1, element2]
  // element1 - the current state of the value
  // element2 - a function to update the state of element 1
  // Destructuring the return value of useState hook
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count)=> count + 1);
    setCount((count)=> count + 1);
  };

  const decrement = () =>{
    setCount((count)=> count - 1);
    setCount((count)=> count - 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Increment;
