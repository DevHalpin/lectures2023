import { useState } from 'react';

function Counter() {
  const countState = useState(0);
  const count = countState[0]; // Current count value; NEVER update directly.
  const setCount = countState[1]; // Function to update count value.

  const addOneToCount = () => {
    setCount((prev) => prev+ 1)
  }

  return (
    <button onClick = {addOneToCount}>
      Clicked {count} Times
    </button>
  );
}

// import { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0); // Array destructuring saves a couple lines.

//   return ( // We can include anonymous function definitions right in the listener.
//     <button onClick={() => setCount(prev => prev + 1)}>
//       Clicked {count} Times
//     </button>
//   );
// }

// export default Counter;

export default Counter;