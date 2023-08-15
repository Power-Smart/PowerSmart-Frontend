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


const TechDashboard = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                {/* <TopBar /> */}
                <ContentWrapper>
                    <div className='grid grid-cols-[78%,22%] gap-[40px]'>
                        <div className='flex flex-col grow'>
                            <div className='flex flex-col '>
                                <h1 className='text-lg font-semibold mb-2'>Request Order</h1>
                                <TableOrderRequests />
                            </div>
                            <div className='flex flex-col mt-4'>
                                <h1 className='text-lg font-semibold mb-2'>Order Status</h1>
                                <TableOrderStatus />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex justify-around items-center flex-col'>
                                <DashboardCard title='Order Request' number={12} icon={<TbDeviceSdCard className='text-2xl' />} />
                                <DashboardCard title='Product Request' number={12} icon={<TbDeviceSdCard className='text-2xl' />} />
                                <DashboardCard title='Service Request' number={12} icon={<TbDeviceSdCard className='text-2xl' />} />
                            </div>
                            <h1 className='text-base text-center font-semibold mb-2 mt-7'>Customer Feedback</h1>
                            <FeedbackSection />
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default TechDashboard