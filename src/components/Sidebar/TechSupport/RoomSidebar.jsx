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
import { TbHome2 } from 'react-icons/tb'
import { GiElectricalResistance } from 'react-icons/gi'

const RoomSidebar = ({ placeID, customerID }) => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle} profileLink="/tech/profile">
            {/* <SidebarButton text="Dashboard" toggle={toggle} link='/tech/'>
                <BiTachometer />
            </SidebarButton>
            <SidebarButton text="Place" toggle={toggle} link='/tech/places'>
                <MdOutlinePlace />
            </SidebarButton> */}
            <SidebarButton text="Rooms" toggle={toggle} link={`/tech/${customerID}/place/${placeID}/rooms`}>
                <TbHome2 />
            </SidebarButton>
            {/* <SidebarButton text="Sensor" toggle={toggle} link='/tech/sensors'>
                <MdSensors />
            </SidebarButton>
            <SidebarButton text="Device" toggle={toggle} link='/tech/place/rooms/devices'>
                <MdElectricalServices />
            </SidebarButton> */}
            <SidebarButton text="Relays" toggle={toggle} link='/tech/place/relays'>
                <GiElectricalResistance className='text-xl font-bold' />
            </SidebarButton>
        </SidebarWrapper>
    )
}

export default RoomSidebar