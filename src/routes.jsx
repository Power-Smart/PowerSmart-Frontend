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
import PageNotFound from "./pages/SpecialPages/PageNotFound";
import Support from './pages/Customer/Support/Support'


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
                path: "places/rooms",
                element: <Rooms />,
            },
            {
                path: "places/rooms/controlpanel",
                element: <InsideRoom />,
            },
            {
                path: "places/rooms/status",
                element: <CheckStatus />,
            },
            {
                path: "payments",
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
    },
    {
        path: "*",
        element: <PageNotFound />,
    }

];
