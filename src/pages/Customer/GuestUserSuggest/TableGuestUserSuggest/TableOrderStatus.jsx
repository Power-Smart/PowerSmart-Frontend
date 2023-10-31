import TableRow from './TableRow';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomerServiceRequests, selectCustomerServiceRequests } from '../../../../redux/slices/techsupport/customerServiceRequestSlice';
import { Link } from 'react-router-dom';
import { getAllGuestUsers, getGuestUserSuggest } from '../../../../api/apiGuestUser';


const TableOrderStatus = () => {

    const user = useSelector(state => state.user.user);
    let customerID = user.id;
    const [allGuestSuggestions, setAllGuestSuggestions] = React.useState([]);

    useEffect(() => {
        getGuestUserSuggest(customerID).then((res) => {
            setAllGuestSuggestions(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [customerID]);    

    console.log(allGuestSuggestions);

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
                            Guest User Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Place
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Room
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Suggestion
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Time
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allGuestSuggestions.map((data) => <TableRow key={data.id} {...data} />)}
                </tbody>
            </table>
        </div>
    )
}

export default TableOrderStatus