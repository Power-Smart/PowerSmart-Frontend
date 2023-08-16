import './SelectPlaceRoom.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import PageContent from '../../../components/Wrappers/PageContent';
import { Link } from 'react-router-dom';
import TechSupportTopBar from '../TechSupportTopBar/TechSupportTopBar'
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';



const SelectPlaceRoom = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TechSupportTopBar title={'Profile'} />
                <ContentWrapper>
                    <div className="requestInfoBox mt-20 mx-auto w-[500px]">
                        <div className="infoHeader">
                            <div className="title">
                                <h3>Select a Place and Room</h3>
                            </div>
                            {/* <div className="closeBtn">
                                <AiOutlineCloseCircle className='h-8 w-8 text-red-500 cursor-pointer' />
                            </div> */}
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
                                <Link to="/tech/marketPlace">
                                    <button className='px-4 py-1 bg-blue-700 rounded-lg'>Add to plan</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default SelectPlaceRoom