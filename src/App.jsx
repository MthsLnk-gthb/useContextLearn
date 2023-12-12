import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <main className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Navbar/>
      <Outlet/>
    </main>
  )
}

export default App
