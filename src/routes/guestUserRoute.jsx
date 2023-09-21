import Profile from '../pages/GuestUser/GuestUserPage'


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
    ]
    
};

export default guestUserRoute;