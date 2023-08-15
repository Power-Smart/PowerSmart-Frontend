import React from 'react'
import TableRow from './TableRow';


const dataset = [
    {
        name: 'Kamal Ahmed',
        profilePicture:'https://avatars.githubusercontent.com/u/73744585?v=4',
        places: 2,
        rooms: 4,
        status: 'Pending'
    },
    {
        name: 'Pamal Kumar',
        profilePicture:'https://avatars.githubusercontent.com/u/44749685?v=4',
        places: 2,
        rooms: 4,
        status: 'Resolved'
    },
    {
        name: 'Yamal Qumar',
        profilePicture:'https://avatars.githubusercontent.com/u/37753777?v=4',
        places: 2,
        rooms: 4,
        status: 'Pending'
    },
    {
        name: 'Bamal Kumar',
        profilePicture:'https://avatars.githubusercontent.com/u/73994665?v=4',
        places: 2,
        rooms: 4,
        status: 'Resolved'
    },
];



const TableOrderStatus = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-2 px-6">

            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                        {/* <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th> */}
                        <th scope="col" className="px-6 py-3 text-center">
                            Customer Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Profile Picture
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Places
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Rooms
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataset.map((data) => <TableRow key={data.id} {...data} />)}
                </tbody>
            </table>
        </div>
    )
}

export default TableOrderStatus