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
import Chat from '../pages/Customer/Chat'

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
            path: "chat",
            element: <Chat />,
        },
        {
            path: "support",
            element: <Support />,
        }
    ]
};

export default customerRoute;