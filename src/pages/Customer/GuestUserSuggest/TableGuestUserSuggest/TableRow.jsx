import React from 'react'
import { Link } from 'react-router-dom' 



const TableRow = ({ customer_id, comment, date, description, is_repaired, service_id }) => {
    return (
        <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="px-6 py-3 text-center font-bold text-white">
                {customer_id}
            </td>
            <td className="px-6 py-3 text-center flex justify-center items-center">
                <img className="w-10 h-10 rounded-full" src={"profilePicture"} alt="profile picture" />
            </td>
            <td className="px-6 py-3 text-center">
                {description.substring(0, 8) + "..."}
            </td>
            <td className="px-6 py-3 text-center">
                {date.substring(0, 10)}
            </td>
            <td className="px-6 py-3 text-center">
                <div className="flex items-center justify-center">
                    {is_repaired === true && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-green-950 text-green-500">
                        {"Repaired"}
                    </span>}
                    {is_repaired === false && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-red-950 text-red-500">
                        {"Not Repaired"}
                    </span>}
                </div>
            </td>
            <td className="px-6 py-3 flex justify-around items-center text-center">
                <div className="flex items-center justify-center">
                    <Link to={``}><button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[65px]'>chat</button></Link>
                </div>
                <div className="flex items-center justify-center">
                    <Link to={``}><button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[65px]'>view</button></Link>
                </div>
            </td>

        </tr>
    )
}

export default TableRow