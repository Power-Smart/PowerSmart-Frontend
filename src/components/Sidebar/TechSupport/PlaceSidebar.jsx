import React from 'react'
import SidebarButton from '../SidebarButton'
import { AiOutlineControl } from 'react-icons/ai'
import { useState } from 'react'
import { BsClipboardData, BsDiagram3 } from 'react-icons/bs'
import SidebarWrapper from '../SidebarWrapper'
import {BiTachometer} from 'react-icons/bi'
import {GiElectricalResistance} from 'react-icons/gi'


const RoomSidebar = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle} profileLink="/tech/profile">
            <SidebarButton text="Dashboard" toggle={toggle} link='/tech/'>
                <BiTachometer />
            </SidebarButton>
            <SidebarButton text="Place" toggle={toggle} link='/tech/places'>
                <BsClipboardData />
            </SidebarButton>
            <SidebarButton text="Relay" toggle={toggle} link='/tech/relays'>
                <GiElectricalResistance className='text-xl font-bold'/>
            </SidebarButton>
        </SidebarWrapper>

    )
}

export default RoomSidebar