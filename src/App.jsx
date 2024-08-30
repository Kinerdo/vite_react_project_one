import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <div class="container">
      <h1>THE RISE AND FALL OF TALKTRONICA</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        hello world!
      </p>
      <ul class="horizontal-list">
          <li><a href="https://www.youtube.com/channel/UCTV1UexUgB4YLc8s9Cuqb1w" target="_blank">youtube</a></li>
          <li><a href="https://x.com/talktronica" target="_blank">x</a></li>
          <li><a href="https://www.tiktok.com/@talktronica" target="_blank">tiktok</a></li>
          <li><a href="https://www.instagram.com/talktronica/" target="_blank">instagram</a></li>
      </ul>
      </div>
    </>
  )
}

export default App

