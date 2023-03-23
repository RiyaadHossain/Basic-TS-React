import { ReactElement, useState } from "react";
import Counter from "./components/Counter";
import { Heading } from "./components/Heading";
import List from "./components/List";
import { Section } from "./components/Section";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title="Hello TS+React" />
      <Section title="another heading">This is a children</Section>
      <Counter count={count} setCount={setCount} />
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;
