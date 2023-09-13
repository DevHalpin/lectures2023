import './App.css';
import Input from './components/Input';
import KeyPress from './components/KeyPress';
import Location from './components/Location';
import Mouse from './components/Mouse';
import Request from './components/Request';
import Title from './components/Title';
import { useState } from 'react';

const App = () => {
  const [showMouse, setShowMouse] = useState(false);
  return (
    <div className="App">
      <h2>Fun with Custom Hooks</h2>

      {/* <Title/>
      {showMouse &&<Mouse/>}
      <Input/>
      <Location/> */}
      {/* <KeyPress/> */}
      <Request/>
    </div>
  );
};

export default App;
