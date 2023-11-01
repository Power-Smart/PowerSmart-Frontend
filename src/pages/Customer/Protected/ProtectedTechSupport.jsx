import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoNotifications } from "react-icons/io5"
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { notification } from "antd";
import io from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_APP_SOCKET_URL;

const ProtectedTechSupport = () => {
    const navigate = useNavigate();
    const { isLogged, user } = useSelector(state => state.user);
    const [notifications, setNotifications] = useState([]);
    const [api, contextHolder] = notification.useNotification();
    const socketIO = io.connect(SOCKET_URL);

    const openNotification = (title, message) => {
        api.open({
            message: title,
            description: message,
            icon: (
                <NotificationOutlined
                    style={{
                        color: '#108ee9',
                    }}
                />
            ),
        });
    };

    useEffect(() => {
        if (!isLogged || user.role != 2) {
            navigate('/login');
        } else {
            socketIO.emit("joinNotifications", { user: user.id, role: user.role });
        }
    }, [user]);

    socketIO.on("receiveNotifications", (data) => {
        openNotification(data.title, data.message);
        setNotifications([...notifications, data]);
    });

    return (
        <>
            <div className="relative">
                {/* <h1 className="absolute text-xs right-0 top-0 text-white z-50">Customer</h1> */}
                {contextHolder}
                <Link to="/tech/notifications"
                    className="absolute right-8 bottom-8 z-50 bg-slate-800 rounded-full border-white border-2 shadow-sm cursor-pointer hover:scale-110 hover:rotate-6 transition-all"
                    onClick={() => setNotifications([])}
                >
                    <IoNotifications className="text-3xl m-2 text-white z-50" />
                    {notifications.length > 0 && <div className="text-xs font-bold text-white p-1 right-2 top-2 rounded-full absolute bg-red-700">{notifications.length}</div>}
                </Link>
                <Outlet />
            </div>
        </>
    )
}

export default ProtectedTechSupport