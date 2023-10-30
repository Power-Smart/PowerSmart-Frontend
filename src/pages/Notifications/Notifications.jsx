import React from 'react'
import PageWrapper from '../../components/Wrappers/PageWrapper'
import MainSidebar from '../../components/Sidebar/Customer/MainSidebar'
import PageContent from '../../components/Wrappers/PageContent'
import TopBar from '../../components/smallComps/TopBar'
import ContentWrapper from '../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../components/Wrappers/ButtonBar'
import { Link } from 'react-router-dom'
import { ImCross } from 'react-icons/im'
import Thread from '../../components/Notifications/Thread'

const Notifications = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent >
                <TopBar title="Notifications" baclLink='/' />
                <ContentWrapper>
                    <ButtonBar>
                    </ButtonBar>
                    <div className='flex flex-wrap px-8 py-2 justify-center'>
                        <div className='flex flex-col'>
                            <Thread topic='Hello' description='hello hello hello workld' />
                            <Thread topic='Hello' description='hello hello hello workld' />
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Notifications