import "./App.css";
import TodoItem from "./components/TodoItem/TodoItem";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const onDeleteItem = (id) => {
    fetch(`/api/todos/${id}/delete`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(`Error: ${data.message}`);
          return;
        }
        console.log(data);
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
      });
  }

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }, []);

  // setTimeout(() => {
  //   setItems(["Buy Pizza", "Buy Ice Cream", "Buy Milk"]);
  // }, 4000);

  const toDoItemComponentsArray = items.map((item) => {
    return <TodoItem key={item.id} item={item} onDeleteItem={onDeleteItem} />;
  })

  return (
    <div className="App">
      <h1>To Do List</h1>
      {/* <TodoItem task={"Buy Pizza"}/> */}
      {/* {JSON.stringify(items)} */}
      {toDoItemComponentsArray}
      <TodoItem key="1" item={{id: "1",task:"Buy Pizza", completed: false }} onDeleteItem={onDeleteItem} />
    </div>
  );
}

export default App;
