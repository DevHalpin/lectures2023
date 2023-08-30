import { useState } from 'react';

function ToDoList(props) {
  // These "blank" elements are called fragments.
  // If we need to wrap some elements, but don't want any extra to...
  // show in our browser, we can use them! Handy in many cases, as...
  // JSX only lets us return one root element per component.
  const [newTask, setNewTask] = useState(''); // Default is an empty string.
  const [toDos, setToDos] = useState([]);

  // Function for our input changed event.
  const newTaskFieldChanged = (event) => {
    // Get the new value entered by the user from the event element.
    const enteredValue = event.target.value;
    // Update the state.
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
          value={newTask}
          onChange={newTaskFieldChanged}
          />
        <input type="submit" value="Add Task to List" />
      </form>
      {toDos.length === 0 && <p>There are no to-do items to display.</p>}
      {toDos.length > 0 && <ul>{toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}</ul>}
    </>
  );
}

export default ToDoList;