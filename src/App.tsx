import { useState } from "react";
import Counter from "./components/Counter";
import { Heading } from "./components/Heading";
import { Section } from "./components/Section";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title="Hello TS+React" />
      <Section title="another heading">This is a children</Section>
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default App;
