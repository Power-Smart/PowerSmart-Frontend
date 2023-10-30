import React from 'react'
import { Link } from 'react-router-dom'
import { takeActionAndNotWant,acceptGuestUserSuggest, rejectGuestUserSuggest } from '../../../../api/apiGuestUser'


const TableRow = ({ suggest_id, guest_name, place_name, room_name, suggest_description, is_read,createdAt }) => {

    const takeAction = () => {
        takeActionAndNotWant({ suggest_id:suggest_id, is_read: true });
        // acceptGuestUserSuggest();
    }

    const notWant = () => {
        takeActionAndNotWant({ suggest_id:suggest_id, is_read: false });
        // rejectGuestUserSuggest();
    }


    return (
        <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="px-6 py-3 text-center font-bold text-white">
                {guest_name}
            </td>
            <td className="px-6 py-3 text-center">
                {place_name}
            </td>
            <td className="px-6 py-3 text-center">
                {room_name}
            </td>
            <td className="px-6 py-3 text-center">
                {suggest_description}
            </td>
            <td className="px-6 py-3 text-center">
                {createdAt.split('T')[1].split('.')[0]}
            </td>
            <td className="px-6 py-3 text-center">
                {createdAt.split('T')[0]}
            </td>
            <td className="px-6 py-3 text-center">
                <div className="flex items-center justify-center">
                    {is_read === true && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-green-950 text-green-500">
                        {"Accept"}
                    </span>}
                    {is_read === false && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-red-950 text-red-500">
                        {"Reject"}
                    </span>}
                </div>
            </td>
            <td className="px-6 py-3 flex justify-around items-center text-center">
                <div className="flex items-center justify-center">
                    <button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[65px]' onClick={() => takeAction()}>Accept</button>
                </div>
                <div className="flex items-center justify-center">
                    <button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[65px]' onClick={() => notWant()}>Reject</button>
                </div>
            </td>

        </tr>
    )
}

export default TableRow