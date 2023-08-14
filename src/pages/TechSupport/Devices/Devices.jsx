import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import Sidebar from '../../../components/Sidebar/Sidebar'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import DeviceCard from './DeviceCard'
import { Link, useParams } from 'react-router-dom'


const RelaySet = [
    {
        id: 1,
        walt: '15',
        deviceName: 'Fan',
        image: 'https://damro.lk/wp-content/uploads/2019/11/F-56MZ2.jpg'
    },
    {
        id: 2,
        walt: '15',
        deviceName: 'Light',
        image: 'https://damro.lk/wp-content/uploads/2019/11/F-56MZ2.jpg'
    },
    {
        id: 3,
        walt: '15',
        deviceName: 'Fan',
        image: 'https://damro.lk/wp-content/uploads/2019/11/F-56MZ2.jpg'
    }
];



const Devices = () => {
    return (
        <PageWrapper>
            <Sidebar />
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