import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { session } from "./redux/slices/userSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import FormSample from "./pages/FormSample";
import CustomerDashboard from "./pages/Customer/Dashboard/Dashboard";
import Places from "./pages/Customer/Places/Places";
import Rooms from "./pages/Customer/Rooms/Rooms";
import InsideRoom from "./pages/Customer/Rooms/InsideRoom";
import CheckStatus from "./pages/Customer/Rooms/CheckStatus";
import BuyingCart from "./pages/Customer/Billing/BuyingCart";
import Profile from "./pages/Customer/Profile/Profile";
import TechSupportView from "./pages/Admin/TechSupportView/TechSupportView";
import StockManagerView from "./pages/Admin/StockManagerView/StockManagerView";
import PaymentView from "./pages/Admin/PaymentView/PaymentView";
import CustomerView from "./pages/Admin/CustomerView/CustomerView";
import ComplaintView from "./pages/Admin/ComplaintView/ComplaintView";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(session());
  }, []);
  return (
    <Router>
      <div className="flex h-screen items-center justify-center w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/formsample" element={<FormSample />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/admin/techsupport" element={<TechSupportView />} />
          <Route path="/admin/stockmanager" element={<StockManagerView />} />
          <Route path="/admin/payment" element={<PaymentView />} />
          <Route path="/admin/customer" element={<CustomerView />} />
          <Route path="/admin/complaint" element={<ComplaintView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
