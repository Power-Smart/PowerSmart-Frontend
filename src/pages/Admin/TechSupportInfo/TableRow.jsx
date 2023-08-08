//import profilePic from '../../../assets/images/profile.jpeg'


const TableRow = ({ date, customerID, customerName, status }) => {
    return (
        <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" /> */}
                <div className="pl-3">
                    <div className="text-base font-semibold">{date}</div>
                    {/* <div className="font-normal text-gray-500">neil.sims@flowbite.com</div> */}
                </div>
            </th>
            <td className="px-6 py-4">
                {customerID}
            </td>
            <td className="px-6 py-4">
                {customerName}
            </td>
            <td className="px-6 py-4">
                {status}
            </td>
            <td className="px-6 py-4">
                {status}
            </td>
        </tr>
    )
}

export default TableRow