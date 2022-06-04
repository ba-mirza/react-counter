import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [counter, setCounter] = React.useState(0)
  const [start, setStart] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(0);

  let val: any;
  const startWith = (start: any) => {
    val = start;
  }

  const startWithButton = () => {
    setStart(val)
    setCounter(val)
  }

  const inc = () => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(0)
  }

  let stop: boolean = false;

  if (counter === maxValue) {
    stop = true;
  }

  const check = (val: any): boolean => {
    if (val === maxValue) {
      return true
    }
    return false
  }

  return (
    <div className="App">
      <div className='one_box'>
        <div className='values'>
          <h2>MAX VALUE: {maxValue}</h2>
          <input className='superInput' type="text" onChange={({ target }) => setMaxValue(parseInt(target.value))} />
          <h2>START VALUE: {start}</h2>
          <input className='superInput' type="text" onChange={({ target }) => startWith(parseInt(target.value))} />
        </div>
        <div>
          <button onClick={startWithButton}>SET</button>
        </div>
      </div>
      <div className='two-box'>
        <div className='values'>
          <h1>{counter}</h1>
        </div>
        <div>
          <button disabled={check(counter)} onClick={inc}>INC</button>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
