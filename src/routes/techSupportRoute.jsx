import ProtectedTechSupport from '../pages/Customer/Protected/ProtectedTechSupport';
import UserInquiries from '../pages/TechSupport/UserInquiries/UserInquiries'
import AddDevice from '../pages/TechSupport/AddDevice'
import ProfileTechSupport from '../pages/TechSupport/Profile'
import CustomerRequest from '../pages/TechSupport/CustomerRequestTable/CustomerRequest';
import Profile from '../pages/TechSupport/Profile';
import TechDashboard from '../pages/TechSupport/TechDashboard/TechDashboard';
import OrderRequest from '../pages/TechSupport/CusOrderRequsetInfo/OrderRequest';
import TechMarketPlace from '../pages/TechSupport/TechMarketPlace/TechMarketPlace';
import SelectPlaceRoom from '../pages/TechSupport/SelectPlaceRoom/SelectPlaceRoom';
import EmptySensor from '../pages/TechSupport/InsideSensorsEmpty/EmptySensor';
import AddPlace from '../pages/TechSupport/AddPlace'




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
            path: `${techSupport}/userInquiries`,
            element: <UserInquiries />,
        },
        {
            path: `${techSupport}/profile`,
            element: <ProfileTechSupport />,
        },
        {
            path: `${techSupport}/customerRequests`,
            element: <CustomerRequest />,
        },
        {
            path: `${techSupport}/profile`,
            element: <Profile />,
        },
        {
            path: `${techSupport}/emptySensor`,
            element: <EmptySensor />,
        },
        {
            path: `${techSupport}/addPlace`,
            element: <AddPlace />,
        },
        {
            path: `${techSupport}/addDevice`,
            element: <AddDevice />,
        }
    ]
};

export default techSupportRoute;