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
import {BsHouseLock} from 'react-icons/bs'
import {BiTachometer} from 'react-icons/bi'
import {MdOutlineReportGmailerrorred} from 'react-icons/md'
import {FaUserShield} from 'react-icons/fa'


const MainSidebar = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle} profileLink="/tech/profile">
            <SidebarButton text="Dashboard" toggle={toggle} link='/tech/'>
                <BiTachometer />
            </SidebarButton>
            <SidebarButton text="Complaint" toggle={toggle} link='/tech/userComplaints'>
                <MdOutlineReportGmailerrorred />
            </SidebarButton>
            <SidebarButton text="Chat" toggle={toggle} link='/tech/chat'>
                <BsChatDots />
            </SidebarButton>
            <SidebarButton text="Account Access" toggle={toggle} link='/tech/accessCusAccount'>
                <FaUserShield />
            </SidebarButton>
        </SidebarWrapper>

    )
}

export default MainSidebar