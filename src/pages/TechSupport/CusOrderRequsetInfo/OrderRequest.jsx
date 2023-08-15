import { AiOutlineCloseCircle } from 'react-icons/ai'
import './OrderRequest.css'
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';
import TopBar from '../../../components/smallComps/TopBar';
import PageContent from '../../../components/Wrappers/PageContent';
import { Link } from 'react-router-dom';


const OrderRequest = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar title={'Profile'} />
                <ContentWrapper>
                    <div className="requestInfoBox w-full mx-auto">
                        <div className="infoHeader">
                            <div className="title">
                                <h3>Customer Order Request Information</h3>
                            </div>
                        </div>
                        <div className="form">
                            <div className="data__field">
                                <label htmlFor="">Customer ID: </label>
                                <input type="text" value="#455662" disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Customer: </label>
                                <input type="text" value="Anawarathna  M.A.D.V.S" disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Number of Places: </label>
                                <input type="text" value="03" disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Number of Rooms: </label>
                                <input type="text" value="10" disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Order Description: </label>
                                <textarea disabled value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                            </div>

                            <div className="flex justify-center mt-10">
                                <button className='px-4 py-1 bg-red-700 rounded-lg mr-5'>Reject</button>

                                <Link to="/tech/marketPlace">
                                    <button className='px-4 py-1 bg-blue-700 rounded-lg'>Accept</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper >
    );
};


export default OrderRequest;