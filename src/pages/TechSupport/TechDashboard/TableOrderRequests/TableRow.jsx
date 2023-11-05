import React from 'react'
import { Link } from 'react-router-dom'


const TableRow = ({ user_id, place_id, num_of_rooms, name, num_of_devices, customerProfilePic, order_id, is_tech_support_assigned, is_order_completed }) => {
    return (
        <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">

            <td className="px-6 py-3 text-center font-bold text-white">
                {name}
            </td>
            {/* <td className="px-6 py-3 text-center flex justify-center items-center">
                <img className="w-10 h-10 rounded-full" src={customerProfilePic} alt="Jese image" />
            </td> */}
            <td className="px-6 py-3 text-center">
                {place_id}
            </td>
            <td className="px-6 py-3 text-center">
                {num_of_rooms}
            </td>
            <td className="px-6 py-3 text-center">
                {num_of_devices}
            </td>
            {!is_tech_support_assigned && <td className="px-6 py-3 text-center">
                {/* <a href="/tech/orderRequest" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a> */}
                <Link to={`/tech/orderRequest/${order_id}`}><button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[80px]'>view</button></Link>

            </td>}
            {is_tech_support_assigned && !is_order_completed && <td className="px-6 py-3 text-center">
                {/* <a href="/tech/orderRequest" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a> */}
                <Link to={`/tech/marketPlace/${order_id}/${user_id}`}>
                    <button className='bg-orange-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[80px]'>Accepted</button>
                </Link>

            </td>}
            {is_tech_support_assigned && is_order_completed && <td className="px-6 py-3 text-center">
                {/* <a href="/tech/orderRequest" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a> */}
                <Link to={`/tech/customer/${user_id}`}>
                    <button className='bg-green-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[80px]'>Completed</button>
                </Link>

            </td>}
        </tr>
    )
}

export default TableRow