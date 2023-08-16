import ProtectedAdmin from "../pages/Customer/Protected/ProtectedAdmin";
import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard";
import CustomerView from "../pages/Admin/CustomerView/CustomerView";
import CustomerInfo from "../pages/Admin/CustomerInfo/CustomerInfo";
import StockManagerView from "../pages/Admin/StockManagerView/StockManagerView";
import StockManagerAdd from "../pages/Admin/StockManagerAdd/StockManagerAdd";
import TechSupportView from "../pages/Admin/TechSupportView/TechSupportView";
import TechSupportInfo from "../pages/Admin/TechSupportInfo/TechSupportInfo";
import TechSupportAdd from "../pages/Admin/TechSupportAdd/TechSupportAdd";
import ComplaintView from "../pages/Admin/ComplaintView/ComplaintView";
import ComplaintInfo from "../pages/Admin/ComplaintInfo/ComplaintInfo";
import PaymentView from "../pages/Admin/PaymentView/PaymentView";
import AdminProfile from "../pages/Admin/Profile/AdminProfile";

const adminRoute = {
    path: "/admin",
    element: <ProtectedAdmin />,
    children: [
        {
            path: "/admin",
            element: <AdminDashboard />,
        },
        {
            path: "/admin/customer",
            element: <CustomerView />,
        },
        {
            path: "/admin/customer/:customerId",
            element: <CustomerInfo />,
        },
        {
            path: "/admin/stockmanager",
            element: <StockManagerView />,
        },
        {
            path: "/admin/stockmanager/add",
            element: <StockManagerAdd />,
        },
        {
            path: "/admin/techsupport",
            element: <TechSupportView />,
        },
        {
            path: "/admin/techsupport/:techSupportId",
            element: <TechSupportInfo />,
        },
        {
            path: "/admin/techsupport/add",
            element: <TechSupportAdd />,
        },
        {
            path: "/admin/complaint",
            element: <ComplaintView />,
        },
        {
            path: "/admin/complaint/:complaintId",
            element: <ComplaintInfo />,
        },
        {
            path: "/admin/payment",
            element: <PaymentView />,
        },
        {
            path: "/admin/profile",
            element: <AdminProfile />,
        }
    ]
};

export default adminRoute;