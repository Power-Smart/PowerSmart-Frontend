import React from 'react'
import { Link } from 'react-router-dom'
import { TbHomeEdit } from 'react-icons/tb'



const PlaceCard = ({ is_active, name, roomCount = 0, devices = 0, location, place_id }) => {

    return (
        <div className='text-sm flex flex-col w-[200px] h-[230px] bg-[#1C1C2E] rounded-md shadow-md px-6 py-4 m-5 justify-evenly'>

            <div className="edit flex justify-end mb-3">
                <Link to={`/places/:placeID/update`}>
                    <button className='text-ml text-white bg-[#1f446e] px-2 py-1 rounded-md'><TbHomeEdit className='inline mb-1 mr-1 text-8ml' />Edit</button>
                </Link>
            </div>

            <div className='flex flex-col flex-grow'>
                {is_active && <div className=' text-xs text-green-300 flex justify-start items-center'>
                    <div className='w-[8px] h-[8px] bg-green-300 mr-2 rounded-full'>
                    </div>
                    {"ACTIVE"}
                </div>}
                {!is_active && <div className=' text-xs text-red-300 flex justify-start items-center'>
                    <div className='w-[8px] h-[8px] bg-red-300 mr-2 rounded-full'>
                    </div>
                    {"INACTIVE"}
                </div>}

                <label>{name}</label>

            </div>

            <hr className='border-gray-600' />

            <div className='flex flex-col flex-grow justify-center items-end'>
                <div>{location}</div>
                <div>{roomCount} Rooms</div>
            </div>

            <Link to={`${place_id}/rooms`}>
                <div className='flex flex-col flex-grow justify-end items-center'>
                    <button className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black'>Go inside</button>
                </div>
            </Link>

        </div>
    )
}

export default PlaceCard