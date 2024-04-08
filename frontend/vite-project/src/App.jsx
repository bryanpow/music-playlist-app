import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import SongFrom from './components/SongFrom'
import SongsList from './components/SongsList'
function App() {
 

  return (
    <>
    <SongFrom />
    <SongsList />
    </>
  )
}

export default App
