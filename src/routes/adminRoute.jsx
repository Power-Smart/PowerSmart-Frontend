import ProtectedAdmin from "../pages/Customer/Protected/ProtectedAdmin";
import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard";
import CustomerView from "../pages/Admin/CustomerView/CustomerView";
import CustomerInfo from "../pages/Admin/CustomerInfo/CustomerInfo";
import TechSupportView from "../pages/Admin/TechSupportView/TechSupportView";
import TechSupportInfo from "../pages/Admin/TechSupportInfo/TechSupportInfo";
import TechSupportAdd from "../pages/Admin/TechSupportAdd/TechSupportAdd";
import ItemsView from "../pages/Admin/ItemsView/ItemsView";
import ComplaintView from "../pages/Admin/ComplaintView/ComplaintView";
import ComplaintInfo from "../pages/Admin/ComplaintInfo/ComplaintInfo";
import PaymentsView from "../pages/Admin/PaymentsView/PaymentsView";
import PaymentInfo from "../pages/Admin/PaymentInfo/PaymentInfo";
import AdminProfile from "../pages/Admin/Profile/AdminProfile";
import Notifications from '../pages/Notifications/Notifications';

const adminRoute = {
  path: "/admin",
  // element: <ProtectedAdmin />,
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
      path: "/admin/items",
      element: <ItemsView />,
    },
    // {
    //     path: "/admin/items/add",
    //     element: <ItemsAdd />,
    // },
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
      element: <PaymentsView />,
    },
    {
      path: "/admin/payment/:paymentId",
      element: <PaymentInfo />,
    },
    {
      path: "/admin/profile",
      element: <AdminProfile />,
    },
  ],
    
};

export default adminRoute;
