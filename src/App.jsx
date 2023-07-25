import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Places from './pages/Customer/Places/Places'
import Rooms from './pages/Customer/Rooms/Rooms'
import InsideRoom from './pages/Customer/Rooms/InsideRoom'
import CheckStatus from './pages/Customer/Rooms/CheckStatus'
import BuyingCart from './pages/Customer/Billing/BuyingCart'
import Profile from './pages/Customer/Profile/Profile'
import CustomerDashboard from './pages/Customer/Dashboard/Dashboard'
import { useEffect } from 'react'
import { session } from './redux/slices/userSlice'
import FormSample from './pages/FormSample'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(session());
  }, [])
  return (
    <Router>
      <div className='flex h-screen items-center justify-center w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/customer/dashboard' element={<CustomerDashboard />} />
          <Route path='/formsample' element={<FormSample />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

