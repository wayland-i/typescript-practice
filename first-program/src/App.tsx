import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  console.log('hello world')

  let age: number = 20;

    if (age < 50) age += 10;

  console.log(age)

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  )
}

export default App
