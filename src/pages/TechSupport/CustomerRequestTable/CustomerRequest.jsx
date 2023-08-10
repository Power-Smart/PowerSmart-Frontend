import './CustomerRequest.css'
import Table from './Table';
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/smallComps/TopBar';
import PageContent from '../../../components/Wrappers/PageContent';



const CustomerRequest = () => {
    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar title={'Profile'} />
                <ContentWrapper>
                    <Table />
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default CustomerRequest