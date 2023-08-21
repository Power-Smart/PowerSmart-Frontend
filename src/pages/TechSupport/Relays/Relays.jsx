import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import RelayCard from './RelayCard'
import PlaceSidebar from '../../../components/Sidebar/TechSupport/PlaceSidebar'
import { Link, useParams } from 'react-router-dom'
import RoomSidebar from '../../../components/Sidebar/TechSupport/RoomSidebar'



const RelaySet = [
    {
        id: 1,
        type: '8 Relays',
        name: 'Relay 1',
        image: 'https://www.plusquip.com.au/wp-content/uploads/2013/07/REL-000-relay-replacement-kit.jpg'
    },
    {
        id: 2,
        type: '5 Relays',
        name: 'Relay 2',
        image: 'https://www.plusquip.com.au/wp-content/uploads/2013/07/REL-000-relay-replacement-kit.jpg'
    },
    {
        id: 3,
        type: '3 Relays',
        name: 'Relay 3',
        image: 'https://www.plusquip.com.au/wp-content/uploads/2013/07/REL-000-relay-replacement-kit.jpg'
    }
];

const Relays = () => {
    return (
        <PageWrapper>
            <RoomSidebar />
            <PageContent>
                <TopBar title={"Relays"} baclLink='' />
                <ContentWrapper>
                    <ButtonBar>
                        <Link to={`/tech/addDevice`}>
                            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Relay</button>
                        </Link>
                    </ButtonBar>
                    <div className='flex flex-wrap'>
                        {
                            RelaySet.map((relay) => (
                                <RelayCard
                                    key={relay.id}
                                    id={relay.id}
                                    type={relay.type}
                                    name={relay.name}
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

export default Relays