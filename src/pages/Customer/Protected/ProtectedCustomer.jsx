import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { IoNotifications } from "react-icons/io5"

const ProtectedCustomer = () => {
    const navigate = useNavigate();
    const { isLogged, user } = useSelector(state => state.user);
    useEffect(() => {
        if (!isLogged || user.role != 1) {
            navigate('/login');
        }
    }, [])
    return (
        <div className="relative">
            {/* <h1 className="absolute text-xs right-0 top-0 text-white z-50">Customer</h1> */}
            <Link to="/notifications" className="absolute right-8 bottom-8 z-50 bg-slate-800 rounded-full border-white border-2 shadow-sm cursor-pointer hover:scale-110 hover:rotate-6 transition-all">
                <IoNotifications className="text-3xl m-2 text-white z-50" />
                <div className="w-3 h-3 right-2 top-2 rounded-full absolute bg-red-700"></div>
            </Link>
            <Outlet />
        </div>
    )
}

export default ProtectedCustomer