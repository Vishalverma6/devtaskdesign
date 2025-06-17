import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useSelector } from 'react-redux'

function App() {

  const {token} = useSelector((state)=> state.auth);
  return (
    <>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
     {
      token && (
        <Route path='/dashboard' element={<Dashboard/>}/>
      )
     }

    </Routes> 
    </>
  )
}

export default App
