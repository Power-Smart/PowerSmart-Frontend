import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Protected = ({ children }) => {
    const navigate = useNavigate();
    const { isLogged, user } = useSelector(state => state.user);
    useEffect(() => {
        if (!isLogged || user.role != 1) {
            navigate('/login');
        }
    }, [])
    return (
        <>
            {children}
        </>
    )
}

export default Protected