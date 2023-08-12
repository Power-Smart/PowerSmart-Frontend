import React from 'react'

const DashboardCard = ({ title, icon, number }) => {
    return (
        <div className='flex flex-col justify-around p-2 m-2 w-44 rounded-md border-2 bg-slate-800/50 border-blue-400'>
            <h1 className='p-2 font-semibold'>{title}</h1>
            <div className='flex justify-between items-end p-2'>
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