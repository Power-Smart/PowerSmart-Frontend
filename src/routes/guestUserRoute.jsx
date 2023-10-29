import Profile from '../pages/GuestUser/GuestUserPage'
import GuestUserAuth from '../pages/GuestUser/GuestUserAuth';


const guestUser = "/guest";

const guestUserRoute =
{
    path: `${guestUser}`,
    // element: <ProtectedGuestUser/>,
    children: [
        {
            path: `${guestUser}/auth/:customerID/:placeID/:roomID`,
            element: <GuestUserAuth />,
        }, 
        {
            path: `${guestUser}/:guestID/:customerID/:placeID/:roomID`,
            element: <Profile />,
        }
    ]

};

export default guestUserRoute;