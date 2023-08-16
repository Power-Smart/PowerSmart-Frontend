import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import AdmninSidebar from '../../../components/Sidebar/Admin/AdminSidebar'

const AdminDashboard = () => {
    return (
        <PageWrapper>
            <AdmninSidebar />
            <PageContent>
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Dashboard" />
                <ContentWrapper>
                    <ButtonBar>
                    </ButtonBar>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default AdminDashboard