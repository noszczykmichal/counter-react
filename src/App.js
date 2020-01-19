import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      {/* ustawiamy propsy które będzie można ustawiać w Counter.js */}
      <Counter name="Licznik" value="108" test="wyśiwetl mnie"/>
      <Counter name="Licznik drugi" value="0"/> 
    </div>
  );
}

export default App;
