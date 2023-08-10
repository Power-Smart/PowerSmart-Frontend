import ProtectedTechSupport from '../pages/Customer/Protected/ProtectedTechSupport';
import UserInquiries from '../pages/TechSupport/UserInquiries/UserInquiries'
import AddDevice from '../pages/TechSupport/AddDevice'
import ProfileTechSupport from '../pages/TechSupport/Profile'
import CustomerRequest from '../pages/TechSupport/CustomerRequestTable/CustomerRequest';
import Profile from '../pages/TechSupport/Profile';

const techSupport = "/tech";

const techSupportRoute =
{
    path: `${techSupport}`,
    element: <ProtectedTechSupport />,
    children: [
        {
            path: `${techSupport}/addDevice`,
            element: <AddDevice />,
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
        }
    ]
};

export default techSupportRoute;