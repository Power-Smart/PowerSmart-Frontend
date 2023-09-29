import React, { useState } from 'react'
const NavButton = ({ children }) => {
    const [scale, setScale] = useState(false);

    return (
        <div className='cursor-pointer lg:w-auto lg:rounded-none rounded-2xl lg:my-0 my-2 w-full hover:bg-gray-50/10 text-white relative' onMouseOver={(e) => setScale(true)} onMouseOut={(e) => setScale(false)}>
            <div className={` hidden lg:block w-full duration-150 transition-all ${scale ? "scale-x-100" : "scale-x-0"} bottom-0 h-1 bg-white text-white absolute z-10`}></div>
            <div className='px-7 py-4 text-center cursor-pointer text-white relative'>
                {children}
            </div>
        </div>
    )
}

export default NavButton