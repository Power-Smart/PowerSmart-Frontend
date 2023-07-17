import React from 'react'

const RoomCard = ({ status, name, devices, measures }) => {
    return (
        <div className='text-sm flex flex-col w-[200px] h-[230px] bg-[#1C1C2E] rounded-md shadow-md px-8 py-6 m-5 justify-evenly'>

            <div className='flex flex-col flex-grow'>
                <div className=' text-xs text-green-300 flex justify-start items-center'>
                    {status === "Online" && <div className='w-[8px] h-[8px] bg-green-300 mr-2 rounded-full'></div>}
                    {status === "Offline" && <div className='w-[8px] h-[8px] bg-red-300 mr-2 rounded-full'></div>}
                    {status}
                </div>
                <label>{name}</label>
            </div>

            <hr className='border-gray-600' />

            <div className='flex flex-col flex-grow justify-center items-center'>
                <div className='text-[#83BCFF] my-1'>{devices} Devices Working</div>
                {measures && <div className='text-xs'>temp : {measures.temperature}°C</div>}
                {measures && <div className='text-xs'>humidity : {measures.humidity}%</div>}
            </div>

            <div className='flex flex-col flex-grow justify-end items-center'>
                <button className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black'>Go inside</button>
            </div>

        </div>
    )
}

export default RoomCard