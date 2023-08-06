import React from 'react'
import { Link } from 'react-router-dom'

const PlaceCard = ({ is_active, name, roomCount = 0, devices = 0, location }) => {
    return (
        <div className='text-sm flex flex-col w-[200px] h-[230px] bg-[#1C1C2E] rounded-md shadow-md px-8 py-6 m-5 justify-evenly'>

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

            <Link to='1/rooms'>
                <div className='flex flex-col flex-grow justify-end items-center'>
                    <button className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black'>Go inside</button>
                </div>
            </Link>

        </div>
    )
}

export default PlaceCard