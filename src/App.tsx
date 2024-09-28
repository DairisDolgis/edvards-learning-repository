import { useState } from 'react'

import './App.css'
import Component from './Component'
import Teksts from './teksts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>edvards-learning-repository</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Component />
        <Teksts textProp='baigā teksta'/>
        </div>
    </>
  )
}

export default App
