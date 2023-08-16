import ProtectedTechSupport from '../pages/Customer/Protected/ProtectedTechSupport';
import AddDevice from '../pages/TechSupport/Devices/AddDevice'
import ProfileTechSupport from '../pages/TechSupport/Profile'
import Profile from '../pages/TechSupport/Profile';
import TechDashboard from '../pages/TechSupport/TechDashboard/TechDashboard';
import OrderRequest from '../pages/TechSupport/CusOrderRequsetInfo/OrderRequest';
import TechMarketPlace from '../pages/TechSupport/TechMarketPlace/TechMarketPlace';
import SelectPlaceRoom from '../pages/TechSupport/SelectPlaceRoom/SelectPlaceRoom';
import ReviewUserComplaint from '../pages/TechSupport/ReviewUserComplaint/ReviewUserComplaint';
import UserComplaints from '../pages/TechSupport/UserComplaints/UserComplaints';
import Relays from '../pages/TechSupport/Relays/Relays';
import Places from '../pages/TechSupport/Places/Places';
import AccessCusAccount from '../pages/TechSupport/AccessCusAccount/AccessCusAccount';
import Rooms from '../pages/TechSupport/Rooms/Rooms';
import Devices from '../pages/TechSupport/Devices/Devices';
import AddRelay from '../pages/TechSupport/Relays/AddRelay';
import PaymentSummary from '../pages/TechSupport/PaymentSummary/PaymentSummary';
import Sensors from '../pages/TechSupport/Sensors/Sensors';
import Chat from '../pages/TechSupport/Chat/Chat';



const techSupport = "/tech";

const techSupportRoute =
{
    path: `${techSupport}`,
    element: <ProtectedTechSupport />,
    children: [
        {
            path: `${techSupport}`,
            element: <TechDashboard />,
        },
        {
            path: `${techSupport}/orderRequest`,
            element: <OrderRequest />,
        },
        {
            path: `${techSupport}/marketPlace`,
            element: <TechMarketPlace />,
        },
        {
            path: `${techSupport}/selectPlaceRoom`,
            element: <SelectPlaceRoom />,
        },
        {
            path: `${techSupport}/paymentSummary`,
            element: <PaymentSummary />
        },
        {
            path: `${techSupport}/userComplaints`,
            element: <UserComplaints />,
        },
        {
            path: `${techSupport}/viewUserComplaint`,
            element: <ReviewUserComplaint />,
        },
        {
            path: `${techSupport}/profile`,
            element: <ProfileTechSupport />,
        },
        {
            path: `${techSupport}/accessCusAccount`,
            element: <AccessCusAccount />,
        },
        {
            path: `${techSupport}/addDevice`,
            element: <AddDevice />,
        },
        {
            path: `${techSupport}/relays`,
            element: <Relays />,
        },
        {
            path: `${techSupport}/sensors`,
            element: <Sensors />,
        },
        {
            path: `${techSupport}/addRelays`,
            element: <AddRelay />,
        },
        {
            path: `${techSupport}/places`,
            element: <Places />,
        },
        {
            path: `${techSupport}/place/room`,
            element: <Rooms />,
        },
        {
            path: `${techSupport}/place/rooms/devices`,
            element: <Devices />,
        },
        {
            path: `${techSupport}/chat`,
            element: <Chat />,
        },
    ]
};

export default techSupportRoute;