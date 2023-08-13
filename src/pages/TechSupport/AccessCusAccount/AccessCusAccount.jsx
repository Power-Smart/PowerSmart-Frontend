import './accessCusAccount.css'
import AccessCusTable from './AccessCusTable';
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/smallComps/TopBar';
import PageContent from '../../../components/Wrappers/PageContent';



const AccessCusAccount = () => {
    return (
        <PageWrapper>
            <Sidebar />
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