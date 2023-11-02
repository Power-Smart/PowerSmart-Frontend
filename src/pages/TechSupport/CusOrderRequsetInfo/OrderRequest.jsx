import { AiOutlineCloseCircle } from 'react-icons/ai'
import './OrderRequest.css'
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';
import TopBar from '../../../components/smallComps/TopBar';
import PageContent from '../../../components/Wrappers/PageContent';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCustomerOrderRequests, deleteCustomerOrderRequest, selectCustomerOrderRequests, selectCustomerOrderRequestsStatus } from '../../../redux/slices/techsupport/customerOrderRequestSlice';
import { acceptCustomerOrderRequestApi } from '../../../api/apiCustomerOrderRequest';



const OrderRequest = () => {

    const { orderID } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const customerOrderRequests = useSelector(selectCustomerOrderRequests);
    const user = useSelector((state) => state.user.user);


    useEffect(() => {
        dispatch(fetchCustomerOrderRequests());
    }, [dispatch])


    let particularOrder = customerOrderRequests.filter((order) => order.order_id == orderID);

    const rejectOrderRequest = () => {
        dispatch(deleteCustomerOrderRequest(orderID));
    }

    const acceptOrderReq = (e) => {
        e.preventDefault();
        acceptCustomerOrderRequestApi(orderID, user.id, particularOrder[0].customer.user.user_id).then((res) => {
            navigate(`/tech/marketPlace/${orderID}/${particularOrder[0].customer.user.user_id}`);
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                {/* <TopBar title={'Profile'} /> */}
                <ContentWrapper>
                    <div className="requestInfoBox w-full mx-auto mt-6">
                        <div className="infoHeader">
                            <div className="title">
                                <h3>Customer Order Request Information</h3>
                            </div>
                        </div>
                        <div className="form">
                            <div className="data__field">
                                <label htmlFor="">Customer ID: </label>
                                <input type="text" value={particularOrder[0].customer.user.user_id} disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Customer: </label>
                                <input type="text" value={particularOrder[0].customer.user.first_name + " " + particularOrder[0].customer.user.last_name} disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Place: </label>
                                <input type="text" value={particularOrder[0].place_id} disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Number of Rooms: </label>
                                <input type="text" value={particularOrder[0].num_of_rooms} disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Number of Devices: </label>
                                <input type="text" value={particularOrder[0].num_of_devices} disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Order Description: </label>
                                <textarea disabled value={particularOrder[0].order_description} />
                            </div>

                            <div className="flex justify-center mt-10">
                                <button className='px-4 py-1 bg-red-700 rounded-lg mr-5' onClick={(e) => rejectOrderRequest()} >Reject</button>

                                {/* <Link to={`/tech/marketPlace/${orderID}/${particularOrder[0].customer.user.user_id}`}> */}
                                <button onClick={acceptOrderReq} className='px-4 py-1 bg-blue-700 rounded-lg'>Accept</button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper >
    );
};


export default OrderRequest;