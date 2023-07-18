import React from 'react'

const ContentWrapper = ({ children }) => {
    return (
        <div className='px-16 py-4 w-full flex flex-col flex-grow mx-auto'>
            {children}
        </div>
    )
}

export default ContentWrapper