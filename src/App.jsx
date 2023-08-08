//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/formsample" element={<FormSample />} />
//           <Route path="/customer/dashboard" element={<CustomerDashboard />} />
//           <Route path="/admin/techsupport" element={<TechSupportView />} />
//           <Route path="/admin/stockmanager" element={<StockManagerView />} />
//           <Route path="/admin/payment" element={<PaymentView />} />
//           <Route path="/admin/customer" element={<CustomerView />} />
//           <Route path="/admin/complaint" element={<ComplaintView />} />

import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { session } from './redux/slices/userSlice'

import FormSample from './pages/FormSample'

function App() {
  const dispatch = useDispatch()
  const customer = useSelector(selectCustomer)
  useEffect(() => {
    dispatch(session());
    let token = localStorage.getItem("token");
    if (token && customer.status === "idle") {
      const { id } = jwtDecode(token);
      dispatch(fetchCustomer(id));
    }
  }, [])
  return (

//           <Route path='/' element={<Home />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/customer/dashboard' element={<CustomerDashboard />} />
//           <Route path='/formsample' element={<FormSample />} />
//           <Route path='/admin/stockmanager/new' element={<StockManagerAdd />} />
//           <Route path='/admin/techsupport/new' element={<TechSupportAdd />} />


//     <Router>
//       <div className='flex h-screen items-center justify-center w-full'>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/customer/dashboard' element={<CustomerDashboard />} />
//           <Route path='/formsample' element={<FormSample />} />
//           <Route path="/admin/complaint/info" element={<ComplaintInfo />} />
//           <Route path="/admin/techsupport/info" element={<TechSupportInfo />} />
//           <Route path="/admin/viewcustomer" element={<AdminViewCustomer />} />
//           <Route path="/admin/profile" element={<AdminProfile />} />
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
//         </Routes>
//       </div>
//     </Router>
    <RouterProvider router={router} />

  )
}

export default App;
