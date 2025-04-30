import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const add = () => {
    console.log("clicked", count)
    setCount(count + 1)
  }

  const remove = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>chai or code</h1>
      <h2>Counter: {count}</h2>
      <button onClick={add}>Add {count}</button>
      <br />
      <button onClick={remove}>Remove {count}</button>
    </>
  )
}

export default App
