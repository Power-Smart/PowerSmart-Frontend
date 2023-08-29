import React from 'react'
import RoomSidebar from '../../../components/Sidebar/TechSupport/RoomSidebar'
import PlaceCardTech from '../../../components/Cards/PlaceCardTech'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import RoomCard from '../../../components/Cards/RoomCard'
import { getRoomsByPlace } from '../../../api/apiTechAssigns'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// const rooms = [
//     {
//         place_id: 1,
//         room_id: 1,
//         name: 'Room 1',
//         is_active: true,
//         device_count: 3,
//         size: 3,
//         type: 'Room 01',
//         window_type: 'Window 01',
//     },
//     {
//         place_id: 2,
//         room_id: 2,
//         name: 'Room 2',
//         is_active: true,
//         device_count: 7,
//         size: 5,
//         type: 'Room 02',
//         window_type: 'Window 02',

//     },
// ];



const Rooms = () => {
    const dispatch = useDispatch();
    const { customerID, placeID } = useParams();
    const user = useSelector(state => state.user.user);
    const [rooms, setRooms] = useState([]);
    const getRooms = async () => {
        const data = await getRoomsByPlace(user.id, +placeID);
        setRooms(data.data);
    }
    useEffect(() => {
        if (user && rooms.length === 0) {
            getRooms();
        }
    }, [user, dispatch]);
    return (
        < PageWrapper >
            <RoomSidebar customerID={customerID} placeID={placeID} />
            <PageContent >
                <TopBar image="https://avatars.githubusercontent.com/u/7374455?v=4" title="Rooms" baclLink={`/tech/customer/${customerID}`} />

                {/* Content Area */}
                <ContentWrapper>
                    <div className='flex flex-wrap px-8 py-2 justify-center'>
                        {/* Cards */}
                        {rooms.length > 0 ?
                            rooms.map((data, index) => (<RoomCard customerID={customerID} isTechSupport={true} isCustomer={false} key={index} {...data} />))
                            : "No rooms to access"}
                    </div>

                </ContentWrapper>
            </PageContent>
        </PageWrapper >
    )
}

export default Rooms