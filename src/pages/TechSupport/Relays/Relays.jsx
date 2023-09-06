import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import RelayCard from './RelayCard'
import { Link, useParams } from 'react-router-dom'
import RoomSidebar from '../../../components/Sidebar/TechSupport/RoomSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelays, selectRelays, selectRelaysStatus } from '../../../redux/slices/techsupport/relaySlice'
import LoadingSpinner from '../../../components/smallComps/LoadingSpinner'
import { getAvailableUnitsCount } from '../../../api/apiTechAssigns'
import { data } from 'autoprefixer'


const Relays = () => {
    const dispatch = useDispatch();
    const { customerID, placeID } = useParams();
    const user = useSelector(state => state.user.user);
    const relayUnits = useSelector(selectRelays);
    const relaysStatus = useSelector(selectRelaysStatus);
    const [avilUnitCount, setAvilUnitCount] = useState(0);

    useEffect(() => {
        if (user) {
            getAvailableUnitsCount(customerID, "relay")
                .then(res => {
                    if (res.status === 200) {
                        setAvilUnitCount(res.data.count);
                    }
                });
        }
        console.log(avilUnitCount);
    }, [user]);

    useEffect(() => {
        if (user.id) {
            dispatch(fetchRelays({ userID: user.id, placeID }));
        }
    }, [user, dispatch]);

    return (
        <PageWrapper>
            <RoomSidebar customerID={customerID} placeID={placeID} />
            <PageContent>
                <TopBar title={"Relays"} baclLink={`/tech/customer/${customerID}`} />
                <ContentWrapper>
                    <ButtonBar>
                        {avilUnitCount > 0 && <Link to={`/tech/${customerID}/place/${placeID}/relays/add`}>
                            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Relay</button>
                        </Link>}
                    </ButtonBar>
                    <div className='flex flex-wrap'>
                        {relayUnits.length > 0 &&
                            relayUnits.map((relay, index) => (
                                <RelayCard
                                    key={index}
                                    id={relay.relay_unit_id}
                                    type={relay.category}
                                    name={relay.name}
                                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVtrLNUoaXFIUW5kH5uP3pvEMuS0tlTAXRguMjbzxgwCkBbUYcObNusbfvJdgJE6W8QQ&usqp=CAU'
                                    description={relay.description}
                                />
                            ))
                        }
                        {relaysStatus === "idle" && <LoadingSpinner />}
                        {relayUnits.length === 0 && <h2 className=' text-center mx-auto'>No Relays<br /> <nav className='text-gray-500'>click 'Add Relay' to add a relay</nav></h2>}
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Relays