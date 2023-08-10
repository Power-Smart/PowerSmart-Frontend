import ProtectedAdmin from "../pages/Customer/Protected/ProtectedAdmin";
import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard";

const adminRoute = {
    path: "/admin",
    element: <ProtectedAdmin />,
    children: [
        {
            path: "/admin",
            element: <AdminDashboard />,
        },
    ]
};

export default adminRoute;