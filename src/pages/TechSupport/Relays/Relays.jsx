import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import Sidebar from '../../../components/Sidebar/Sidebar'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import RelayCard from './RelayCard'
import { Link, useParams } from 'react-router-dom'


const RelaySet = [
    {
        id: 1,
        type: '8 Relays',
        name: 'Relay 1',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fotor.com%2Fblog%2Fhow-to-blur-part-of-a-picture%2F&psig=AOvVaw149jnOG1xdLQTVZLtrrwVC&ust=1691837455151000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPii4eW31IADFQAAAAAdAAAAABAE'
    },
    {
        id: 2,
        type: '5 Relays',
        name: 'Relay 2',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FRelay-Modules%2Fs%3Frh%3Dn%253A1375395031%252Cp_89%253AGeneric&psig=AOvVaw0YK2s7U6h9Qf1O4x5t7aYr&ust=1634016717900000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjC9sP8uPMCFQAAAAAdAAAAABAD'
    },
    {
        id: 3,
        type: '8 Relays',
        name: 'Relay 3',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FRelay-Modules%2Fs%3Frh%3Dn%253A1375395031%252Cp_89%253AGeneric&psig=AOvVaw0YK2s7U6h9Qf1O4x5t7aYr&ust=1634016717900000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjC9sP8uPMCFQAAAAAdAAAAABAD'
    }
];

const Relays = () => {
    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar />
                <ContentWrapper>
                    <ButtonBar>
                        <Link to={`/tech/addRelays`}>
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