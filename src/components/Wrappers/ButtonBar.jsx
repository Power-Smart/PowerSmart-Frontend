import React from 'react'

const ButtonBar = ({ children }) => {
    return (
        <div className='flex items-center justify-end my-4 text-sm'>
            {children}
        </div>
    )
}

export default ButtonBar