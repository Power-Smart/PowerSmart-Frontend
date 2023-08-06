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
import { useEffect } from 'react'
import { selectPlaces } from '../../../redux/slices/placesSlice'
import LoadingSpinner from '../../../components/smallComps/LoadingSpinner'


// const dataSet = [
//     {
//         status: 'Online',
//         name: 'Living Room',
//         devices: 5,
//         measures: {
//             temperature: 25,
//             humidity: 50,
//         }
//     },
//     {
//         status: 'Offline',
//         name: 'Bedroom',
//         devices: 3,
//         measures: {
//             temperature: 25,
//             humidity: 50,
//         }
//     },
// ];


const Rooms = () => {

    const dispatch = useDispatch();
    const customer = useSelector(selectCustomer);
    const rooms = useSelector(selectRooms);
    const roomsStatus = useSelector(selectRoomsStatus);
    const { placeID } = useParams();

    useEffect(() => {
        console.log('customer', customer.id)
        console.log('rooms', roomsStatus)


        if (customer.id && placeID && roomsStatus === 'idle') {
            dispatch(fetchRooms({
                customer_id: customer.id,
                place_id: placeID
            }));
        }
    }, [customer, dispatch]);


    return (
        <PageWrapper >
            <MainSidebar />
            <PageContent >
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Rooms" baclLink='/places' />

                <div className='px-16 py-4 w-full flex flex-col flex-grow mx-auto'>

                    <Link to='/places/rooms/add'>
                        <ButtonBar>
                            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Room</button>
                        </ButtonBar>
                    </Link>

                    <div className='flex flex-wrap px-8 py-2 justify-center'>
                        {/* Cards */}

                        {(roomsStatus === 'loading' || roomsStatus === 'idle') && <LoadingSpinner />}
                        {(roomsStatus === 'succeeded' && rooms.map((data, index) => (<RoomCard key={index} {...data} />)))}
                        {(roomsStatus === 'succeeded' && rooms.length === 0) && <div className='text-white'>No rooms found</div>}

                        {/* {dataSet.map((data, index) => (<RoomCard key={index} {...data} />))} */}
                    </div>
                </div>
            </PageContent>
        </PageWrapper>

    )
}


export default Rooms