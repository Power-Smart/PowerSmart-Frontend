import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Table from './components/ExampleTable/Table2'
import Cutomer from './pages/TechSupport/CusOrderRequsetInfo/OrderRequest'
import Tech from './pages/TechSupport/UserInquires/UserInquires'
import CustomerRequest from './pages/TechSupport/CustomerRequestTable/CustomerRequest'
import SelectPlaceRoom from './pages/TechSupport/SelectPlace&Room/SelectPlace&Room'


function App() {

  return (
    <Router>
      <div className='flex h-screen items-center justify-center w-full'>
        <Routes>
          <Route path='/' element={<SelectPlaceRoom />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

