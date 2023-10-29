import React, { useState } from 'react'
import NavButton from '../../components/Landing/NavButton'
import { FaBars } from "react-icons/fa"
// import { HiOutlineBars3 } from "react-icons/hi"

const NavBar = () => {
    const [show, setShow] = useState(false);
    return (
        <nav className='sticky top-0 left-0 z-40 flex lg:flex-row flex-col bg-[#111111]/80 backdrop-blur-sm'>
            <div className='lg:hidden flex justify-between items-center my-4 mx-4'>
                <div className='text-white select-none'>PowerSmart</div>
                <FaBars className='lg:hidden text-white text-2xl cursor-pointer' onClick={() => { setShow(show => !show) }} />
            </div>
            <div className={`lg:w-[80%] mx-auto flex lg:flex-row lg:justify-between justify-evenly w-full select-none relative ${show ? '' : 'hidden'}`}>
                {/* <HiOutlineBars3 className={}/> */}

                <div className='flex lg:flex-row flex-col lg:items-center items-baseline'>
                    <NavButton>Home</NavButton>
                    <NavButton>Features</NavButton>
                    <NavButton>Advantages</NavButton>
                    <NavButton>About</NavButton>
                    <NavButton>Contact</NavButton>
                </div>
                <div className='flex lg:flex-row flex-col items-center lg:justify-start justify-center'>
                    <div className='px-4 lg:py-2 py-4 text-center'>
                        <div className='border-white text-white border-2 py-1 px-3 rounded-lg text-sm cursor-pointer hover:scale-110 transition-all'>
                            Login
                        </div>
                    </div>
                    <div className='px-4 lg:py-2 py-4 text-center'>
                        <div className='bg-white py-1 px-3 rounded-lg text-sm cursor-pointer hover:scale-110 transition-all'>
                            Register
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar