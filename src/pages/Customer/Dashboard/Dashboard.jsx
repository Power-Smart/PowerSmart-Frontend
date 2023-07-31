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
                            <div className="guest-users">
                                <h1 className="text-2xl">Guest Users</h1>

                                <div className="one-guest-user">
                                        
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