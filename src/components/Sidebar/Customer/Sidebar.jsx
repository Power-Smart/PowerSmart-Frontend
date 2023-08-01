import React from 'react'
import SidebarButton from '../SidebarButton'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlinePlace, MdMeetingRoom, MdLocalGroceryStore } from 'react-icons/md'
import { TbReport, TbTruckDelivery } from 'react-icons/tb'
import { useState } from 'react'
import { BsChatDots } from 'react-icons/bs'
import { FaPowerOff } from 'react-icons/fa'
import Logo from '../../../assets/images/logo.jpeg'
import SidebarToggle from '../SidebarToggle'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import {BiSupport} from 'react-icons/bi'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'


const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutFunction = (e) => {
        e.preventDefault();
        localStorage.clear();
        dispatch(logout());
        navigate('/login');
    }

    const [toggle, setToggle] = useState(true);

    return (
        <nav className='bg-slate-800 w-fit h-screen flex flex-col items-start justify-between md:relative fixed left-0 top-0 z-10'>
            <SidebarToggle setToggle={setToggle} toggle={toggle} />
            <div className='flex flex-col items-start'>
                <div className={'flex flex-row justify-center items-center my-4 transition-all duration-300 ' + (toggle ? "px-3 w-full" : "")}>
                    <img src={Logo} alt="Logo" border="0" className={toggle ? 'w-8 rounded-md px-1 duration-300 ' : 'w-8 rounded-md mx-2 duration-300 '} />
                    {toggle && <h2 className='text-white'>POWER SMART</h2>}
                </div>
                <SidebarButton text="Dashboard" toggle={toggle} link='/'>
                    <AiOutlineHome />
                </SidebarButton>
                <SidebarButton text="Places" toggle={toggle} link='places'>
                    <MdOutlinePlace />
                </SidebarButton>
                <SidebarButton text="Complaints" toggle={toggle} link='Complaints'>
                    <TbReport />
                </SidebarButton>
                <SidebarButton text="Chat" toggle={toggle} link='chat'>
                    <BsChatDots />
                </SidebarButton>
                <SidebarButton text="Payment" toggle={toggle} link='payments'>
                    <RiMoneyDollarCircleLine  />
                </SidebarButton>
                <SidebarButton text="Support" toggle={toggle}>
                    <BiSupport />
                </SidebarButton>
            </div>
            <div className='flex flex-col items-start w-full'>
                <div onClick={logoutFunction} className={'flex justify-center items-center pt-3 pb-3 text-white mx-auto transition-all hover:bg-red-800 text-center duration-300 ' + (toggle ? 'w-full' : '')}>
                    <div className='px-2'><FaPowerOff /></div>
                    {toggle && <div>Logout</div>}
                </div>
            </div>
        </nav>
    )
}

export default Sidebar