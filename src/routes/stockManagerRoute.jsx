import ProtectedStockManager from "../pages/Customer/Protected/ProtectedStockManager";
import AddStocks from "../pages/StockManager/Stocks/AddStocks";

const stockMgr = "/stockManager";

const stockManagerRoute =
{
    path: `${stockMgr}`,
    element: <ProtectedStockManager />,
    children: [
        {
            path: `${stockMgr}/addStocks`,
            element: <AddStocks />,
        },
    ]
};

export default stockManagerRoute;