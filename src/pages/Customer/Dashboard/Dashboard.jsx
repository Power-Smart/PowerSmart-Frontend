import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import { useSelector, useDispatch } from 'react-redux'
import DashboardTopHeader from './DashboardTopHeader'
import PlaceCarousel from './PlaceCarousel'
import ScheduleDevice from './ScheduleDevice'
import { VscCheck, VscChromeClose } from 'react-icons/vsc'
import GuestUsersSuggest from './GuestUsersSuggest'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import { fetchPlaces, selectPlaces, selectPlacesStatus, selectPlacesError } from '../../../redux/slices/placesSlice'
import LoadingSpinner from '../../../components/smallComps/LoadingSpinner'
import { getPlaceEvent } from '../../../api/apiSse.js'
import { getGuestUserSuggest } from '../../../api/apiGuestUser'
import { userSchedulesApi } from '../../../api/apiSchedules'

const Dashboard = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user);
    const places = useSelector(selectPlaces);
    const placesStatus = useSelector(selectPlacesStatus);
    const [roomsData, setRoomsData] = useState([]);

    const [schedules, setSchedules] = useState([]);

    const getScheduleData = async () => {
        const res = await userSchedulesApi(user.id);
        if (res.status === 200) {
            setSchedules(res.data);
        }
        else {
            setSchedules([]);
        }
    }

    useEffect(() => {
        if (user.id) {
            dispatch(fetchPlaces(user.id));
            const allGuestusers = getGuestUserSuggest(user.id);
            allGuestusers.then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
            getScheduleData();
        }

        console.log('user id', user.id);
        const eventSource = getPlaceEvent(user.id);
        eventSource.onmessage = (event) => {
            try {
                setRoomsData(JSON.parse(event.data));
            } catch (error) {
                setRoomsData({});
            }
            console.log(JSON.parse(event.data));
        }
        return () => {
            eventSource.close();
        }
    }, [user, dispatch]);




    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <ContentWrapper>
                    <div className="dashboard-container">
                        <div className="left-side">
                            {/* <DashboardTopHeader /> */}

                            {placesStatus === 'loading' && <LoadingSpinner />}
                            {placesStatus === 'succeeded' &&
                                <div className="place-sets my-4">
                                    {places.length > 0 && places.map((place, index) => (
                                        <div className="one-place" key={index}>
                                            <h1 className="text-2x mx-4 my-3">{place.name}</h1>
                                            <div className="place-details">
                                                <PlaceCarousel place_id={place.place_id} isActive={place.is_active} rooms={roomsData.filter(room => +room.place_id === place.place_id)} />
                                            </div>
                                        </div>
                                    ))}
                                </div>}
                        </div>

                        <div className="right-side">

                            {/* <div className="game-achievement">
                                <h1 className="text-2xl">Game Achievement</h1>
                                <img src={gameAchievement} alt="" />
                            </div> */}

                            <div className="schedule">
                                <div className='h-[290px] overflow-y-scroll'>
                                    {
                                        schedules.length > 0 ?
                                            schedules.map(schedule => <ScheduleDevice key={schedule.schedule_id} {...schedule} />) :
                                            <h1 className="text-xl mt-4 mb-2">No Schedules</h1>
                                    }
                                </div>
                            </div>

                            <div className="guest-users">
                                <h1 className="text-xl mt-4 mb-2">Tech Support Request</h1>

                                <div className="one-guest-user text-sm">
                                    <div className="default-profile-img">
                                        <img src="https://avatars.githubusercontent.com/u/9700585?v=4" alt="" />
                                    </div>
                                    <div className="m-3">
                                        <h3 className='font-bold text-[18px] mb-2'>Viraj Sandakelum</h3>
                                        <h3>Payment: Rs. 5250.00</h3>
                                    </div>
                                    <div className="accept-reject">
                                        <button className="accept"><VscCheck /></button>
                                        <button className="reject"><VscChromeClose /></button>
                                    </div>
                                </div>
                            </div>


                            {/* <div className="guest-users">
                                <h1 className="text-xl mt-4 mb-2">Guest Users Suggest</h1>
                                <div className='h-[290px] overflow-y-scroll'>
                                    <GuestUsersSuggest />
                                    <GuestUsersSuggest />
                                    <GuestUsersSuggest />
                                    <GuestUsersSuggest />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Dashboard