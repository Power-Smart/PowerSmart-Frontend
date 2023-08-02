import './App.css'
import { useDispatch } from 'react-redux'
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
  useEffect(() => {
    dispatch(session());
    let token = localStorage.getItem("token");
    if (token) {
      const { id } = jwtDecode(token);
      dispatch(fetchCustomer(id));
    }
  }, [])
  return (
    <RouterProvider router={router} />
  )
}

export default App

