import React, {useEffect, useState} from 'react';

const LifecycleFunctional = (props) => {
  const [count, setCount ] = useState(0);

  useEffect(() => {
    console.log("component did mount or update")

    return () => {
      console.log("component will unmount");
    }
  })

  const handleClick = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1)
  }

  return (
    <div className="lifecycle">
      <h2>Lifecycle Methods</h2>
      <h2>{count}</h2>
      <button onClick={handleClick}> Click Me!</button>
    </div>
  );

}

export default LifecycleFunctional