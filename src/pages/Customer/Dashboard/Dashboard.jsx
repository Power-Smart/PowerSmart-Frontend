import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import DashboardTopHeader from './DashboardTopHeader'
import PlaceCarousel from './PlaceCarousel'
import ScheduleDevice from './ScheduleDevice'
import { VscCheck, VscChromeClose } from 'react-icons/vsc'
import gameAchievement from '../../../assets/images/gama-achievement.png'
import GuestUsersSuggest from './GuestUsersSuggest'



const Dashboard = () => {
    const navigate = useNavigate();
    const { isLogged, user } = useSelector(state => state.user);
    // useEffect(() => {
    //     if (!isLogged || user.role == 0) {
    //         navigate('/login');
    //     }
    // }, [])
    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Dashboard" />
                <ContentWrapper>
                    <div className="dashboard-container">
                        <div className="left-side">
                            <DashboardTopHeader />
                            <div className="schedule">
                                <ScheduleDevice />
                                <ScheduleDevice />
                            </div>

                            <div className="place-sets">
                                <div className="one-place">
                                    <h1 className="text-2x">Place 01</h1>
                                    <div className="place-details">
                                        <PlaceCarousel />
                                    </div>
                                </div>

                                <div className="one-place">
                                    <h1 className="text-2x">Place 01</h1>
                                    <div className="place-details">
                                        <PlaceCarousel />
                                    </div>
                                </div>

                                <div className="one-place">
                                    <h1 className="text-2x">Place 01</h1>
                                    <div className="place-details">
                                        <PlaceCarousel />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right-side">

                            <div className="game-achievement">
                                <h1 className="text-2xl">Game Achievement</h1>
                                <img src={gameAchievement} alt="" />
                            </div>

                            <div className="guest-users">
                                <h1 className="text-2xl">Tech Support Request</h1>

                                <div className="one-guest-user">
                                    <div className="default-profile-img">
                                        <img src="https://avatars.githubusercontent.com/u/73744585?v=4" alt="" />
                                    </div>
                                    <div className="suggest-info">
                                        <h3>Temperature :<span> 30°C</span></h3>
                                        <h3>Light Intensity :<span> 30%</span></h3>
                                        <h3>Room Status :<span> Occupied</span></h3>
                                    </div>
                                    <div className="accept-reject">
                                        <button className="accept"><VscCheck /></button>
                                        <button className="reject"><VscChromeClose /></button>
                                    </div>
                                </div>
                            </div>


                            <div className="guest-users">
                                <h1 className="text-2xl">Guest Users Suggest</h1>
                                <GuestUsersSuggest />
                                <GuestUsersSuggest />
                                <GuestUsersSuggest />
                                <GuestUsersSuggest />
                            </div>
                        </div>
                    </div>

                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Dashboard