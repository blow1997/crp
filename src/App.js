import React from 'react';
import Hello from './welcomp';
import Secand from './another';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hello name="Bharath" age="20"/>
      <p>second one:)</p>
      <Secand/>  
    </div>
  );
}

export default App;
