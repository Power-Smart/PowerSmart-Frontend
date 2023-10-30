import Places from '../pages/Customer/Places/Places'
import Rooms from '../pages/Customer/Rooms/Rooms'
import InsideRoom from '../pages/Customer/Rooms/InsideRoom'
import CheckStatus from '../pages/Customer/Rooms/CheckStatus'
import BuyingCart from '../pages/Customer/Billing/BuyingCart'
import ProfileCustomer from '../pages/Customer/Profile/Profile'
import CustomerDashboard from '../pages/Customer/Dashboard/Dashboard'
import ProtectedCustomer from "../pages/Customer/Protected/ProtectedCustomer";
import Support from '../pages/Customer/Support/Support'
import AddPlace from '../pages/Customer/Places/AddPlace'
import AddRooms from '../pages/Customer/Rooms/AddRooms'
// import Chat from '../pages/Customer/Chat'
import UpdateRoom from '../pages/Customer/Rooms/UpdateRoom'
import UpdatePlace from '../pages/Customer/Places/UpdatePlace'
import Chat from '../pages/Customer/Chat/Chat'
import Schedules from '../pages/Customer/Scheduling/schedules'
import AddSchedule from '../pages/Customer/Scheduling/AddSchedule'
import UpdateSchedule from '../pages/Customer/Scheduling/UpdateSchedule'
import Subscription from '../pages/Customer/Billing/Subscription'
import TechRequests from '../pages/Customer/Requests/TechRequests'
import GuestUserSuggest from '../pages/Customer/GuestUserSuggest/GuestUserSuggest'

// import socketIO from 'socket.io-client';
// const socket = socketIO.connect('http://localhost:3010');

const customerRoute =
{
    path: "/",
    element: <ProtectedCustomer />,
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
            path: "places/:placeID/rooms",
            element: <Rooms />,
        },
        {
            path: "places/:placeID/rooms/:roomID/controlpanel",
            element: <InsideRoom />,
        },
        {
            path: "places/:placeID/rooms/:roomID/controlpanel/:deviceID/schedules",
            element: <Schedules />,
        },
        {
            path: "places/:placeID/rooms/:roomID/controlpanel/:deviceID/addSchedule",
            element: <AddSchedule />,
        },
        {
            path: "places/:placeID/rooms/:roomID/controlpanel/:deviceID/schedules/update/:scheduleID",
            element: <UpdateSchedule />,
        },
        {
            path: "places/:placeID/rooms/:roomID/status",
            element: <CheckStatus />,
        },
        {
            path: "payments",
            element: <BuyingCart />,
        },
        {
            path: "profile",
            element: <ProfileCustomer />,
        },
        {
            path: "places/add",
            element: <AddPlace />,
        },
        {
            path: "places/:placeID/rooms/add",
            element: <AddRooms />,
        },
        {
            path: "places/:placeID/rooms/:roomID/update",
            element: <UpdateRoom />,
        },
        {
            path: "places/:placeID/update",
            element: <UpdatePlace />,
        },
        {
            path: "chat",
            element: <Chat/>,
        },
        {
            path: "support",
            element: <Support />,
        },
        {
            path: "subscribe",
            element: <Subscription />,
        },
        {
            path: "techrequests",
            element: <TechRequests />,
        },
        {
            path: "guestSuggest",
            element: <GuestUserSuggest />,
        }
    ]
};

export default customerRoute;