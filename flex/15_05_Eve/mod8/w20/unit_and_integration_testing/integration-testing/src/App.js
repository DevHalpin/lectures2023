import React, {useEffect} from 'react';
import Header from './components/Header';
import Game from './components/Game';
import useApplicationData from './hooks/useApplicationData';
import {calcStatus, chooseRobotItem} from './helpers/helpers';
import './App.scss';

const App = () => {
  const {
    state,
    setCompSelection,
    setPlayerSelection,
    toggleIsCheating,
  } = useApplicationData();

  const status = calcStatus(state.playerSelection, state.compSelection);

  useEffect(() => {
    if (state.playerSelection) {
      const compSelection = chooseRobotItem(state.isCheating, state.playerSelection);
      setCompSelection(compSelection);
    }
  }, [state.playerSelection, setCompSelection, state.isCheating]);

  return (
    <div className="App">
      <Header options={state.options} />
      <Game
        state={state}
        status={status}
        setPlayerSelection={setPlayerSelection}
        toggleIsCheating={toggleIsCheating}
      />
    </div>
  );
};

export default App;
