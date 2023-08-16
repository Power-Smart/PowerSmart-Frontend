import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import DashboardTopHeader from './DashboardTopHeader'
import PlaceCarousel from './PlaceCarousel'
import ScheduleDevice from './ScheduleDevice'
import { VscCheck, VscChromeClose } from 'react-icons/vsc'
import gameAchievement from '../../../assets/images/gama-achievement.png'
import GuestUsersSuggest from './GuestUsersSuggest'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'


const Dashboard = () => {
    const user = useSelector(state => state.user);
    console.log(user)
    // const navigate = useNavigate();
    // const { isLogged, user } = useSelector(state => state.user);
    // useEffect(() => {
    //     if (!isLogged || user.role == 0) {
    //         navigate('/login');
    //     }
    // }, [])

    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <ContentWrapper>
                    <div className="dashboard-container">
                        <div className="left-side">
                            <DashboardTopHeader />

                            <div className="place-sets my-4">
                                <div className="one-place">
                                    <h1 className="text-2x mx-4 my-3">Place 01</h1>
                                    <div className="place-details">
                                        <PlaceCarousel />
                                    </div>
                                </div>

                                <div className="one-place">
                                    <h1 className="text-2x mx-4 my-3">Place 02</h1>
                                    <div className="place-details">
                                        <PlaceCarousel />
                                    </div>
                                </div>

                                <div className="one-place">
                                    <h1 className="text-2x mx-4 my-3">Place 03</h1>
                                    <div className="place-details">
                                        <PlaceCarousel />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right-side">

                            {/* <div className="game-achievement">
                                <h1 className="text-2xl">Game Achievement</h1>
                                <img src={gameAchievement} alt="" />
                            </div> */}

                            <div className="schedule">
                                <ScheduleDevice />
                                <ScheduleDevice />
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


                            <div className="guest-users">
                                <h1 className="text-xl mt-4 mb-2">Guest Users Suggest</h1>
                                <div className='h-[290px] overflow-y-scroll'>
                                    <GuestUsersSuggest />
                                    <GuestUsersSuggest />
                                    <GuestUsersSuggest />
                                    <GuestUsersSuggest />
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Dashboard