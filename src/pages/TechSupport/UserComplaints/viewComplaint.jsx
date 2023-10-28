import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';
import TopBar from '../../../components/smallComps/TopBar';
import PageContent from '../../../components/Wrappers/PageContent';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './viewComplaint.css'
import { selectComplaints, getAllComplaints, accpetOrRejectComplaint } from "../../../redux/slices/techsupport/complaintHandlingSlice";
import { fetchCustomer, selectCustomer } from '../../../redux/slices/customerSlice';
import { useNavigate } from 'react-router-dom';
import { accpetOrRejectComplaintApi } from '../../../api/apiComplaintHandling'; 



const viewComplaint = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    let techSupportId = user.id;
    const userComplaints = useSelector(selectComplaints);
    const { complaintID, customerID } = useParams();

    const customer = useSelector(selectCustomer);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllComplaints(techSupportId));
        dispatch(fetchCustomer(customerID));
    }, [dispatch,customerID]);


    const particularComplaint = userComplaints.find((complaint) => complaint.complaint_id == complaintID);


    const [comment, setComment] = useState(particularComplaint.comment);

    const acceptComplaint = () => {
        accpetOrRejectComplaintApi({ complaint_id: complaintID, status: 'true', comment: comment });
        navigate('/tech/userComplaints');
    }

    const rejectComplaint = () => {
        accpetOrRejectComplaintApi({ complaint_id: complaintID, status: 'false', comment: comment });
        navigate('/tech/userComplaints');
    }


    return (
        <PageWrapper >
            <MainSidebar />
            <PageContent>
                {/* <TopBar title={'Profile'} /> */}
                <ContentWrapper>
                    <div className="requestInfoBox w-full mx-auto">
                        <div className="infoHeader">
                            <div className="title">
                                <h3>Customer Complaint Info</h3>
                            </div>
                        </div>
                        <div className="form">
                            <div className="data__field">
                                <label htmlFor="">Customer ID: </label>
                                <input type="text" value={customerID} disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Customer Name: </label>
                                <input type="text" value={customer.first_name + " " + customer.last_name} disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Date: </label>
                                <input type="text" value={particularComplaint.date.substring(0, 10)} disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Complaint Description: </label>
                                <textarea value={particularComplaint.description} disabled />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Comment: </label>
                                <textarea placeholder='Enter your comment here' value={comment} onChange={(e) => setComment(e.target.value)} />
                            </div>

                            <div className="flex justify-center mt-10">

                                <Link to={`/tech/chat`}>
                                    <button className='px-4 py-1 bg-green-700 rounded-lg mr-5'>Chat</button>
                                </Link>

                                <button className='px-4 py-1 bg-red-700 rounded-lg mr-5' onClick={(e) => rejectComplaint()} >Reject</button>
                                <button className='px-4 py-1 bg-blue-700 rounded-lg' onClick={(e) => acceptComplaint()} >Accept</button>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper >
    )
}

export default viewComplaint