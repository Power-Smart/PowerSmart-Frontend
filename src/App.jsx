import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Table from './components/ExampleTable/Table2'
import Places from './pages/Customer/Places/Places'
import Rooms from './pages/Customer/Rooms/Rooms'
import InsideRoom from './pages/Customer/Rooms/InsideRoom'
import CheckStatus from './pages/Customer/Rooms/CheckStatus'
import BuyingCart from './pages/Customer/Billing/BuyingCart'
import Profile from './pages/Customer/Profile/Profile'



function App() {

  return (
    <Router>
      <div className='flex h-screen items-center justify-center w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/places' element={<Places />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/insideroom' element={<InsideRoom />} />
          <Route path='/rooms/status' element={<CheckStatus />} />
          <Route path='/plan' element={<BuyingCart />} />
          <Route path='/profile' element={<Profile />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App

