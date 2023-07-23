import React from 'react'
import SidebarButton from './SidebarButton'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlinePlace, MdMeetingRoom, MdLocalGroceryStore } from 'react-icons/md'
import { TbReport, TbTruckDelivery } from 'react-icons/tb'
import { useState } from 'react'
import { BsChatDots } from 'react-icons/bs'
import { FaPowerOff } from 'react-icons/fa'
import Logo from '../../assets/images/logo.jpeg'
import SidebarToggle from './SidebarToggle'

const Sidebar = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <nav className='bg-slate-800 w-fit h-screen flex flex-col items-start justify-between md:relative fixed left-0 top-0 z-10'>
            <SidebarToggle setToggle={setToggle} toggle={toggle} />
            <div className='flex flex-col items-start'>
                <div className={'flex flex-row justify-center items-center my-4 transition-all duration-300 ' + (toggle ? "px-3 w-full" : "")}>
                    <img src={Logo} alt="Logo" border="0" className={toggle ? 'w-8 rounded-md px-1 duration-300 ' : 'w-8 rounded-md mx-2 duration-300 '} />
                    {toggle && <h2 className='text-white'>POWER SMART</h2>}
                </div>
                <SidebarButton text="Dashboard" toggle={toggle}>
                    <AiOutlineHome />
                </SidebarButton>
                <SidebarButton text="Place" toggle={toggle}>
                    <MdOutlinePlace />
                </SidebarButton>
                <SidebarButton text="Room" toggle={toggle}>
                    <MdMeetingRoom />
                </SidebarButton>
                <SidebarButton text="Marketplace" toggle={toggle}>
                    <MdLocalGroceryStore />
                </SidebarButton>
                <SidebarButton text="Complaint" toggle={toggle}>
                    <TbReport />
                </SidebarButton>
                <SidebarButton text="Chat" toggle={toggle}>
                    <BsChatDots />
                </SidebarButton>
                <SidebarButton text="Order Requests" toggle={toggle}>
                    <TbTruckDelivery />
                </SidebarButton>
                <SidebarButton text="Profile" toggle={toggle}>
                    <TbTruckDelivery />
                </SidebarButton>
            </div>
            <div className='flex flex-col items-start w-full'>
                <div className={'flex justify-center items-center pt-3 pb-3 text-white mx-auto transition-all hover:bg-red-800 text-center duration-300 ' + (toggle ? 'w-full' : '')}>
                    <div className='px-2'><FaPowerOff /></div>
                    {toggle && <div>Logout</div>}
                </div>
            </div>
        </nav>
    )
}

export default Sidebar