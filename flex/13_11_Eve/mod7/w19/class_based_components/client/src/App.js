import React from "react";
import FrogCard from "./components/FrogCard/FrogCard";


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      frogData: {},
      show: true,
      interval: null,
    };
  }

  hideFrog = () => {
    this.setState({...this.state,show: !this.state.show});
  }

  fetchFrog = () => {
    fetch("/frogs/random")
    .then(res => res.json())
    .then(data => {
      this.setState({
        frogData: data,
      });
    })
    .catch(err => console.log(err));
  }

  cycleFrog = () => {
    const interval = setInterval(() => {
      this.fetchFrog();
    }, 2000);
    this.setState({...this.state, interval})
  }

  clearFrogFetchInterval = () => {
    clearInterval(this.state.interval);
    this.setState({...this.state, interval: null});
  }

  componentDidMount() { //useEffect with blank dependency array
    // console.log("Component mounted");
    this.fetchFrog();
  }

  componentDidUpdate() { //useEffect with dependency array (will fire every time any state changes)
    // console.log("Component updated");
  }


  

  render() {
    return (
      <div className="App">
        <h1>Welcome to Frogserve</h1>
        {this.state.show && <FrogCard name={this.state.frogData.name} imgSrc={this.state.frogData.image} cleanup={this.clearFrogFetchInterval} interval={this.state.interval} />}
        <button onClick={this.hideFrog}>Hide Frog</button>
        <button onClick={this.fetchFrog}>Get a new frog</button>
        <button onClick={this.cycleFrog}>Cycle Frogs</button>
      </div>
    )
  }
}

export default App;