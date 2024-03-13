import Text from './components/Counter';
import Hello from  './components/Hello'
import Mood from './components/Mood';
import SayHello from './components/SayHello';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      {/* <Hello />
      <SayHello name="David" age="37" />
      <SayHello name="Edmark" age="28" />
      <Mood name="David" mood="happy" />
      <Mood name="Nicholas" mood="sad" />
      <Mood name="Edmark" mood="mad" />
      <Mood name="Mike" mood="confused" /> */}
      <Text/>
      <ToDoList/>
    </div>
  );
}

export default App;
