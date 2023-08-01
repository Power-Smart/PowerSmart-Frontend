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
import RoomCarousel from './RoomCarousel'
import ScheduleDevice from './ScheduleDevice'
import { VscCheck, VscChromeClose } from 'react-icons/vsc'


const Dashboard = () => {
    // const navigate = useNavigate();
    // const { isLogged, user } = useSelector(state => state.user);
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
                    <ButtonBar>
                    </ButtonBar>
                    <div className="dashboard-container">
                        <div className="left-side">
                            <DashboardTopHeader />
                            <div className="schedule">
                                <ScheduleDevice />
                                <ScheduleDevice />
                                <ScheduleDevice />
                                <ScheduleDevice />
                                <ScheduleDevice />
                                <ScheduleDevice />
                            </div>

                            <PlaceCarousel />
                            <PlaceCarousel />
                            <PlaceCarousel />
                        </div>

                        <div className="right-side">
                            <h1 className="text-2xl">Guest Users Suggest</h1>
                            <div className="guest-users">

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
                        </div>
                    </div>

                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Dashboard