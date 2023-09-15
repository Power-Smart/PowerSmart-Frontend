import React, { useState } from 'react'
const NavButton = ({ children }) => {
    const [scale, setScale] = useState(false);

    return (
        <div className='cursor-pointer hover:bg-gray-50/10 text-white relative' onMouseOver={(e) => setScale(true)} onMouseOut={(e) => setScale(false)}>
            <div className={`w-full transition-all ${scale ? "scale-100" : "scale-0"} bottom-0 h-1 bg-white text-white absolute z-10`}></div>
            <div className='px-7 py-3 text-center cursor-pointer text-white relative'>
                {children}
            </div>
        </div>
    )
}

export default NavButton