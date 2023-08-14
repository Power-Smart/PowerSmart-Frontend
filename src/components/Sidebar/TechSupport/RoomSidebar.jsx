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
            <SidebarButton text="Dashboard" toggle={toggle} link='/tech'>
                <AiOutlineControl />
            </SidebarButton>
            <SidebarButton text="Place" toggle={toggle} link='/tech/place/rooms'>
                <BsClipboardData />
            </SidebarButton>
            <SidebarButton text="Sensor" toggle={toggle} link='/tech/sensors'>
                <BsDiagram3 />
            </SidebarButton>
            <SidebarButton text="Device" toggle={toggle} link='/tech/place/rooms/devices'>
                <BsDiagram3 />
            </SidebarButton>
        </SidebarWrapper>

    )
}

export default RoomSidebar