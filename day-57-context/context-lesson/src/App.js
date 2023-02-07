import './App.css';
import Section from './components/Section';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <h1>Day-57 - React Context</h1>
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section level={4}>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>

      </Section>
    </div>
  );
}

export default App;
