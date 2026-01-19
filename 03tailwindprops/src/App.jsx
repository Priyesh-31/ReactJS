import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  
  return (
    <>
      <h1 className="text-3xl font-bold bg-green-400 p-4 m-4 rounded-xl">
        Tailwind Test!
      </h1>

      <Card username="Priyesh" btnText="Visit me"/>
      <Card username="John" btnText="Dm me"/>
    </>
  )
}

export default App
