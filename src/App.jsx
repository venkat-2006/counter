import { useState } from 'react'
import './App.css'

function App() {
  // useState hook for counter
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>🚀 Counter App</h1>
      <p>Current Count: <strong>{count}</strong></p>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}> Increase ➕ </button>
        <button onClick={() => setCount(count - 1)}> Decrease ➖ </button>
        <button onClick={() => setCount(0)}> Reset 🔄</button>
      </div>
    </div>
  )
}

export default App
