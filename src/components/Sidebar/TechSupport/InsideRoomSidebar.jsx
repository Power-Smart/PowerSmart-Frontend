import React from 'react'
import SidebarButton from '../SidebarButton'
import { useState } from 'react'
import SidebarWrapper from '../SidebarWrapper'
import { TbHome2 } from 'react-icons/tb'
import { GiElectricalResistance } from 'react-icons/gi'
import { MdElectricalServices, MdSensors } from 'react-icons/md'

const InsideRoomSidebar = ({ placeID, roomID, customerID }) => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle} profileLink="/tech/profile">
            <SidebarButton text="Device" toggle={toggle} link={`/tech/${customerID}/place/${placeID}/room/${roomID}/devices`}>
                <MdElectricalServices />
            </SidebarButton>
            <SidebarButton text="Sensors" toggle={toggle} link='/tech/sensors'>
                <MdSensors />
            </SidebarButton>
        </SidebarWrapper>
    )
}

export default InsideRoomSidebar