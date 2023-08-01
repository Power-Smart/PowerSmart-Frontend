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
                    <ButtonBar>
                    </ButtonBar>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Dashboard