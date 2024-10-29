import { useCounter } from "../hooks/useCounter";

const CounterWidthHooks = () => {
  const { count, inCreaseBy } = useCounter({
    initialValue: 25,
  });

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

export default CounterWidthHooks;
