import React from "react";
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import Sidebar from '../../../components/Sidebar/Sidebar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import UserInquiriesRow from "./UserInquiriesRow";


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


const UserComplaints = () => {
    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar title={'User Inquiries'} />
                <ContentWrapper>
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
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">

                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {dataset.map((data) => <UserInquiriesRow {...data} />)}
                            </tbody>
                        </table>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default UserComplaints
