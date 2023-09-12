import React from 'react'
import { FaPowerOff } from 'react-icons/fa'
import Logo from '../../assets/images/logo.jpeg'
import SidebarToggle from './SidebarToggle'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import sidebarGif from '../../assets/images/sidebar.gif'


const SidebarWrapper = ({ children, toggle, setToggle, profileLink, isGifActive,username }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutFunction = (e) => {
        e.preventDefault();
        localStorage.clear();
        dispatch(logout());
        navigate('/login');
    }

    const profileView = (e) => {
        e.preventDefault();
        navigate(profileLink);
    }

    return (
        <nav className='bg-slate-800 w-[190px] h-screen flex flex-col items-start justify-between md:relative fixed left-0 top-0 z-10'>
            <img src={sidebarGif} alt="" className='absolute z-0 h-full object-cover blur-[0.5px] opacity-90' style={{ display: isGifActive ? 'block' : 'none' }} />
            <SidebarToggle setToggle={setToggle} toggle={toggle} />
            <div className='flex flex-col items-start z-20'>
                <div className={'flex flex-row justify-center items-center my-4 transition-all duration-300 ' + (toggle ? "px-3 w-full" : "")}>
                    <img src={Logo} alt="Logo" border="0" className={toggle ? 'w-8 rounded-md px-1 duration-300 ' : 'w-8 rounded-md mx-2 duration-300 '} />
                    {toggle && <h2 className='text-white'>POWER SMART</h2>}
                </div>
                {children}
            </div>

            <div className='flex flex-col items-start w-full relative z-20'>
                <div onClick={profileView} className={'cursor-pointer flex justify-center items-center pt-3 pb-3 text-white mx-auto transition-all hover:bg-white hover:text-black text-center duration-300 ' + (toggle ? 'w-full' : '')}>
                    <div className='px-2'><img src="https://avatars.githubusercontent.com/u/73744585?v=4" alt="" className='w-12 h-12 rounded-full' /></div>
                    <div className="details flex flex-col items-center justify-center">
                        {toggle && <div className='font-bold'>{username}</div>}
                        {toggle && <div className='font-extralight'>View Profile</div>}
                    </div>

                </div>

                <div onClick={logoutFunction} className={'flex justify-center items-center pt-3 pb-3 text-white mx-auto transition-all hover:bg-red-800 text-center duration-300 ' + (toggle ? 'w-full' : '')}>
                    <div className='px-2 text-red-500 text-2xl'><FaPowerOff /></div>
                    {toggle && <div className='text-xl'>Logout</div>}
                </div>
            </div>
        </nav>
    )
}

export default SidebarWrapper