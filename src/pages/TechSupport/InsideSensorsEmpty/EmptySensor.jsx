import { FaPlus } from 'react-icons/fa'
import './EmptySensor.css'
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/smallComps/TopBar';
import PageContent from '../../../components/Wrappers/PageContent';



const EmptySensor = () => {
    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar title={'Profile'} />
                <ContentWrapper>
                    <section className="page__body">
                        <div className="not__available_sensor__kit">
                            <div className="plus__icon cursor-pointer">
                                <FaPlus className='w-12 h-12' />
                            </div>
                            <div className="description">
                                <h3>No sensor kit configured.</h3>
                                <h3>Click to add a sensor kit.</h3>
                            </div>
                        </div>
                    </section>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default EmptySensor