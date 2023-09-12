import ProtectedTechSupport from '../pages/Customer/Protected/ProtectedTechSupport';
import AddDevice from '../pages/TechSupport/Devices/AddDevice'
// import ProfileTechSupport from '../pages/TechSupport/Profile'
import ProfileTechSupport from '../pages/TechSupport/Profile/Profile';
// import Profile from '../pages/TechSupport/Profile';
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
import EditRelay from '../pages/TechSupport/Relays/EditRelay';


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
            path: `${techSupport}/orderRequest/:orderID`,
            element: <OrderRequest />,
        },
        {
            path: `${techSupport}/marketPlace/:customerID`,
            element: <TechMarketPlace />,
        },
        {
            path: `${techSupport}/selectPlaceRoom/:customerID/:itemID`,
            element: <SelectPlaceRoom />,
        },
        {
            path: `${techSupport}/paymentSummary/:customerID`,
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
            path: `${techSupport}/:customerID/place/:placeID/relays`,
            element: <Relays />,
        },
        {
            path: `${techSupport}/:customerID/place/:placeID/relays/add`,
            element: <AddRelay />,
        },
        {
            path: `${techSupport}/:customerID/place/:placeID/relays/update/:relayID`,
            element: <EditRelay />,
        },
        {
            path: `${techSupport}/addRelays`,
            element: <AddRelay />,
        },
        {
            path: `${techSupport}/customer/:customerID`,
            element: <Places />,
        },
        {
            path: `${techSupport}/:customerID/place/:placeID/rooms`,
            element: <Rooms />,
        },
        {
            path: `${techSupport}/:customerID/place/:placeID/room/:roomID/devices`,
            element: <Devices />,
        },
        {
            path: `${techSupport}/:customerID/place/:placeID/room/:roomID/sensor`,
            element: <Sensors />,
        },
        {
            path: `${techSupport}/:customerID/place/:placeID/room/:roomID/devices/add`,
            element: <AddDevice />,
        },
        {
            path: `${techSupport}/chat`,
            element: <Chat />,
        },
    ]
};

export default techSupportRoute;