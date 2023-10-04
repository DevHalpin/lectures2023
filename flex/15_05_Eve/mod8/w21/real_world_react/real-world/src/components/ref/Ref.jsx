import {useRef, useState} from 'react';

const Ref = () => {

  const inputRef = useRef();
  const [count, setCount] = useState(0);

  const countRef = useRef();
  countRef.current = count;


  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleAlert = () => {
    alert(countRef.current);
  }

  return (
    <div>
    <div>
      <p>useRef</p>
      <div>
        <label htmlFor="input-field">Input:</label>
        <input type='text' id='input-field' ref={inputRef} />
      </div>
      <button onClick={handleClick}>Set Focus</button>
    </div>
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={handleAlert}>Show Alert</button>
    </div>
    </div>
  )


}

export default Ref


// const PreviousStateExample = ({ value }) => {
//   const prevValueRef = useRef();

//   useEffect(() => {
//     // Check if the value has changed
//     if (value !== prevValueRef.current) {
//       console.log('Value changed:', value);
//     }

//     // Update the ref with the current value for the next render
//     prevValueRef.current = value;
//   }, [value]);

//   return <div>{value}</div>;
// };