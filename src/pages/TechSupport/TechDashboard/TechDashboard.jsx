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

const TechDashboard = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar />
                <ContentWrapper>
                    <div className='flex justify-around m-1'>
                        <div className='flex flex-col grow w-4/5 mx-auto'>
                            <div className='flex justify-around items-center'>
                                <DashboardCard title='Order Request' number={12} icon={<TbDeviceSdCard className='text-2xl' />} />
                                <DashboardCard title='Product Request' number={12} icon={<TbDeviceSdCard className='text-2xl' />} />
                                <DashboardCard title='Service Request' number={12} icon={<TbDeviceSdCard className='text-2xl' />} />
                            </div>
                            <div className='flex flex-col my-4'>
                                <h1 className='text-lg font-semibold my-3'>Request Order</h1>
                                <TableOrderRequests />
                            </div>
                            <div className='flex flex-col my-4'>
                                <h1 className='text-lg font-semibold my-3'>Order Status</h1>
                                <TableOrderStatus />
                            </div>
                        </div>
                        <div className='flex flex-col w-32'>
                            <h1 className='text-base text-center font-semibold'>Customer Feedback</h1>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default TechDashboard