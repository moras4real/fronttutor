import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboardd from './components/Dashboardd'
import React, { useEffect, useState } from 'react'
import Signnn from './components/Signnn'
import Edit from './components/Edit'
import socketClient from "socket.io-client"
import Chat from './components/Chat'
import Signup1 from './components/Signup1'
import Navbar from './components/Navbar'
import Appp from './components/Appp'
import Errorpage from './components/Errorpage'
import Pixture from './components/Pixture'
import 'bootstrap/dist/css/bootstrap.css'
import baseUrl from './components/BaseUrl'

function App() {  
  const [socket, setsocket] = useState("")
  // let endpoint = "http://localhost:4250"
  let endpoint = baseUrl
  useEffect(() => {
    setsocket(socketClient(endpoint))   
  },[])  

  let token = localStorage.token

    return (
    <>
      <Navbar/>
      

      <Routes>               
        <Route path='/home/signin' element={<Signnn/>}/>          
        <Route path='/home/signup' element={<Signup1/>}/> 
        <Route path='/home/pix' element={<Pixture/>}/> 
        <Route path='/dashboard' element={token?<Dashboardd/>:<Navigate to=""/>}/> 
        <Route path='home/chat' element={<Chat socket={socket}/>}/>
        <Route path='/edit' element={<Edit/>}/>   
        <Route path='/home/*' element={<Appp/>}/>   
        <Route path='*' element={<Errorpage/>} />
      </Routes>        
    </>
  )
}

export default App