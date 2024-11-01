import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Home'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Navbar/>
  <Component/>
  </>
  )
}

export default App
