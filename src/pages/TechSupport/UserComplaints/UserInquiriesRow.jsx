import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const UserInquiriesRow = ({ id, complaint, userID, status }) => {
    return (
        <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
            {/* <td className="w-4 p-4">
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
            </td> */}
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" /> */}
                <div className="pl-3">
                    <div className="text-base font-semibold">{id}</div>
                    {/* <div className="font-normal text-gray-500">neil.sims@flowbite.com</div> */}
                </div>
            </th>
            <td className="px-6 py-4">
                {complaint.slice(0, 25) + '...'}
            </td>
            <td className="px-6 py-4">
                {userID}
            </td>
            <td className="px-6 py-4">
                {/* <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> {status} */}
                {status === 'Pending' && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-yellow-950 text-yellow-500">
                    {status}
                </span>}
                {status === 'Solved' && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-green-950 text-green-500">
                    {status}
                </span>}
                {status === 'Rejected' && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-red-950 text-red-500">
                    {status}
                </span>}
            </td>

            <td className="px-6 py-4">
                <div className="flex items-center justify-center">
                    <Link to='#'><button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[65px]'>view</button></Link>
                </div>
            </td>

        </tr>
    )
}

export default UserInquiriesRow