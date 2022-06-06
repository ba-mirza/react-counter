import React, { ChangeEvent, useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [error, setError] = useState('');

  //inputs
  const [maxValueInput, setMaxValueInput] = useState(10);
  const [minValueInput, setMinValueInput] = useState(0);



  const setMinMaxValues = () => {
    setMaxValue(maxValueInput)
    setMinValue(minValueInput)
    setCounter(minValue)
  }

  const inc = () => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(minValue)
  }

  // Сделать error: убрать ошику когда исправил, добавить ошибку maxinput === mininput, red text when error
  // validation 
  const minValueHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    if (value === maxValueInput) {
      setError('Error: do not =')
    }
    setMinValueInput(+e.currentTarget.value);
  }


  return (
    <div className="App">
      <div className='one_box'>
        <div className='values'>
          <input className='superInput' type="text" value={minValueInput} onChange={minValueHandleChange} />
          <input className='superInput' type="text" value={maxValueInput} onChange={(e) => setMaxValueInput(+e.currentTarget.value)} />
        </div>
        <div>
          <button disabled={!!error} onClick={setMinMaxValues}>SET</button>
        </div>
      </div>
      <div className='two-box'>
        <div className='values'>
          <h1>{error ? error : counter}</h1>
        </div>
        <div>
          <button disabled={counter === maxValue} onClick={inc}>INC</button>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
