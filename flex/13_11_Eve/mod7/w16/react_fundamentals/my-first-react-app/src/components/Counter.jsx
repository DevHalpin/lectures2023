import { useState } from 'react';

export default function Counter() {
    const [value, setValue] = useState(0)

    console.log('rendering Counter')

    return (
      <button onClick={() => setValue((prev) => {
        return prev + 1;
      })}>
        Clicked {value} Times
      </button>
    );
  }
  
//   export default Counter;