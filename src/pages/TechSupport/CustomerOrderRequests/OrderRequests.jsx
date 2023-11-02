import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar'
import PageContent from '../../../components/Wrappers/PageContent'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import TopBar from '../../../components/smallComps/TopBar'
import TableOrderRequests from '../TechDashboard/TableOrderRequests/TableOrderRequests'

const OrderRequests = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar title={'Order Requests'} baclLink='/tech' />
                <ContentWrapper>
                    <TableOrderRequests />
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default OrderRequests