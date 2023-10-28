import profilePic from '../../../assets/images/profile.jpeg'
import { Link } from 'react-router-dom'
import { AiFillMessage, AiFillEye } from 'react-icons/ai'


const AccessCusTableRow = ({ first_name, last_name, user_id, email }) => {
    return (
        <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="px-6 py-4">
                <img className="w-10 h-10 rounded-full" src={profilePic} alt="Jese image" />
            </td>
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" /> */}
                <div className="pl-3">
                    <div className="text-base font-semibold">{email}</div>
                    <div className="font-normal text-gray-500">ID : {user_id}</div>
                </div>
            </th>
            <td className="px-6 py-4">
                {first_name + " " + last_name}
            </td>
            <td className="px-6 py-4 flex justify-around items-center">
                <Link to={`/tech/chat`} className='mx-2'>
                    <button className='bg-blue-900 border-none outline-none text-blue-100 font-bold py-2 px-3 text-[14px] cursor-pointer rounded-[10px] text-lg'>
                        <AiFillMessage />
                    </button>
                </Link>
                <Link to={`/tech/customer/${user_id}`} className='mx-2'>
                    <button className='bg-blue-700 border-none outline-none text-white py-2 px-3 text-[14px] cursor-pointer rounded-[10px] text-lg'>
                        <AiFillEye />
                    </button>
                </Link>
            </td>
        </tr>
    )
}

export default AccessCusTableRow