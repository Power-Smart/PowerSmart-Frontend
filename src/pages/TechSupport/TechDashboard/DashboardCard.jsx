import React from 'react'

const DashboardCard = ({ title, icon, number }) => {
    return (
        <div className='flex flex-col justify-around w-full rounded-md border-2 bg-slate-800/50 border-blue-400 p-2 mt-4'>
            <h1 className='font-semibold'>{title}</h1>
            <div className='flex justify-between items-end '>
                < div >
                    {icon}
                </div >
                <div className='text-2xl font-bold'>
                    {number}
                </div>
            </div >
        </div >
    )
}

export default DashboardCard