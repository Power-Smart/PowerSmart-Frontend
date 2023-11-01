import React, { useEffect, useState } from 'react'
import { AiFillMessage } from 'react-icons/ai'
import { controlAccessApi } from '../../api/ApiAccessControl';
import Swal from 'sweetalert2'

const RequestThread = ({ tech_support_name, tech_support_id, place_id, place_name, time, type = 1, user_id }) => {
    const [accessType, setAccessType] = useState(type);
    useEffect(() => {
        setAccessType(type);
    }, [type]);

    const acceptRequest = async () => {
        Swal.fire({
            title: 'Give Access',
            text: "Do you want to give access ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Accept'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await controlAccessApi(user_id, place_id, tech_support_id, 1);
                    setAccessType(1);
                    Swal.fire(
                        'Accepted',
                        "Remember to remove the access after the work is done",
                        'success'
                    )
                } catch (err) {
                    Swal.fire(
                        'Error!',
                        'Something went wrong',
                        'error'
                    )
                }
            }
        })
    }

    const declineRequest = async () => {
        Swal.fire({
            title: 'Decline Request',
            text: "Do you want to delete request ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Decline'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await controlAccessApi(user_id, place_id, tech_support_id, 0);
                    setAccessType(0);
                    Swal.fire(
                        'Declined',
                        "",
                        'success'
                    )
                } catch (err) {
                    Swal.fire(
                        'Error!',
                        'Something went wrong',
                        'error'
                    )
                }
            }
        })
    }

    return (
        <div className='flex p-2 m-2 bg-slate-900 rounded-md justify-between w-full'>
            {/* <div className='p-3 w-20 flex items-center'>1. </div> */}
            <div className='p-3 flex-1'>
                <div className='text-sm font-mono py-1 flex justify-between'>
                    <div>
                        <AiFillMessage className='text-lg cursor-pointer' />
                    </div>
                    <div>
                        {time}
                    </div>
                </div>
                <h1 className='font-bold'>{`${place_id} | ${place_name}`}</h1>
                <div className='text-sm'> {`${tech_support_name} (${tech_support_id})`}</div>
            </div>
            <div className='w-1 bg-white/10 my-3'>
            </div>
            {accessType == 2 &&
                <div className='p-3 w-24 flex flex-col items-center justify-center text-sm'>
                    <div className='flex p-1 my-2 rounded-md text-green-500 bg-green-600/10 cursor-pointer flex-grow items-center justify-center'
                        onClick={acceptRequest}>
                        Accept
                    </div>
                    <div className='flex p-1 my-1 rounded-md text-red-500 bg-red-600/10 cursor-pointer flex-grow items-center justify-center'
                        onClick={declineRequest}>
                        Decline
                    </div>
                </div>}
            {accessType == 1 &&
                <div className='p-3 w-24 flex flex-col items-center justify-center text-sm'>
                    <div className='flex p-1 my-1 rounded-md text-center text-red-500 bg-red-600/10 cursor-pointer flex-grow items-center justify-center'
                        onClick={declineRequest}>
                        Restrict Access
                    </div>
                </div>}
            {accessType == 0 &&
                <div className='p-3 w-24 flex flex-col items-center justify-center text-sm'>
                    <div className='flex p-1 my-1 rounded-md text-center text-yellow-600 flex-grow items-center justify-center'>
                        No Access
                    </div>
                </div>}
        </div>
    )
}

export default RequestThread