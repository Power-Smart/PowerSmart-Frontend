import React from 'react'

const SidebarButton = ({ children, text }) => {
    return (
        <div className='flex justify-start items-center pl-4 pr-16 py-2 text-white w-full'>
            <div className='px-2'>{children}</div>
            <div>{text}</div>
        </div>
    )
}

export default SidebarButton