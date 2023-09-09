import AccessCusTableRow from './AccessCusTableRow';
import { IoSearchCircle } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectCustomers, selectStatus } from '../../../redux/slices/techsupport/techCustomersSlice';
import { useEffect } from 'react';


const dataset = [
    {
        user_id: '#413656',
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        name: 'John Doe',
        email: '10',
    },
    {
        user_id: '#413656',
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        name: 'Alice Smith',
        email: 'Bob Johnson',
    },
    {
        user_id: '#413656',
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        name: 'Emily Brown',
        email: 'David Wilson',
    },
    {
        user_id: '#413656',
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        name: 'Michael Davis',
        email: 'Sophia Lee',
    },
    {
        user_id: '#413656',
        complaint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        name: 'Oliver Thompson',
        email: 'Emma Anderson',
    }
];


const AccessCusTable = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const customers = useSelector(selectCustomers);
    const customersStatus = useSelector(selectStatus);

    useEffect(() => {
        if (user.id && customersStatus === 'idle') {
            dispatch(fetchData(user.id))
        }
    }, [user, dispatch]);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-12 px-8">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            Profile
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Customer ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customers ? customers.map((data, index) => <AccessCusTableRow key={index} {...data} />) : "No Customers Assigned Yet!"}
                </tbody>
            </table>
        </div>
    )
}

export default AccessCusTable