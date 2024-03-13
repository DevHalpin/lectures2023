import { useState } from 'react';

function ToDoList(props) {
  const [newTask, setNewTask] = useState('');
  const [toDos, setToDos] = useState([]); // Default is an empty array.

  const newTaskFieldChanged = (event) => {
    const enteredValue = event.target.value;
    setNewTask(enteredValue);
  };

  const toDosFormSubmission = (event) => {
    event.preventDefault(); // Prevent form from loading new page.

    // Return the array along with its new value.
    setToDos((prev) => {
      return [...prev, newTask];
    });

    // Clear out the text input so the user can type a new one nice and easy!
    setNewTask(''); // Just an empty string.
  };

  return (
    <>
      <h2>{'To-Do List Component' || props.heading}</h2>
      <form onSubmit={toDosFormSubmission}>
        <label htmlFor="new-task">Enter Task:</label>
        <input
          id="new-task"
          type="text"
          onChange={newTaskFieldChanged}
          value={newTask}
          />
        <input type="submit" value="Add Task to List" />
      </form>
      {toDos.length === 0 && <p>There are no to-do items to display.</p>}
      {toDos.length > 0 && <ul>{toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}</ul>}
    </>
  );
}

export default ToDoList;