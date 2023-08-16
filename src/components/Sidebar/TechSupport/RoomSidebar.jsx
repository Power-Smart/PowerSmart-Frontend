import React from 'react'
import SidebarButton from '../SidebarButton'
import { AiOutlineControl } from 'react-icons/ai'
import { useState } from 'react'
import { BsClipboardData, BsDiagram3 } from 'react-icons/bs'
import SidebarWrapper from '../SidebarWrapper'
import { BiTachometer } from 'react-icons/bi'
import { MdSensors } from 'react-icons/md'
import { FcElectronics } from 'react-icons/fc'
import { GiElectric } from 'react-icons/gi'
import { MdElectricalServices } from 'react-icons/md'
import { GrLocation } from 'react-icons/gr'
import { MdOutlinePlace } from 'react-icons/md'


const RoomSidebar = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle} profileLink="/tech/profile">
            <SidebarButton text="Dashboard" toggle={toggle} link='/tech/'>
                <BiTachometer />
            </SidebarButton>
            <SidebarButton text="Place" toggle={toggle} link='/tech/place/rooms'>
                <MdOutlinePlace />
            </SidebarButton>
            <SidebarButton text="Sensor" toggle={toggle} link='/tech/sensors'>
                <MdSensors />
            </SidebarButton>
            <SidebarButton text="Device" toggle={toggle} link='/tech/place/rooms/devices'>
                <MdElectricalServices />
            </SidebarButton>
        </SidebarWrapper>
    )
}

export default RoomSidebar