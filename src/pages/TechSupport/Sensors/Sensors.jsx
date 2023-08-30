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


const Sensorset = [
    {
        id: 1,
        type: '8 Sensors',
        name: 'Sensors 1',
        image: 'https://static-01.daraz.lk/p/1e82dbf5a3a7028ff75b5575988d4635.jpg'
    },
    {
        id: 2,
        type: '5 Sensors',
        name: 'Sensors 2',
        image: 'https://nilambaraelectronics.com/wp-content/uploads/2019/09/dht-11-humidity-sensor-500x500.jpg'
    },
    {
        id: 3,
        type: '8 Sensors',
        name: 'Sensors 3',
        image: 'https://www.heelectronicslk.com/wp-content/uploads/2021/06/nodemcu-esp8266-cp2102.jpg'
    }
];


const Sensors = () => {
    const { customerID, placeID, roomID } = useParams();
    return (
        <PageWrapper>
            <InsideRoomSidebar customerID={customerID} placeID={placeID} roomID={roomID} />
            <PageContent>
                <TopBar />
                <ContentWrapper>
                    <ButtonBar>
                        <Link to={`#`}>
                            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Sensors</button>
                        </Link>
                    </ButtonBar>
                    <div className='flex flex-wrap'>
                        {
                            Sensorset.map((Sensors) => (
                                <SensorCard
                                    key={Sensors.id}
                                    id={Sensors.id}
                                    type={Sensors.type}
                                    name={Sensors.name}
                                    image={Sensors.image}
                                />
                            ))
                        }
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Sensors