import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'


const Chat = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Profile" baclLink='/' />
                <ContentWrapper>
                    

                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Chat