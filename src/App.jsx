import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Table from './components/ExampleTable/Table2'
import Places from './pages/Customer/Places/Places'
import Rooms from './pages/Customer/Rooms/Rooms'
import InsideRoom from './pages/Customer/Rooms/InsideRoom'



function App() {

  return (
    <Router>
      <div className='flex h-screen items-center justify-center w-full'>
        <Routes>
          <Route path='/' element={<Table />} />
          <Route path='/login' element={<Login />} />
          <Route path='/places' element={<Places />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/insideroom' element={<InsideRoom />} />
          <Route path='/rooms' element={<Rooms />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

