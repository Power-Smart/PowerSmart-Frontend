import React from 'react'
import { useState } from 'react'
import SidebarButton from '../SidebarButton'
import SidebarWrapper from '../SidebarWrapper'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlinePlace } from 'react-icons/md'
import { BsChatDots } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

const AdmninSidebar = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle}>
            <SidebarButton text="Dashboard" toggle={toggle} link='/admin/'>
                <AiOutlineHome />
            </SidebarButton>
            <SidebarButton text="Customer" toggle={toggle} link='/admin/customer'>
                <MdOutlinePlace />
            </SidebarButton>
            <SidebarButton text="Stock Manager" toggle={toggle} link='/admin/stockmanager'>
                <BsChatDots />
            </SidebarButton>
            <SidebarButton text="Tech Support" toggle={toggle} link='/admin/techsupport'>
                <RiMoneyDollarCircleLine />
            </SidebarButton>
            <SidebarButton text="Complaint" toggle={toggle} link='/admin/complaint'>
                <BiSupport />
            </SidebarButton>
            <SidebarButton text="Payment" toggle={toggle} link='/admin/payment'>
                <RiMoneyDollarCircleLine />
            </SidebarButton>
        </SidebarWrapper>

    )
}

export default AdmninSidebar