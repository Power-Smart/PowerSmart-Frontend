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
import ViewComplaint from '../pages/TechSupport/UserComplaints/viewComplaint';
import EditRelay from '../pages/TechSupport/Relays/EditRelay';
import Notifications from '../pages/Notifications/Notifications';
import AddRooms from '../pages/TechSupport/Rooms/AddRooms';
import EditDevice from '../pages/TechSupport/Devices/EditDevice';
import AddSensor from '../pages/TechSupport/Sensors/AddSensor';

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
            path: `${techSupport}/marketPlace/:orderID/:customerID`,
            element: <TechMarketPlace />,
        },
        {
            path: `${techSupport}/selectPlaceRoom/:customerID/:itemID/:orderID`,
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
            path: `${techSupport}/viewComplaint/:complaintID/:customerID`,
            element: <ViewComplaint />,
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
            path: `${techSupport}/accessCusAccount/:customerID`,
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
            path: `${techSupport}/:customerID/place/:placeID/room/:roomID/sensor/add`,
            element: <AddSensor />,
        },
        {
            path: `${techSupport}/:customerID/place/:placeID/room/:roomID/devices/add`,
            element: <AddDevice />,
        },
        {
            // tech/ 1 / place / 9 / room / 6 / devices / edit / 19
            path: `${techSupport}/:customerID/place/:placeID/room/:roomID/devices/edit/:deviceID`,
            element: <EditDevice />,
        },
        {
            path: `${techSupport}/chat`,
            element: <Chat />,
        },
        {
            path: `${techSupport}/chat/:customerID`,
            element: <Chat />,
        },
        {
            path: `${techSupport}/notifications`,
            element: <Notifications />
        },
        {
            path: `${techSupport}/:customerID/place/:placeID/rooms/add`,
            element: <AddRooms />,
        },
    ]
};

export default techSupportRoute;