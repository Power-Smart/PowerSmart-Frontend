import React from 'react'

const PageContent = ({ children }) => {
    return (
        <div className='flex flex-col flex-grow bg-[#0E0E1A] text-white overflow-y-scroll'>
            {children}
        </div>
    )
}

export default PageContent