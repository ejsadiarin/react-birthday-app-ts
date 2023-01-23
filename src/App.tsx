import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>created by Ej Sadiarin on January 23, 2023 10:25 PM</p>
      <p className="read-the-docs">technically at 10:23 PM like January 23 ~ 1/23</p>
      <p>Happy 19th Birthday to me!!!!!!! LESGOWW</p>
      <p>TOP G MODE FOREVER, now first steps first time using React, Vite, and with TypeScript</p>
    </div>
  )
}

export default App
