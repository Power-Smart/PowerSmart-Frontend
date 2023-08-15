import profilePic from '../../../assets/images/profile.jpeg'
import { Link } from 'react-router-dom'



const AccessCusTableRow = ({ id, complaint, userID, assigned, status }) => {
    return (
        <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" /> */}
                <div className="pl-3">
                    <div className="text-base font-semibold">{id}</div>
                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                </div>
            </th>
            <td className="px-6 py-4">
                <img className="w-10 h-10 rounded-full" src={profilePic} alt="Jese image" />
            </td>
            <td className="px-6 py-4">
                {userID}
            </td>
            <td className="px-6 py-4">
                {assigned}
            </td>
            <td className="px-6 py-4">
                {status}
            </td>
            <td className="px-6 py-4">
                {status === 'cancel' && <button className='cancel__btn'>Cancel</button>}
                {status === 'request' && <button className='request__btn'>Request</button>}
                {status === 'view' && <Link to='/tech/places'><button className='bg-blue-700 border-none outline-none text-white py-[2px] px-[7px] text-[14px] cursor-pointer rounded-[10px] w-[65px]'>view</button></Link>}
            </td>
        </tr>
    )
}

export default AccessCusTableRow