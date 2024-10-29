import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(10);

  const inCreaseBy = (value: number) => {
    setCount(count + value);
  };

  return (
    <>
      <h3>counter</h3>
      <small>{count}</small>

      <div>
        <button onClick={() => inCreaseBy(+1)}>+1</button>
        &nbsp;
        <button onClick={() => inCreaseBy(-1)}>-1</button>
      </div>
    </>
  );
};

export default Counter;
