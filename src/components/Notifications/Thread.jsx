import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineCheck } from 'react-icons/ai'

const Thread = ({ topic, description }) => {
    return (
        <div className='flex p-2 m-2 bg-slate-900 rounded-md justify-between w-96'>
            {/* <div className='p-3 w-20 flex items-center'>1. </div> */}
            <div className='p-3 flex-1'>
                <h1 className='font-bold'>{topic}</h1>
                <hr className=' border-white/10 mb-1 ' />
                <div className='text-sm'> {description}
                </div>
            </div>
            <div className='p-3 w-24 flex flex-row items-center justify-center text-xl'>
                <div className='flex mx-1 p-1 rounded-md text-red-500 bg-red-400/10 flex-grow items-center justify-center'>
                    <RxCross1 className='cursor-pointer' />
                </div>
                <div className='flex mx-1 p-1 rounded-md text-green-500 bg-green-400/10 flex-grow items-center justify-center'>
                    <AiOutlineCheck className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Thread