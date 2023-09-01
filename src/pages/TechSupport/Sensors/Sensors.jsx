import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import SensorCard from './SensorCard'
import RoomSidebar from '../../../components/Sidebar/TechSupport/RoomSidebar'
import { Link, useParams } from 'react-router-dom'
import InsideRoomSidebar from '../../../components/Sidebar/TechSupport/InsideRoomSidebar'


const Sensors = () => {
    const { customerID, placeID, roomID } = useParams();
    return (
        <PageWrapper>
            <InsideRoomSidebar customerID={customerID} placeID={placeID} roomID={roomID} />
            <PageContent>
                <TopBar title={`Sensor Unit - Room ${roomID}`} baclLink={`/tech/${customerID}/place/${placeID}/rooms`} />
                <ContentWrapper>
                    <ButtonBar>
                        <Link to={`#`}>
                            {/* <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Sensors</button> */}
                        </Link>
                    </ButtonBar>
                    <div className='flex flex-wrap'>
                        <SensorCard
                            customerID={customerID}
                            placeID={placeID}
                            roomID={roomID}
                        />
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Sensors