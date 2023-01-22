import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  // function kgToLbs(weight: number | string) {
  //   if (typeof weight === 'number')
  //     return weight * 2.2;
  //   else
  //     return parseInt(weight) * 2.2;
  // }
  

  // kgToLbs(10);
  // kgToLbs('10kg');

// type Draggable = {
//   drag: () => void
// }

// type Resizable = {
//   resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {}
// }

//Literal (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 50;

// type Metric = 'cm' | 'inch';

function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log('Hola!');
}

greet(null);

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
    </div>
  )
}

export default App
