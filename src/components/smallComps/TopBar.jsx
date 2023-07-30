import React from 'react'

const TopBar = ({ title, image }) => {
    return (
        <div className='px-16 py-5 flex justify-between items-center' >
            <div className='flex items-center justify-center'>
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