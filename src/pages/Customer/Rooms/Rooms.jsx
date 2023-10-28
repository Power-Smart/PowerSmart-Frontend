import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import RoomCard from '../../../components/Cards/RoomCard'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCustomer } from '../../../redux/slices/customerSlice'
import { fetchRooms, selectRooms, selectRoomsStatus } from '../../../redux/slices/roomsSlice'
import { useEffect, useState } from 'react'
import { selectPlaces } from '../../../redux/slices/placesSlice'
import LoadingSpinner from '../../../components/smallComps/LoadingSpinner'
import { emptyRoomsSlice } from '../../../redux/slices/roomsSlice'


const Rooms = () => {

    const dispatch = useDispatch();
    const rooms = useSelector(selectRooms);
    const roomsStatus = useSelector(selectRoomsStatus);
    const { placeID } = useParams();
    const user = useSelector(state => state.user.user)

    // console.log(user.id);

    useEffect(() => {
        dispatch(emptyRoomsSlice());
        dispatch(fetchRooms({
            user_id: user.id,
            place_id: placeID
        }));

    }, [user, dispatch]);


    return (
        <PageWrapper >
            <MainSidebar />
            <PageContent >
                <TopBar image="https://avatars.githubusercontent.com/u/7374421685?v=4" title="Rooms" baclLink='/places' />

                <div className='px-16 py-4 w-full flex flex-col flex-grow mx-auto'>

                    <ButtonBar>
                        <Link to={`/places/${placeID}/rooms/add`}>
                            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Room</button>
                        </Link>
                    </ButtonBar>

                    <div className='flex flex-wrap px-8 py-2 justify-center'>
                        {/* Cards */}

                        {(roomsStatus === 'loading' || roomsStatus === 'idle') && <LoadingSpinner />}
                        {(roomsStatus === 'succeeded' && rooms.map((data, index) => (<RoomCard isCustomer={true} key={index} {...data} />)))}
                        {(roomsStatus === 'succeeded' && rooms.length === 0) && <div className='text-white'>No rooms found</div>}

                    </div>
                </div>
            </PageContent>
        </PageWrapper>
    )
}


export default Rooms