import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
   <>
   <h3 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test</h3>
   <Card username="kir" btntext="click me"/>
   <Card username="mada" btntext="visit me"/>
   <Card/>
   </>
  )
}

export default App
