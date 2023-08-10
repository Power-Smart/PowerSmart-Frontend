import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const ProtectedCustomer = () => {
    const navigate = useNavigate();
    const { isLogged, user } = useSelector(state => state.user);
    // useEffect(() => {
    //     if (!isLogged || user.role != 1) {
    //         navigate('/login');
    //     }
    // }, [])
    return (
        <>
            <h1 className="absolute text-xs right-0 top-0 text-white z-50">Customer</h1>
            <Outlet />
        </>
    )
}

export default ProtectedCustomer