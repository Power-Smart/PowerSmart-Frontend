import React from 'react'
import SidebarButton from '../SidebarButton'
import { AiOutlineControl } from 'react-icons/ai'
import { useState } from 'react'
import { BsClipboardData, BsDiagram3 } from 'react-icons/bs'
import SidebarWrapper from '../SidebarWrapper'

const RoomSidebar = ({ placeID, roomID }) => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarWrapper toggle={toggle} setToggle={setToggle} profileLink="/profile" isGifActive={true}>
            <SidebarButton text="Control Panel" toggle={toggle} link='/places/rooms/controlpanel'>
                <AiOutlineControl />
            </SidebarButton>
            <SidebarButton text="Check Status" toggle={toggle} link={`/places/${placeID}/rooms/${roomID}/status`}>
                <BsClipboardData />
            </SidebarButton>
            {/* <SidebarButton text="Placements" toggle={toggle} link={`/places`}>
                <BsDiagram3 />
            </SidebarButton> */}
        </SidebarWrapper>

    )
}

export default RoomSidebar