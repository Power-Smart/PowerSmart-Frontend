import React from 'react'

const StatusCardLg = () => {
    return (
        <div className='w-[300px] h-[300px] border-[#83BCFF] border-2 bg-[#0E0E1A] rounded-lg flex flex-col p-4 justify-around items-center m-3'>
            <h2>{title}</h2>
            <h1 className='text-3xl font-bold text-[#83BCFF]'>{value} {measure}</h1>
            {other && <h3 className='text-sm'>{other}</h3>}
        </div>
    )
}

export default StatusCardLg