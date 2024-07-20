import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import MyMoves from './routes/myMoves/MyMoves'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App" >

    <SideBar />
    <MyMoves/>
    </div>
     
    </>
  )
}

export default App
