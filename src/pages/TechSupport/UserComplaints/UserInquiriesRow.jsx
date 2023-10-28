import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const UserInquiriesRow = ({ customer_id,complaint_id,date,description,is_solve,comment }) => {
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
                    <div className="text-base font-semibold">{complaint_id}</div>
                    {/* <div className="font-normal text-gray-500">neil.sims@flowbite.com</div> */}
                </div>
            </th>
            <td className="px-6 py-4">
                {description.slice(0, 25) + '...'}
            </td>
            <td className="px-6 py-4">
                {customer_id}
            </td>
            <td className="px-6 py-4">
                {is_solve === true && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-green-950 text-green-500">
                    {"Solved"}
                </span>}
                {is_solve === false && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-red-950 text-red-500">
                    {"Not Solved"}
                </span>}
            </td>

            <td className="px-6 py-4 flex justify-around items-center">
                <div className="flex items-center justify-center">
                    <Link to={`/tech/chat`}><button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[65px]'>chat</button></Link>
                </div>
                <div className="flex items-center justify-center">
                    <Link to={`/tech/viewComplaint/${complaint_id}/${customer_id}`}><button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[65px]'>view</button></Link>
                </div>
            </td>

        </tr>
    )
}

export default UserInquiriesRow