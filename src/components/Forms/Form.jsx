import React from 'react'

const Form = ({ children }) => {
    return (
        <form className='px-12 py-7 mx-auto bg-[#1C1C2E] border-2 border-blue-900 rounded-md w-full md:w-3/4 lg:w-2/3 xl:w-1/2'>
            {children}
        </form>
    )
}

export default Form