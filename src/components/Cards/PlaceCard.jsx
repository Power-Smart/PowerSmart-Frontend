import React from 'react'

const PlaceCard = () => {
    return (
        <div className='text-sm flex flex-col w-[230px] h-[230px] bg-[#1C1C2E] rounded-md shadow-md px-8 py-6 m-3 justify-evenly'>

            <div className='flex flex-col flex-grow'>
                <div className=' text-xs text-green-300 flex justify-start items-center'>
                    <div className='w-[8px] h-[8px] bg-green-300 mr-2 rounded-full'>
                    </div>
                    Status
                </div>
                <label>Place Name</label>
            </div>

            <hr className='border-gray-600' />

            <div className='flex flex-col flex-grow justify-center items-end'>
                <div>Room Count</div>
                <div>Address</div>
            </div>

            <div className='flex flex-col flex-grow justify-end items-center'>
                <button className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black'>Add Place</button>
            </div>

        </div>
    )
}

export default PlaceCard