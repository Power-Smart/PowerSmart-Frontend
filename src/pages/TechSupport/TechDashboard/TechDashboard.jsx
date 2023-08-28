import React from 'react'
import { TbDeviceSdCard } from 'react-icons/tb'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import DashboardCard from './DashboardCard'
import TableOrderRequests from './TableOrderRequests/TableOrderRequests'
import TableOrderStatus from './TableOrderStatus/TableOrderStatus'
import FeedbackSection from './FeedbackSection'



import Calendar from '../../../components/taskCalendar/Calendar'
import Header from '../../../components/taskCalendar/Header'
import TaskForm from '../../../components/taskCalendar/TaskForm'
import CalendarState from '../../../components/context/CalendarContext'


const TechDashboard = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                {/* <TopBar /> */}
                <ContentWrapper>
                    <div className="container">
                        <CalendarState>
                            <Header />
                            <Calendar />
                            <TaskForm />
                        </CalendarState>
                        <a href="https://github.com/sergiss/task-calendar" target="_blank"><i className="fa">&#xf09b;</i> Source Code </a>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default TechDashboard