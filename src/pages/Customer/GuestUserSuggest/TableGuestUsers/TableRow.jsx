import React from 'react'
import { Link } from 'react-router-dom'
import { banAndUnbanGuestUser } from '../../../../api/apiGuestUser'
import { useNavigate } from 'react-router-dom'


const TableRow = ({ guest_name, guest_profile_pic, guest_email, is_ban }) => {

    const navigate = useNavigate();

    const ban = () => {
        banAndUnbanGuestUser({ guest_email: guest_email, is_ban: true })
        navigate('/guestSuggest')
    }

    const unbanned = () => {
        banAndUnbanGuestUser({ guest_email: guest_email, is_ban: false })
        navigate('/guestSuggest')
    }


    return (
        <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="px-6 py-3 text-center font-bold text-white">
                {guest_name}
            </td>
            <td className="px-6 py-3 text-center flex justify-center items-center">
                <img className="w-10 h-10 rounded-full" src={guest_profile_pic} alt="profile picture" />
            </td>
            <td className="px-6 py-3 text-center">
                {guest_email}
            </td>
            <td className="px-6 py-3 text-center">
                <div className="flex items-center justify-center">
                    {is_ban === true && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-green-950 text-green-500">
                        {"Banned"}
                    </span>}
                    {is_ban === false && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-red-950 text-red-500">
                        {"Not Banned"}
                    </span>}
                </div>
            </td>
            <td className="px-6 py-3 flex justify-around items-center text-center">
                {
                    is_ban === true ? <div className="flex items-center justify-center">
                        <button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[65px]' onClick={(e) => unbanned()}>unban</button>
                    </div> : <div className="flex items-center justify-center">
                        <button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[65px]' onClick={(e) => ban()}>ban</button>
                    </div>
                }
            </td>
        </tr>
    )
}

export default TableRow