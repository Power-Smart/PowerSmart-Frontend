import React from 'react'
import { Link } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5'

const TopBar = ({ title, image, baclLink = "" }) => {
    return (
        <div className='px-16 py-5 flex justify-between items-center' >
            <div className='flex items-center justify-center'>
                {baclLink != "" && <Link to={baclLink} >
                    {/* <div className='mr-4 font-bold'> {"<"} </div> */}
                    < IoChevronBack className='mr-4 h-7 w-7 text-xl font-bold bg-white/10 rounded-md' />
                </Link>}
                <h2 className='text-3xl font-bold'>{title}</h2>
            </div>
            <div className='flex items-center justify-center'>
                {/* Profile Pic */}
                <div>
                    <img src={image} alt="profile" className='w-10 h-10 rounded-full border-[#83BCFF] border-2' />
                </div>
            </div>
        </div >
    )
}

export default TopBar