import React from 'react'
import TableRow from './TableRow';

const dataset = [
    {
        name: 'Kamal Ahmed',
        profilePicture:'https://avatars.githubusercontent.com/u/73744585?v=4',
        places: 2,
        rooms: 4,
    },
    {
        name: 'Pamal Kumar',
        profilePicture:'https://avatars.githubusercontent.com/u/44749685?v=4',
        places: 2,
        rooms: 4,
    },
    {
        name: 'Yamal Qumar',
        profilePicture:'https://avatars.githubusercontent.com/u/37753777?v=4',
        places: 2,
        rooms: 4,
    },
    {
        name: 'Bamal Kumar',
        profilePicture:'https://avatars.githubusercontent.com/u/73994665?v=4',
        places: 2,
        rooms: 4,
    },
];


const TableOrderRequests = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-2 px-6">

            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
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
                            Action
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

export default TableOrderRequests