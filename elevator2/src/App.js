import './App.css';
import React, { useState, useEffect } from "react";
function App() {
  const [floorLevel, setFloorLevel] = useState(1);
  const [clickedButtons, setClickecButtons] = useState([]);
  const [moving, setMoving] = useState(false);

  const changeButtonColor = () => {
    Array.from(document.querySelectorAll('button')).map(function (button) {
      if (clickedButtons.includes(parseInt(button.id))) {
        button.style.backgroundColor = "green";
      } else {
        button.style.backgroundColor = "white";
      }
      return button.id
    })
  }

  useEffect(() => {
    changeButtonColor()
  }, [clickedButtons, floorLevel])

  useEffect(() => {
    if (clickedButtons.length > 0) {
      setMoving(true)
      if (clickedButtons.includes(floorLevel)) {
        //needs to be put on the callstack after it is clear
        setTimeout(() => {
          setMoving(false)
        }, 0)
        setClickecButtons(clickedButtons => {
          return [...clickedButtons].filter((button) => button !== floorLevel)
        })
      } else if (clickedButtons[0] > floorLevel) {
        const timer = setTimeout(() => {
          setFloorLevel(curFloor => curFloor + 1)
        }, 1000)
        return () => clearTimeout(timer)
      } else if (clickedButtons[0] < floorLevel) {
        const timer = setTimeout(() => {
          setFloorLevel(curFloor => curFloor - 1)
        }, 1000)
        return () => clearTimeout(timer)
      }
      setClickecButtons(clickedButtons => {
        return [...clickedButtons].filter((button) => button !== floorLevel)
      })
      setMoving(false)
    }
  }, [clickedButtons, floorLevel]);

  

  const buttonClick = (buttonNumber) => {
    setClickecButtons(i => [...i, buttonNumber])

    setMoving(true);
  }

  const elevator =
    <div id="elevator">
            <button id='6' onClick={() => buttonClick(6)}>6</button>
            <button id='5' onClick={() => buttonClick(5)}>5</button>
            <button id='4' onClick={() => buttonClick(4)}>4</button>
            <button id='3' onClick={() => buttonClick(3)}>3</button>
            <button id='2' onClick={() => buttonClick(2)}>2</button>
            <button id='1' onClick={() => buttonClick(1)}>1</button>
          </div>

//giving me problems
// const elevator =
// <div id="elevator">
//   {[...Array(6).keys()].reverse().map((i) => {
//     let buttonNumber = i + 1
//     return <button key={buttonNumber} onClick={() => buttonClick({buttonNumber})}>{buttonNumber}</button>
//   })}
// </div>

  return (
    <div className="App">
      <div className="main">
          <div className="level">{floorLevel===6 ? elevator:<div/>}floor6</div>
          <div className="level">{floorLevel===5 ? elevator:<div/>}floor5</div>
          <div className="level">{floorLevel===4 ? elevator:<div/>}floor4</div>
          <div className="level">{floorLevel===3 ? elevator:<div/>}floor3</div>
          <div className="level">{floorLevel===2 ? elevator:<div/>}floor2</div>
          <div className="level">{floorLevel===1 ? elevator:<div/>}floor1</div>
          <h3>{moving ? "Elevator Moving":"You arrived at floor " + floorLevel }</h3>
      </div>
    </div>
  );
}

export default App;