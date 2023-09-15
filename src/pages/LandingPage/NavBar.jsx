import React from 'react'
import NavButton from '../../components/Landing/NavButton'

const NavBar = () => {
    return (
        <nav className='sticky top-0 left-0 z-40 flex flex-row bg-[#111111]/80 backdrop-blur-sm'>
            <div className='w-[80%] mx-auto flex justify-between'>
                <div className='flex flex-row items-center'>
                    <NavButton>Home</NavButton>
                    <NavButton>Features</NavButton>
                    <NavButton>Advantages</NavButton>
                    <NavButton>About</NavButton>
                    <NavButton>Contact</NavButton>
                </div>
                <div className='flex flex-row'>
                    <div className='px-4 py-2 text-center'>
                        <div className='border-white text-white border-2 py-1 px-3 rounded-lg text-sm cursor-pointer'>
                            Sign in
                        </div>
                    </div>
                    <div className='mx-4 my-2 text-center'>
                        <div className='bg-white py-1 px-3 rounded-lg text-sm cursor-pointer'>
                            Sign up
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar