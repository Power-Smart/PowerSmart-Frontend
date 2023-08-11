import './SelectPlaceRoom.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/smallComps/TopBar';
import PageContent from '../../../components/Wrappers/PageContent';



const SelectPlaceRoom = () => {
    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar title={'Profile'} />
                <ContentWrapper>
                    <div className="requestInfoBox my-auto mx-auto min-w-max">
                        <div className="infoHeader">
                            <div className="title">
                                <h3>Select a Place and Room</h3>
                            </div>
                            <div className="closeBtn">
                                <AiOutlineCloseCircle className='h-8 w-8 text-red-500 cursor-pointer' />
                            </div>
                        </div>

                        <div className="form">
                            <div className="data__field">
                                <label htmlFor="">Select Place: </label>
                                <select name="" id="">
                                    <option value="">Home</option>
                                </select>
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Select Room: </label>
                                <select name="" id="">
                                    <option value="">Room 1</option>
                                </select>
                            </div>


                            <div className="button flex justify-center mt-3">
                                <button className='px-4 py-1 bg-blue-700 rounded-lg'>Add to plan</button>
                            </div>

                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default SelectPlaceRoom