import './accessCusAccount.css'
import AccessCusTable from './AccessCusTable';
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import TopBar from '../../../components/smallComps/TopBar';
import PageContent from '../../../components/Wrappers/PageContent';
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';



const AccessCusAccount = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar title={'Profile'} />
                <ContentWrapper>
                    <AccessCusTable />
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default AccessCusAccount