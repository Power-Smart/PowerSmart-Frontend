import ProtectedTechSupport from '../pages/Customer/Protected/ProtectedTechSupport';
import AddDevice from '../pages/TechSupport/AddDevice'
import ProfileTechSupport from '../pages/TechSupport/Profile'
import CustomerRequest from '../pages/TechSupport/CustomerRequestTable/CustomerRequest';
import Profile from '../pages/TechSupport/Profile';
import TechDashboard from '../pages/TechSupport/TechDashboard/TechDashboard';
import OrderRequest from '../pages/TechSupport/CusOrderRequsetInfo/OrderRequest';
import TechMarketPlace from '../pages/TechSupport/TechMarketPlace/TechMarketPlace';
import SelectPlaceRoom from '../pages/TechSupport/SelectPlaceRoom/SelectPlaceRoom';
import AddPlace from '../pages/TechSupport/AddPlace'
import ReviewUserComplaint from '../pages/TechSupport/ReviewUserComplaint/ReviewUserComplaint';
import UserComplaints from '../pages/TechSupport/UserComplaints/UserComplaints';



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
            path: `${techSupport}/customerRequests`,
            element: <CustomerRequest />,
        },
        {
            path: `${techSupport}/profile`,
            element: <Profile />,
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