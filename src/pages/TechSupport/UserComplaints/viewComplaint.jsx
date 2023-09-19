import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';
import TopBar from '../../../components/smallComps/TopBar';
import PageContent from '../../../components/Wrappers/PageContent';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import './viewComplaint.css'
import { selectComplaints, getAllComplaints } from "../../../redux/slices/techsupport/complaintHandlingSlice";



const viewComplaint = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    let techSupportId = user.id;
    const userComplaints = useSelector(selectComplaints);

    console.log(userComplaints);

    useEffect(() => {
        dispatch(getAllComplaints(techSupportId));
    }, [dispatch]);


    return (
        <PageWrapper >
            <MainSidebar />
            <PageContent>
                <TopBar title={'Profile'} />
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
                                <input type="text" value={10} disabled />

                                <div className="data__field">
                                    <label htmlFor="">Order Description: </label>
                                    <textarea disabled value={"description"}></textarea>
                                </div>

                                <div className="flex justify-center mt-10">
                                    <button className='px-4 py-1 bg-red-700 rounded-lg mr-5' onClick={(e) => rejectOrderRequest()} >Reject</button>

                                    <Link to={`/tech/marketPlace/`}>
                                        <button className='px-4 py-1 bg-blue-700 rounded-lg'>Accept</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper >
    )
}

export default viewComplaint