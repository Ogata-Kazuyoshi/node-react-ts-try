import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import dataApi from './api/data';

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = async () => {
    const temp = await dataApi.getAll();
    console.log(temp);
  };

  return (
    <>
      <header style={{ backgroundColor: 'aqua' }}>
        初期設定のおすすめのやり方
      </header>
      <div>
        <button onClick={clickHandler}>Click Here!!</button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
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
    </>
  );
}

export default App;
