import "./App.css";
import Counter from "./components/Counter";
import ToDoList from "./components/ToDoList";
// import Hello from "./components/Hello";
// import Mood from "./components/Mood";
// import SayHello from "./components/SayHello";

function App() {
  return (
    <div className="App">
      {/* <Hello /> 
      <SayHello name="Sam"/>
      <SayHello name="Quinn"/>
      <Mood/>
      <Mood name="David" mood="happy"/>
      <Mood name="Tobi" mood="sad"/>
      <Mood name="Russell" mood="mad"/> */}
      < Counter/>
      <ToDoList/>
    </div>
  );
}

export default App;
