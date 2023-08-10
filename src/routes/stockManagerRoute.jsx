import ProtectedStockManager from "../pages/Customer/Protected/ProtectedStockManager";
import AddStocks from "../pages/StockManager/Stocks/AddStocks";
import StockItem from "../pages/StockManager/Stocks/StockItem";


const stockMgr = "/stockManager";

const stockManagerRoute =
{
    path: `${stockMgr}`,
    element: <ProtectedStockManager />,
    children: [
        {
            path: `${stockMgr}/addStocks`,
            element: <StockItem />,
        },
    ]
};

export default stockManagerRoute;