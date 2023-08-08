import React from 'react'

const Indicator = ({ color, status }) => {
    return (
        <div className='flex justify-evenly items-center'>
            <div className={`${color} w-[8px] h-[8px] mr-2 rounded-full`}></div>
            <div>{status}</div>
        </div>
    )
}

export default Indicator