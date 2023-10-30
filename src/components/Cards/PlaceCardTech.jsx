import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TbHomeEdit } from 'react-icons/tb'
import Swal from 'sweetalert2'
import { sendAccessRequest } from '../../api/apiTechAssigns'
import { useDispatch, useSelector } from 'react-redux'
import { updatePlace } from '../../redux/slices/techsupport/techPlaceSlice'


const PlaceCardTech = ({ place_id, place, access_type, customerID, user_id }) => {
    const dispatch = useDispatch();
    const [accessType, setAccessType] = useState(access_type);
    useEffect(() => {
        setAccessType(access_type);
    }, [access_type]);

    const requestConfirm = () => {
        Swal.fire({
            title: 'Request access',
            text: "Do you want to request access ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Request'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await sendAccessRequest(user_id, place_id, 'request');
                    dispatch(updatePlace({ place_id, type: 2 }));
                    setAccessType(2);
                    Swal.fire(
                        'Requested !',
                        "After client's confirmation you can access the place",
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

    const cancelRequest = () => {
        Swal.fire({
            title: 'Cancel request',
            text: "Do you want to close the pending request ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Close request'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await sendAccessRequest(user_id, place_id, 'cancel');
                    dispatch(updatePlace({ place_id, type: 0 }));
                    setAccessType(0);
                    Swal.fire(
                        'Cancelled !',
                        "Request cancelled successfully",
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
        <div className='text-sm flex flex-col w-[200px] h-[230px] bg-[#1c1c2e] rounded-md shadow-md px-6 py-4 m-5 justify-evenly'>
            <div className='flex flex-col flex-grow'>
                {place.is_active && <div className=' text-xs text-green-300 flex justify-start items-center'>
                    <div className='w-[8px] h-[8px] bg-green-300 mr-2 rounded-full'>
                    </div>
                    {"ACTIVE"}
                </div>}
                {!place.is_active && <div className=' text-xs text-red-300 flex justify-start items-center'>
                    <div className='w-[8px] h-[8px] bg-red-300 mr-2 rounded-full'>
                    </div>
                    {"INACTIVE"}
                </div>}

                <label>{place.name}</label>

            </div>

            <hr className='border-gray-600' />

            <div className='flex flex-col flex-grow justify-center items-end'>
                <div>{place.address}</div>
                <div>{place.city}</div>
            </div>

            {accessType === 1 && <Link to={`/tech/${customerID}/place/${place_id}/rooms`}>
                <div className='flex flex-col flex-grow justify-end items-center'>
                    <button className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black'>Go inside</button>
                </div>
            </Link>}
            {accessType === 0 && <div onClick={requestConfirm}>
                <div className='flex flex-col flex-grow justify-end items-center'>
                    <button className='px-4 py-1 text-sm bg-[#ff8383] rounded-md text-black'>Request access</button>
                </div>
            </div>}
            {accessType === 2 && <div onClick={cancelRequest}>
                <div className='flex flex-col flex-grow justify-end items-center'>
                    <button className='px-4 py-1 text-sm bg-[#ffd483] rounded-md text-black'>Cancel request</button>
                </div>
            </div>}
        </div>
    )
}

export default PlaceCardTech