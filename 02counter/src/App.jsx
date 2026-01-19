import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if(counter<20){
      console.log("Counter value after addition: ", counter + 1);
      setCounter(counter + 1);
    }
  }
  const subValue = () => {
    if(counter>0){
      console.log("Counter value after subtraction: ", counter - 1);
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Welcome to Counter App!</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>

      <button onClick={subValue}>Subtract Value</button>
    </>
  )
}

export default App
