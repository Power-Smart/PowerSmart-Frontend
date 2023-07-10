import React from 'react'
import SidebarButton from './SidebarButton'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlinePlace, MdMeetingRoom, MdLocalGroceryStore } from 'react-icons/md'
import { TbReport, TbTruckDelivery } from 'react-icons/tb'
import { BsChatDots } from 'react-icons/bs'
import { FaPowerOff } from 'react-icons/fa'
import Logo from '../../assets/images/logo.jpeg'

const Sidebar = () => {
    return (
        <nav className='bg-slate-800 w-fit h-screen flex flex-col items-start justify-between'>
            <div className='flex flex-col items-start'>
                <div className='flex justify-around items-center w-full my-4 px-3'>
                    <img src={Logo} alt="Logo" border="0" className='w-8 rounded-md' />
                    <h2 className='text-white'>POWER SMART</h2>
                </div>
                <SidebarButton text="Dashboard">
                    <AiOutlineHome />
                </SidebarButton>
                <SidebarButton text="Place">
                    <MdOutlinePlace />
                </SidebarButton>
                <SidebarButton text="Room">
                    <MdMeetingRoom />
                </SidebarButton>
                <SidebarButton text="Marketplace">
                    <MdLocalGroceryStore />
                </SidebarButton>
                <SidebarButton text="Complaint">
                    <TbReport />
                </SidebarButton>
                <SidebarButton text="Chat">
                    <BsChatDots />
                </SidebarButton>
                <SidebarButton text="Order Requests">
                    <TbTruckDelivery />
                </SidebarButton>
            </div>
            <div>
                <SidebarButton text="Profile">
                    <TbTruckDelivery />
                </SidebarButton>
                <div className='flex w-full justify-around items-center p-4 py-3 text-white bg-red-700'>
                    <div className='px-2'><FaPowerOff /></div>
                    <div>Logout</div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar