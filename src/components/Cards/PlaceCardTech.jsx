import React from 'react'
import { Link } from 'react-router-dom'
import { TbHomeEdit } from 'react-icons/tb'



const PlaceCardTech = ({ place_id, place, access_type, customerID }) => {

    return (
        <div className='text-sm flex flex-col w-[200px] h-[230px] bg-[#1C1C2E] rounded-md shadow-md px-6 py-4 m-5 justify-evenly'>
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

            {access_type === 1 && <Link to={`/tech/${customerID}/place/${place_id}/rooms`}>
                <div className='flex flex-col flex-grow justify-end items-center'>
                    <button className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black'>Go inside</button>
                </div>
            </Link>}
            {access_type === 0 && <Link to={`/tech/`}>
                <div className='flex flex-col flex-grow justify-end items-center'>
                    <button className='px-4 py-1 text-sm bg-[#ff8383] rounded-md text-black'>Request access</button>
                </div>
            </Link>}
        </div>
    )
}

export default PlaceCardTech