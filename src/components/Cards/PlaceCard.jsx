import React from 'react'
import { Link } from 'react-router-dom'

const PlaceCard = ({ status, name, roomCount, devices }) => {
    return (
        <div className='text-sm flex flex-col w-[200px] h-[230px] bg-[#1C1C2E] rounded-md shadow-md px-8 py-6 m-5 justify-evenly'>

            <div className='flex flex-col flex-grow'>
                <div className=' text-xs text-green-300 flex justify-start items-center'>
                    <div className='w-[8px] h-[8px] bg-green-300 mr-2 rounded-full'>
                    </div>
                    {status}
                </div>
                <label>{name}</label>
            </div>

            <hr className='border-gray-600' />

            <div className='flex flex-col flex-grow justify-center items-end'>
                <div>{roomCount} Rooms</div>
                <div>{devices} Devices</div>
            </div>

            <Link to='rooms'>
                <div className='flex flex-col flex-grow justify-end items-center'>
                    <button className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black'>Go inside</button>
                </div>
            </Link>

        </div>
    )
}

export default PlaceCard