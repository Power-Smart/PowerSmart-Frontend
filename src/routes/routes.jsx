import customerRoute from './customerRoute';
import adminRoute from './adminRoute';
import techSupportRoute from './techSupportRoute';
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Home from '../pages/Home/Home'
import PageNotFound from "../pages/SpecialPages/PageNotFound";
import ProfileComplete from '../pages/Register/ProfileComplete'
import CheckoutButton from '../components/smallComps/CheckoutButton';
import guestUserRoute from './guestUserRoute';
import { Landing } from '../pages/LandingPage/Landing';

export const routesArray = [
    customerRoute,
    adminRoute,
    techSupportRoute,
    guestUserRoute,
    {
        path: "/sss",
        element: <Home />,
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
        path: "pay",
        element: <CheckoutButton />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
    {
        path: "/register/profileComplete",
        element: <ProfileComplete />,
    },
    {
        path: "/landing",
        element: <Landing />,
    },


];
