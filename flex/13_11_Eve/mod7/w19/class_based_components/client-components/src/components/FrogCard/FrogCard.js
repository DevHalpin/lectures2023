import React, { useCallback } from "react";

const FrogCard = (props) => {
  const { interval, setData } = props;
  const clearFrogFetchInterval = useCallback(() => {
    //useCallback prevents function from being recreated on every render unless dependencies change, 
    //if we didn't have this, the function would be recreated every refresh and we'd get an infinite loop
    clearInterval(interval);
    setData((prev) => ({ ...prev, interval: null }));
  }, [interval, setData]); //dependency array similar to useEffect telling React to only recreate this function if interval or setData changes

  React.useEffect(() => {
    console.log("FrogCard mounted");
    return () => {
      console.log("FrogCard unmounted");
      if (interval) {
        console.log("Clearing interval");
        clearFrogFetchInterval();
      }
    };
  }, [interval, clearFrogFetchInterval]);

  return (
    <div>
      <h2>Frogs</h2>
      <h2>{props.name}</h2>
      <img src={props.imgSrc} width="300px" alt="Frog Alt Text" />
    </div>
  );
};

export default FrogCard;
