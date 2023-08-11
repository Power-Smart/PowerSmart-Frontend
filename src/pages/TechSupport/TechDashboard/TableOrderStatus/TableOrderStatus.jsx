import React from 'react'
import TableRow from './TableRow';

const dataset = [
    {
        id: 1,
        name: 'Lorem ipsum',
        places: 2,
        rooms: 4,
        status: 'Pending'

    },
    {
        id: 2,
        name: 'Lorem ipsum',
        places: 2,
        rooms: 4,
        status: 'Resolved'

    },
    {
        id: 3,
        name: 'Lorem ipsum',
        places: 2,
        rooms: 4,
        status: 'Pending'

    },
    {
        id: 4,
        name: 'Lorem ipsum',
        places: 2,
        rooms: 4,
        status: 'Resolved'

    },
];


const TableOrderStatus = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-12 px-8">

            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                        {/* <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th> */}
                        <th scope="col" className="px-6 py-3">
                            Customer ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Places
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rooms
                        </th>
                        <th scope="col" className="px-6 py-3">
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