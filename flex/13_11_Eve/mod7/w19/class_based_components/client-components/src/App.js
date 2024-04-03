import React from "react";
import FrogCard from "./components/FrogCard/FrogCard";


const App = () => {
  const [data, setData] = React.useState({
    frogData: {},
    show: true,
    interval: null,
  });
  

  const hideFrog = () => {
    console.log("Hide Frog")
    setData({...data ,show: !data.show});
  }

  const handleClick = ()=> {

      fetch("/frogs/random")
      .then(res => res.json())
      .then(res => {
        setData((prev) => ({...prev,frogData: res}));
      })
      .catch(err => console.log(err));
  }

  

  const cycleFrog = () => {
    const fetchFrog = () => {
      fetch("/frogs/random")
      .then(res => res.json())
      .then(res => {
        setData((prev) => ({...prev,frogData: res}));
      })
      .catch(err => console.log(err));
    }
    const interval = setInterval(() => {
      fetchFrog();
    }, 2000);
    setData({...data, interval})
  }

  

  React.useEffect(() => {
    const fetchFrog = () => {
      fetch("/frogs/random")
      .then(res => res.json())
      .then(res => {
        setData((prev) => ({...prev,frogData: res}));
      })
      .catch(err => console.log(err));
    }
    console.log("App mounted");
    fetchFrog();
  }, [])

  React.useEffect(()=> {
    console.log("App updated"); 
  })

    return (
      <div className="App">
        <h1>Welcome to Frogserve</h1>
        {data.show && <FrogCard name={data.frogData.name} imgSrc={data.frogData.image} setData={setData} interval={data.interval} />}
        <button onClick={hideFrog}>Hide Frog</button>
        <button onClick={handleClick}>Get a new frog</button>
        <button onClick={cycleFrog}>Cycle Frogs</button>
      </div>
    )
}

export default App;