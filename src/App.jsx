import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { session } from './redux/slices/userSlice'
import { routesArray } from './routes.jsx'
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
  }, [])
  return (
    <RouterProvider router={router} />
  )
}

export default App

