import React,{useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'


function App () {


  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='#' element={<Header />} />
        </Routes>
      </div>
    </Router>

    

  )
}

export default App
