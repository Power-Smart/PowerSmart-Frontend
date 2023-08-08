import Table from './Table';
import './ComplaintView.css'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'

const ComplaintView = () => {
    return (
<PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Complaints" />
                <ContentWrapper>
                     <Table />
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default ComplaintView