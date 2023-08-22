import './SelectPlaceRoom.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import PageContent from '../../../components/Wrappers/PageContent';
import { Link, useParams } from 'react-router-dom';
import TechSupportTopBar from '../TechSupportTopBar/TechSupportTopBar'
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'



const SelectPlaceRoom = () => {

    const { customerID } = useParams();

    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TechSupportTopBar title={'Profile'} />
                <ContentWrapper>
                    <div className="requestInfoBox  mx-auto w-[800px]">
                        <div className="infoHeader">
                            <div className="title">
                                <h3>Select a Place and Room</h3>
                            </div>
                            {/* <div className="closeBtn">
                                <AiOutlineCloseCircle className='h-8 w-8 text-red-500 cursor-pointer' />
                            </div> */}
                        </div>

                        <div className="form">

                            <div className="item-image flex justify-center items-center">
                                <img src="https://microchip.lk/wp-content/uploads/2019/05/37-sensor-in-kit.jpg" alt="ddd" className='w-40 h-40' />
                            </div>

                            <div className="item-name">
                                <h3>Sensor Kit (Small)</h3>
                            </div>

                            <div className="item-price">
                                <h3>Rs. 8000.00</h3>
                            </div>

                            <div className="item-description">
                                <p>Package 1 description</p>
                            </div>

                            <div className="item-quantity">
                                <p>Quantity: 10</p>
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Place Name: </label>
                                <input type="text" />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Room Name: </label>
                                <input type="text" />
                            </div>

                            <h1>Quantity</h1>
                            <div className="select-item-count flex flex-row justify-between items-center w-20">
                                <div className="decrement border border-[#006DFF] rounded-md p-1">
                                    <button className='flex items-center justify-center'><AiOutlineMinus /></button>
                                </div>
                                <div className="count">
                                    <h1>1</h1>
                                </div>
                                <div className="increment border border-[#006DFF] rounded-md p-1">
                                    <button className='flex items-center justify-center'><AiOutlinePlus /></button>
                                </div>
                            </div>


                            <div className="button flex justify-center mt-3">
                                <Link to={`/tech/marketPlace/${customerID}`}>
                                    <button className='px-4 py-1 bg-blue-700 rounded-lg'>Add to plan</button>
                                </Link>
                                <Link to="/tech/marketPlace">
                                    <button className='px-4 py-1 bg-red-700 rounded-lg ml-3'>Cancel</button>
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