type Count = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Counter({ count, setCount }: Count) {
  return (
    <>
      <h3>Counter is {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
}
