import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import DeviceCard from './DeviceCard'
import { Link, useParams } from 'react-router-dom'
import RoomSidebar from '../../../components/Sidebar/TechSupport/RoomSidebar'


const RelaySet = [
    {
        id: 1,
        walt: '150',
        deviceName: 'Fan-01',
        image: 'https://damro.lk/wp-content/uploads/2019/11/F-56MZ2.jpg'
    },
    {
        id: 3,
        walt: '50',
        deviceName: 'Bulb-01',
        image: 'https://images.pexels.com/photos/1616472/pexels-photo-1616472.jpeg?cs=srgb&dl=pexels-dids-1616472.jpg&fm=jpg'
    },
    {
        id: 2,
        walt: '600',
        deviceName: 'Air Conditioner',
        image: 'https://imgeng.jagran.com/images/2022/sep/ac%20under%20400001662611944627.jpg'
    },
    {
        id: 3,
        walt: '95',
        deviceName: 'Bulb-02',
        image: 'https://images.pexels.com/photos/1616472/pexels-photo-1616472.jpeg?cs=srgb&dl=pexels-dids-1616472.jpg&fm=jpg'
    }
];



const Devices = () => {
    return (
        <PageWrapper>
            <RoomSidebar />
            <PageContent>
                <TopBar />
                <ContentWrapper>
                    <ButtonBar>
                        <Link to={`/tech/addDevice`}>
                            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Device</button>
                        </Link>
                    </ButtonBar>
                    <div className='flex flex-wrap'>
                        {
                            RelaySet.map((relay) => (
                                <DeviceCard
                                    key={relay.id}
                                    id={relay.id}
                                    walt={relay.walt}
                                    deviceName={relay.deviceName}
                                    image={relay.image}
                                />
                            ))
                        }
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Devices