import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import SensorCard from './SensorCard'
import RoomSidebar from '../../../components/Sidebar/TechSupport/RoomSidebar'
import { Link, useParams } from 'react-router-dom'
import InsideRoomSidebar from '../../../components/Sidebar/TechSupport/InsideRoomSidebar'
import { useSelector } from 'react-redux'
import { getAvailableUnitsCount } from '../../../api/apiTechAssigns'


const Sensors = () => {
    const { customerID, placeID, roomID } = useParams();
    const user = useSelector(state => state.user.user);
    const [avilUnitCount, setAvilUnitCount] = useState(0);
    const [hasSensor, setHasSensor] = useState(false);

    useEffect(() => {
        if (user) {
            getAvailableUnitsCount(customerID, "sensor")
                .then(res => {
                    if (res.status === 200) {
                        setAvilUnitCount(res.data.count);
                    }
                });
        }
        console.log(avilUnitCount);
    }, [user]);

    return (
        <PageWrapper>
            <InsideRoomSidebar customerID={customerID} placeID={placeID} roomID={roomID} />
            <PageContent>
                <TopBar title={`Sensor Unit - Room ${roomID}`} baclLink={`/tech/${customerID}/place/${placeID}/rooms`} />
                <ContentWrapper>
                    <ButtonBar>
                        {avilUnitCount > 0 && !hasSensor &&
                            <Link to={`add`}>
                                <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Sensor Unit</button>
                            </Link>}
                    </ButtonBar>
                    <div className='flex flex-wrap'>
                        <SensorCard
                            customerID={customerID}
                            placeID={placeID}
                            roomID={roomID}
                            setHasSensor={setHasSensor}
                            setAvilUnitCount={setAvilUnitCount}
                        />
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Sensors