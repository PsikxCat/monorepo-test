import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { isEmpty, myFunction } from 'utils'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('http://localhost:5000')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <>
      <div className="flex_center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-stone-700">Click on the Vite and React logos to learn more</p>
      <div className="flex_center m-3 rounded-lg bg-white/20">
        <pre>{isEmpty('abc')}</pre>
        <pre>{isEmpty(null)}</pre>
      </div>
      <div className="flex_center border border-green-500 rounded-lg m-3">
        <pre>{myFunction()}</pre>
      </div>
    </>
  )
}

export default App
