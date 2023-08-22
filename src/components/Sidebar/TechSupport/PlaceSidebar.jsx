import React from 'react'
import SidebarButton from '../SidebarButton'
import { AiOutlineControl } from 'react-icons/ai'
import { useState } from 'react'
import { BsClipboardData, BsDiagram3 } from 'react-icons/bs'
import SidebarWrapper from '../SidebarWrapper'
import { FaUserShield } from 'react-icons/fa'
import { BiTachometer } from 'react-icons/bi'
import { GiElectricalResistance } from 'react-icons/gi'


const PlaceSidebar = ({ customerID }) => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle} profileLink="/tech/profile">
            <SidebarButton text="Places" toggle={toggle} link={`/tech/customer/${customerID}`}>
                <BsClipboardData />
            </SidebarButton>
            <SidebarButton text="Customers" toggle={toggle} link='/tech/accessCusAccount'>
                <FaUserShield />
            </SidebarButton>
        </SidebarWrapper>

    )
}

export default PlaceSidebar