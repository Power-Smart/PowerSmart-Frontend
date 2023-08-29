import React from 'react'
import SidebarButton from '../SidebarButton'
import { useState } from 'react'
import SidebarWrapper from '../SidebarWrapper'
import { TbHome2 } from 'react-icons/tb'
import { GiElectricalResistance } from 'react-icons/gi'

const RoomSidebar = ({ placeID, customerID }) => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle} profileLink="/tech/profile">
            <SidebarButton text="Rooms" toggle={toggle} link={`/tech/${customerID}/place/${placeID}/rooms`}>
                <TbHome2 />
            </SidebarButton>
            <SidebarButton text="Relays" toggle={toggle} link={`/tech/${customerID}/place/${placeID}/relays`}>
                <GiElectricalResistance className='text-xl font-bold' />
            </SidebarButton>
        </SidebarWrapper>
    )
}

export default RoomSidebar