import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App text-center mydiv">
      {/* ustawiamy propsy które będzie można ustawiać w Counter.js */}      
      <Counter name="Licznik" value="108" test=""/> 
    </div>
  );
}

export default App;
