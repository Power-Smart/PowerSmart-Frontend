import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Table from './components/ExampleTable/Table2'
import UserInquiries from './pages/TechSupport/UserInquiries/UserInquiries'


function App() {

  return (
    <Router>
      <div className='flex h-screen items-center justify-center w-full'>
        <Routes>
          <Route path='/' element={<Table />} />
          <Route path='/login' element={<Login />} />
          <Route path='/userinquiries' element={<UserInquiries/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App

