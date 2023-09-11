import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { session } from './redux/slices/userSlice'
import { routesArray } from './routes/routes.jsx'
import { fetchCustomer, selectCustomer } from './redux/slices/customerSlice'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter(routesArray);

import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:3010');


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