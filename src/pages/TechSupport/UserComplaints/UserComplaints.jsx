import React, { useEffect } from "react";
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import UserInquiriesRow from "./UserInquiriesRow";
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';
import { useDispatch, useSelector } from "react-redux";
import { selectComplaints, getAllComplaints } from "../../../redux/slices/techsupport/complaintHandlingSlice";


const UserComplaints = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    let techSupportId = user.id;
    const userComplaints = useSelector(selectComplaints);

    console.log(userComplaints);

    useEffect(() => {
        dispatch(getAllComplaints(techSupportId));
    }, [dispatch]);


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar title={'User Inquiries'} />
                <ContentWrapper>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-12 px-8">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Complaint ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Complaint
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        User ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {userComplaints.map((data) => <UserInquiriesRow {...data} key={data.userID} />)}
                            </tbody>
                        </table>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default UserComplaints