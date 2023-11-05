import React, { useEffect } from 'react'
import TableRow from './TableRow';
import { fetchCustomerOrderRequests, selectCustomerOrderRequests, selectCustomerOrderRequestsStatus } from '../../../../redux/slices/techsupport/customerOrderRequestSlice';
import { useDispatch, useSelector } from 'react-redux';


const TableOrderRequests = () => {

    const dispatch = useDispatch();
    const customerOrderRequests = useSelector(selectCustomerOrderRequests);

    useEffect(() => {
        dispatch(fetchCustomerOrderRequests());
    }, [dispatch])


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-2 px-6">

            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            Customer Name
                        </th>
                        {/* <th scope="col" className="px-6 py-3 text-center">
                            Profile Picture
                        </th> */}
                        <th scope="col" className="px-6 py-3 text-center">
                            Place ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Rooms
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Devices
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customerOrderRequests.map((data) => (
                        <TableRow key={data.order_id} {...data} customerProfilePic={data.customer.profile_pic} name={data.customer.user.first_name + " " + data.customer.user.last_name} />
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default TableOrderRequests



