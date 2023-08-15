import React from 'react'

const TableRow = ({ id, name, places, rooms, status,profilePicture  }) => {
    return (
        <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="px-6 py-1 text-center font-bold text-white">
                {name}
            </td>
            <td className="px-6 py-1 text-center flex justify-center items-center">
                <img className="w-10 h-10 rounded-full" src={profilePicture} alt="Jese image" />
            </td>
            <td className="px-6 py-1 text-center">
                {places}
            </td>
            <td className="px-6 py-1 text-center">
                {rooms}
            </td>
            <td className="px-6 py-1 text-center">
                <div className="flex items-center justify-center">
                    {status === 'Pending' && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-yellow-950 text-yellow-500">
                        {status}
                    </span>}
                    {status === 'Resolved' && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-green-950 text-green-500">
                        {status}
                    </span>}
                    {status === 'Rejected' && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-red-950 text-red-500">
                        {status}
                    </span>}
                </div>
            </td>
        </tr>
    )
}

export default TableRow