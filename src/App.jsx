import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'
import { motion } from "motion/react"

const App = () => {
  const [sidebar, setSidebar] = useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />}></Route>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}></Route>
      </Routes>
    </div>
  )
}

export default App
