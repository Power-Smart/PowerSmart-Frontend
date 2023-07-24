import React from "react";
import UserInquiries2 from './UserInquiries2';
import './userinquiries.css'
import {IoSearchCircle} from 'react-icons/io5'


const dataset = [
    {
        id: 1,
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: '238893',
        status: 'Pending'
    },
    {
        id: 2,
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: '238894',
        status: 'Rejected'
    },
    {
        id: 3,
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: '238895',
        status: 'Solved'
    },
    {
        id: 4,
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: '238896',
        status: 'Pending'
    },
    {
        id: 5,
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        userID: '238897',
        status: 'Solved'
    }
];


const UserInquiries = () => {
    return(

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-12 px-8">
            <div className="search_filter_sort">
                <div className="search_filter">
                    <div className="search_icon">
                        <IoSearchCircle className='text-blue-600 w-8 h-8'/>
                    </div>
                    <input type="text" placeholder="Search Inqueries" className="search_input"/>
                </div>
                <div className="sort_filter gap-x-2">
                    <div className="sort">
                        <select name="sort" id="sort" className="sort_select">
                            <option value="Sort By" hidden defaultChecked>Sort By</option>
                            <option value="new">New</option>
                            <option value="old">Old</option>
                        </select>
                    </div>
                    <div className="filter">
                        <select name="filter" id="filter" className="filter_select">
                            <option value="Filter By" hidden defaultChecked>Filter By</option>
                            <option value="Pending">Pending</option>
                            <option value="solved">Solved</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                </div>
            </div>


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
                            Status
                        </th>
                       
                    </tr>
                </thead>
                <tbody>
                    {dataset.map((data) => <UserInquiries2 {...data} />)}
                </tbody>
            </table>
        </div>
    )
}

export default UserInquiries
