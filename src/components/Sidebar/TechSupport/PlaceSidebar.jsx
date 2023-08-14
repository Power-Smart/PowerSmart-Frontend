import React from 'react'
import SidebarButton from '../SidebarButton'
import { AiOutlineControl } from 'react-icons/ai'
import { useState } from 'react'
import { BsClipboardData, BsDiagram3 } from 'react-icons/bs'
import SidebarWrapper from '../SidebarWrapper'

const RoomSidebar = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle}>
            <SidebarButton text="Dashboard" toggle={toggle} link='/places/rooms/controlpanel'>
                <AiOutlineControl />
            </SidebarButton>
            <SidebarButton text="Place" toggle={toggle} link='/tech/places'>
                <BsClipboardData />
            </SidebarButton>
            <SidebarButton text="Relay" toggle={toggle} link='/tech/relays'>
                <BsDiagram3 />
            </SidebarButton>
        </SidebarWrapper>

    )
}

export default RoomSidebar