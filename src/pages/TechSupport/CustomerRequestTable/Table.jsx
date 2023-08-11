import './Table.css'
import TableRow from './TableRow';
import { IoSearchCircle } from 'react-icons/io5'


const dataset = [
    {
        id: '#413656',
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: 'John Doe',
        assigned: '10',
        status: '05'
    },
    {
        id: '#413656',
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: 'Alice Smith',
        assigned: 'Bob Johnson',
        status: 'Resolved'
    },
    {
        id: '#413656',
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: 'Emily Brown',
        assigned: 'David Wilson',
        status: 'Resolved'
    },
    {
        id: '#413656',
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: 'Michael Davis',
        assigned: 'Sophia Lee',
        status: 'Pending'
    },
    {
        id: '#413656',
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: 'Oliver Thompson',
        assigned: 'Emma Anderson',
        status: 'Resolved'
    }
];


const Table = () => {
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-12 px-8">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Customer ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Profile
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
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataset.map((data) => <TableRow {...data} />)}
                </tbody>
            </table>
        </div>

    )
}

export default Table