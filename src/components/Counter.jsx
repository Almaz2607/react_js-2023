import { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>

      <button type="text" onClick={increment}>
        Increment
      </button>
      <button type="text" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
