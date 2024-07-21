import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App" >

    <SideBar />
    
   <Outlet/>
    </div>
     
    </>
  )
}

export default App
