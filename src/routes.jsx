import { createBrowserRouter, Link } from "react-router-dom";

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
import Protected from "./pages/Customer/Protected/Protected";

export const routesArray = [
    {
        path: "/",
        element: <Protected />,
        children: [
            {
                path: "/",
                element: <CustomerDashboard />,
            },
            {
                path: "places",
                element: <Places />,
            },
            {
                path: "rooms",
                element: <Rooms />,
            },
            {
                path: "rooms/:id",
                element: <InsideRoom />,
            },
            {
                path: "check-status",
                element: <CheckStatus />,
            },
            {
                path: "buying-cart",
                element: <BuyingCart />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ]
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "home",
        element: <Home />,
    }

];
