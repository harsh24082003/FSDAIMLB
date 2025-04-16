import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './component/registration'
import Login from './component/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Dashboard from './component/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
