import './App.css';
import React, {useState, useEffect } from "react";
function App() {
  const [clickedButtons, setClickecButtons] = useState([])

  const setLevel = (level) => {
    setTimeout(() => {
      document.getElementById("elevator").style.gridRow = level;
      
    }, 1000)
    alert(`At floor ${7 - level}`)
  }

  const buttonClick = (level) => {
    setLevel(level)
  }

  return (
    <div className="App">
      <div className="main">
          <div id="elevator">
            <button onClick={() => buttonClick(6)}>1</button>
            <button onClick={() => buttonClick(5)}>2</button>
            <button onClick={() => buttonClick(4)}>3</button>
            <button onClick={() => buttonClick(3)}>4</button>
            <button onClick={() => buttonClick(2)}>5</button>
            <button onClick={() => buttonClick(1)}>6</button>
          </div>
          <div className="level">floor6</div>
          <div className="level">floor5</div>
          <div className="level">floor4</div>
          <div className="level">floor3</div>
          <div className="level">floor2</div>
          <div className="level">floor1</div>
      </div>
    </div>
  );
}

export default App;