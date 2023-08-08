import React from 'react'
import SidebarButton from '../SidebarButton'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlinePlace } from 'react-icons/md'
import { TbReport } from 'react-icons/tb'
import { useState } from 'react'
import { BsChatDots } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import SidebarWrapper from '../SidebarWrapper'

const MainSidebar = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle}>
            <SidebarButton text="Dashboard" toggle={toggle} link='/'>
                <AiOutlineHome />
            </SidebarButton>
            <SidebarButton text="Places" toggle={toggle} link='/places'>
                <MdOutlinePlace />
            </SidebarButton>
            <SidebarButton text="Complaints" toggle={toggle} link='/Complaints'>
                <TbReport />
            </SidebarButton>
            <SidebarButton text="Chat" toggle={toggle} link='/chat'>
                <BsChatDots />
            </SidebarButton>
            <SidebarButton text="Payment" toggle={toggle} link='/payments'>
                <RiMoneyDollarCircleLine />
            </SidebarButton>
            <SidebarButton text="Support" toggle={toggle}>
                <BiSupport />
            </SidebarButton>
        </SidebarWrapper>

    )
}

export default MainSidebar