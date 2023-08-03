import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Table from './components/ExampleTable/Table2'
import UserInquiries from './pages/TechSupport/UserInquiries/UserInquiries'
import AddPlace from './pages/TechSupport/AddPlace'
import AddDevice from './pages/TechSupport/AddDevice'
import Profile from './pages/TechSupport/Profile'
import CustomerAddPlace from './pages/Customer/CustomerAddPlace'
import AddRooms from './pages/Customer/AddRooms'
import Chat from './pages/Customer/Chat'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { session } from './redux/slices/userSlice'
import { routesArray } from './routes.jsx'
import { fetchCustomer, selectCustomer } from './redux/slices/customerSlice'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter(routesArray);


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
    <RouterProvider router={router} />
  )
}

export default App

