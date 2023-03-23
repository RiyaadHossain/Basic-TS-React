import { Heading } from "./components/Heading";
import { Section } from "./components/Section";

function App() {
  return (
    <>
      <Heading title="Hello TS+React" />
      <Section title="another heading">This is a children</Section>
    </>
  );
}

export default App;
