import React, { useEffect } from 'react'
import SidebarButton from '../SidebarButton'
import { AiOutlineHome, AiFillRocket } from 'react-icons/ai'
import { MdOutlinePlace } from 'react-icons/md'
import { TbReport } from 'react-icons/tb'
import { useState } from 'react'
import { BsChatDots } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import SidebarWrapper from '../SidebarWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomer } from '../../../redux/slices/customerSlice'
import { subValidation } from '../../../utils/validators'

const MainSidebar = () => {

    const [toggle, setToggle] = useState(true);
    const user = useSelector((state) => state.user.user);
    const customer = useSelector((state) => state.customer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(fetchCustomer(user.id));
        }
    }, [])

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle} profileLink="/profile" isGifActive={true} >
            <SidebarButton text="Dashboard" toggle={toggle} link='/'>
                <AiOutlineHome />
            </SidebarButton>
            <SidebarButton text="Places" toggle={toggle} link='/places'>
                <MdOutlinePlace />
            </SidebarButton>
            {/* <SidebarButton text="Complaints" toggle={toggle} link='/Complaints'>
                <TbReport />
            </SidebarButton> */}
            <SidebarButton text="Chat" toggle={toggle} link='/chat'>
                <BsChatDots />
            </SidebarButton>
            <SidebarButton text="Payment" toggle={toggle} link='/payments'>
                <RiMoneyDollarCircleLine />
            </SidebarButton>
            <SidebarButton text="Support" toggle={toggle} link='/support'>
                <BiSupport />
            </SidebarButton>
            {!subValidation(customer.year_subscription) && <SidebarButton text="Subscribe" toggle={toggle} link='/subscribe'>
                <AiFillRocket />
            </SidebarButton>}
        </SidebarWrapper>

    )
}

export default MainSidebar