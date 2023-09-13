import { useState, useEffect } from "react"


const useMousePosition = () => {
  const [coords, setCoords] = useState({x:0, y:0})

  useEffect(() => {

    const mouseHandler = e => {
      console.log("Mouse movement detected")
      setCoords({x: e.clientX, y: e.clientY});

    }
    console.log("Event Listener added")
    document.addEventListener('mousemove',mouseHandler);

    return () => document.removeEventListener('mousemove', mouseHandler)
  }, []);

  return coords;
}

export default useMousePosition;