import React, { ChangeEvent, useState } from 'react';
import {motion} from 'framer-motion'
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

  const btnStyle = {
    listStyle: 'none',
    outline: 'none',
    border: 'none',
    backgroundColor: "#ddd",
    cursor: 'pointer',
    marginLeft: '10px',
    marginTop: '10px',
    padding: '15px'
  }


  return (
    <div className="App">
      <motion.div
      initial={false}
      className='one_box'>
        <div className='values'>
          <div className='superInputWrapper'>
            <input className='superInput' type="text" value={minValueInput} onChange={minValueHandleChange} />
          </div>
          <div className='superInputWrapper'>
            <input className='superInput' type="text" value={maxValueInput} onChange={(e) => setMaxValueInput(+e.currentTarget.value)} />
          </div>
        </div>
        <div>
          <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            style={btnStyle}
            disabled={!!error}
            onClick={setMinMaxValues}>
              SET
          </motion.button>
        </div>
      </motion.div>
      <div className='two-box'>
        <motion.div
          animate={{scale: 0.5}}
        className='values'>
          <h1>{error ? error : counter}</h1>
        </motion.div>
        <div>
          <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            style={btnStyle}
            disabled={counter === maxValue}
            onClick={inc}>
              INC
          </motion.button>
          <motion.button
            whileHover={{scale: 1.1}}
            style={btnStyle}
            onClick={reset}>
              RESET
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default App;
