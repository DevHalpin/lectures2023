import { useState } from "react";

const TodoItem = (props) => {
  console.log(props.item.completed);
  const { id, task, completed } = props.item;
  const [status, setStatus] = useState(completed);

  const handleChange = (e) => {
    e.preventDefault();
    fetch(`/api/todos/${id}/complete`, {
      method: "POST"})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.message) {
          alert(`Error: ${data.message}`)
          return;
        }
        setStatus(prev => !prev);
      })

  }
  return (
    <li>
      {task} :{" "}
      <select name="status" id="status" value={status} onChange={handleChange}>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>{" "}
      <button onClick={() => props.onDeleteItem(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
