import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Props from './components/Props';
import Lifecycle from './components/LifeCycle';
import React from 'react';
import './App.css';
import LifecycleFunctional from './components/LifecycleFunctional';


const App = () => {
  return (
    <Router>
  <Link to="/props">Props </Link>
  <Link to="/lifecycle">Lifecycle</Link>

  <Switch>
    <Route path="/props">
      <Props />
    </Route>
    <Route path="/lifecycle">
      {/* Functional Version */}
    <LifecycleFunctional/> 
    {/* Class Based Version */}
    {/* <Lifecycle/> */}
    </Route>
  </Switch>
</Router>
  );
};

export default App;
