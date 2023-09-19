import React, { useState, useEffect } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import RelayCard from './RelayCard'
import PlaceSidebar from '../../../components/Sidebar/TechSupport/PlaceSidebar'
import { Link, useParams } from 'react-router-dom'
import RoomSidebar from '../../../components/Sidebar/TechSupport/RoomSidebar'
import { getRelayUnitsByPlace } from '../../../api/apiTechAssigns'
import { useSelector } from 'react-redux'

// const RelaySet = [
//     {
//         id: 1,
//         type: '8 Relays',
//         name: 'Relay 1',
//         image: 'https://www.plusquip.com.au/wp-content/uploads/2013/07/REL-000-relay-replacement-kit.jpg'
//     },
//     {
//         id: 2,
//         type: '5 Relays',
//         name: 'Relay 2',
//         image: 'https://www.plusquip.com.au/wp-content/uploads/2013/07/REL-000-relay-replacement-kit.jpg'
//     },
//     {
//         id: 3,
//         type: '3 Relays',
//         name: 'Relay 3',
//         image: 'https://www.plusquip.com.au/wp-content/uploads/2013/07/REL-000-relay-replacement-kit.jpg'
//     }
// ];

const Relays = () => {
    const user = useSelector(state => state.user.user);
    const { customerID, placeID } = useParams();
    const [relayUnits, setRelayUnits] = useState([]);

    const getRelayUnits = async () => {
        const data = await getRelayUnitsByPlace(user.id, +placeID);
        setRelayUnits(data.data);
        console.log(data.data);
    }

    useEffect(() => {
        if (user && relayUnits.length === 0) {
            getRelayUnits();
        }
    }, [user]);

    return (
        <PageWrapper>
            <RoomSidebar customerID={customerID} placeID={placeID} />
            <PageContent>
                <TopBar title={"Relays"} baclLink='' />
                <ContentWrapper>
                    <ButtonBar>
                        <Link to={`/tech/addDevice`}>
                            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Relay</button>
                        </Link>
                    </ButtonBar>
                    <div className='flex flex-wrap'>
                        {relayUnits.length > 0 ?
                            relayUnits.map((relay, index) => (
                                <RelayCard
                                    key={index}
                                    id={relay.relay_unit_id}
                                    type={relay.category}
                                    name={relay.name}
                                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVtrLNUoaXFIUW5kH5uP3pvEMuS0tlTAXRguMjbzxgwCkBbUYcObNusbfvJdgJE6W8QQ&usqp=CAU'
                                    description={relay.description}
                                />
                            )) :
                            <h2 className=' text-center mx-auto'>No Relay Units to Display</h2>
                        }
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Relays