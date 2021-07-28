import React from "react";
import logo from './logo.svg';
import './App.css';
import defaultArr from './utils/constant';

function App() {


    const [ word, setWord] = React.useState([]);
    const [ stop, setStop] = React.useState(false);
    const [ timer, setTimer] = React.useState([20000]);

    function createSymbols(){
        const word = Math.floor(Math.random()*defaultArr.length);
        const timer = getRandomIntInclusive(10, 30);
        setWord(defaultArr[word]);
        setTimer(timer);
    }
    const test = () => {
        alert('Time is over.');
    }
    setTimeout(test, timer*1000);
    console.log('timer', timer*100)
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

    console.log(defaultArr)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <div>{word}</div>
          <div>{timer}</div>
        <button onClick={createSymbols}>Следующий игрок</button>
      </header>
      {/*<div></div>*/}
    </div>
  );
}

export default App;
