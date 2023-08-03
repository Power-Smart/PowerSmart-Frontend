import React from 'react'
import Table2Row from './Table2Row';
import {IoSearchCircle} from 'react-icons/io5'


const dataset = [
    {
        id: 1,
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: 'John Doe',
        assigned: 'Jane Doe',
        status: 'Pending'
    },
    {
        id: 2,
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: 'Alice Smith',
        assigned: 'Bob Johnson',
        status: 'Rejected'
    },
    {
        id: 3,
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: 'Emily Brown',
        assigned: 'David Wilson',
        status: 'Resolved'
    },
    {
        id: 4,
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: 'Michael Davis',
        assigned: 'Sophia Lee',
        status: 'Pending'
    },
    {
        id: 5,
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: 'Oliver Thompson',
        assigned: 'Emma Anderson',
        status: 'Resolved'
    }
];


const Table2 = () => {
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
                            Complaint ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Complaint
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tech Support
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataset.map((data) => <Table2Row {...data} />)}
                </tbody>
            </table>
        </div>

    )
}

export default Table2