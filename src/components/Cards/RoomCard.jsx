import React from 'react'
import Indicator from '../smallComps/Indicator'
import { Link } from 'react-router-dom'


const RoomCard = ({ is_active, name, devices, measures }) => {
    return (
        <div className='text-sm flex flex-col w-[200px] h-[230px] bg-[#1C1C2E] rounded-md shadow-md px-8 py-6 m-5 justify-evenly'>

            <div className='flex flex-col flex-grow'>
                <div className=' text-xs text-green-300 flex justify-start items-center'>
                    {is_active && <Indicator color="bg-green-400" status={"Online"}/>}
                    {!is_active && <Indicator color="bg-red-400" status={"Offline"}/>}
                    {is_active}
                </div>
                <label>{name}</label>
            </div>

            <hr className='border-gray-600' />

            <div className='flex flex-col flex-grow justify-center items-center'>
                <div className='text-[#83BCFF] my-1'>{devices} Devices Working</div>
                {measures && <div className='text-xs'>temp : {measures.temperature}°C</div>}
                {measures && <div className='text-xs'>humidity : {measures.humidity}%</div>}
            </div>

            <Link to='/places/rooms/controlpanel'>
                <div className='flex flex-col flex-grow justify-end items-center'>
                    <button className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black'>Go inside</button>
                </div>
            </Link>


        </div>
    )
}

export default RoomCard