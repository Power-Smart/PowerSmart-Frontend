import customerRoute from './customerRoute';
import adminRoute from './adminRoute';
import techSupportRoute from './techSupportRoute';
import stockManagerRoute from "./stockManagerRoute";
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Home from '../pages/Home/Home'
import PageNotFound from "../pages/SpecialPages/PageNotFound";
import ProfileComplete from '../pages/Register/ProfileComplete'

export const routesArray = [
    customerRoute,
    adminRoute,
    techSupportRoute,
    stockManagerRoute,
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
    },
    {
        path: "/register/profileComplete",
        element: <ProfileComplete />,
    }

];
