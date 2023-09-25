import Profile from '../pages/GuestUser/GuestUserPage'
import GuestUserAuth from '../pages/GuestUser/GuestUserAuth';


const guestUser = "/guest";

const guestUserRoute =
{
    path: `${guestUser}`,
    // element: <ProtectedGuestUser/>,
    children: [
        {
            path:`${guestUser}`,
            element: <Profile />,
        },
        {
            path: `${guestUser}/auth`,
            element: <GuestUserAuth />,
        },
    ]
    
};

export default guestUserRoute;