import React from 'react'
import { Link } from 'react-router-dom'


const TableRow = ({ customerID, name, places, rooms, profilePicture }) => {
    return (
        <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
            
            <td className="px-6 py-3 text-center font-bold text-white">
                {name}
            </td>
            <td className="px-6 py-3 text-center flex justify-center items-center">
                <img className="w-10 h-10 rounded-full" src={profilePicture} alt="Jese image" />
            </td>
            <td className="px-6 py-3 text-center">
                {rooms}
            </td>
            <td className="px-6 py-3 text-center">
                {places}
            </td>
            <td className="px-6 py-3 text-center">
                {/* <a href="/tech/orderRequest" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a> */}
                <Link to={`/tech/orderRequest/${customerID}`}><button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[65px]'>view</button></Link>

            </td>
        </tr>
    )
}

export default TableRow