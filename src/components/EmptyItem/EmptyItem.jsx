import { FaPlus } from 'react-icons/fa'
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/smallComps/TopBar';
import PageContent from '../../../components/Wrappers/PageContent';



const EmptySensor = ({emptItemName="sensor kit"}) => {
    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar title={'Profile'} />
                <ContentWrapper>
                    <div className="mx-auto my-auto w-1/2 h-2/3 flex flex-col justify-center items-center rounded-lg border-2 border-gray-400 font-bold text-center mt-5 bg-[#151528] tracking-wide text-xl shadow-md shadow-cyan-500/40">
                        <div className="cursor-pointer text-center h-3/5 rounded-lg border-2 border-dashed border-gray-400 w-2/4 flex justify-center items-center">
                            <FaPlus className='w-20 h-20' />
                        </div>
                        <div className="mt-5">
                            <h3>No {emptItemName} configured.</h3>
                            <h3>Click to add a {emptItemName}.</h3>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default EmptySensor