import TableRow from './TableRow';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomerServiceRequests,selectCustomerServiceRequests } from '../../../../redux/slices/techsupport/customerServiceRequestSlice';



const TableOrderStatus = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    let techSupportId = user.id;
    const customerServiceRequest = useSelector(selectCustomerServiceRequests);

    console.log(customerServiceRequest);

    useEffect(() => {
        dispatch(getAllCustomerServiceRequests(techSupportId));
    }, [dispatch]);



    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-2 px-6">

            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                        {/* <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th> */}
                        <th scope="col" className="px-6 py-3 text-center">
                            Customer Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Profile Picture
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {customerServiceRequest && customerServiceRequest.map((data) => <TableRow key={data.service_id} {...data} />)}
                </tbody>
            </table>
        </div>
    )
}

export default TableOrderStatus