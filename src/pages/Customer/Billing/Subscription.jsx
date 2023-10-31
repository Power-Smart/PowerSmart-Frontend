import React, { useEffect } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import PageContent from '../../../components/Wrappers/PageContent'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import TopBar from '../../../components/smallComps/TopBar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomer } from '../../../redux/slices/customerSlice'
import { subValidation } from '../../../utils/validators'
import SubscribeButton from '../../../components/smallComps/SubscribeButton'

const Subscription = () => {
    const user = useSelector((state) => state.user.user);
    const customer = useSelector((state) => state.customer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            dispatch(fetchCustomer(user.id));
        }
    }, []);
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar title="Subscription" baclLink='/' />
                <ContentWrapper>
                    <div className='flex flex-wrap px-8 py-2 justify-center'>
                        {!subValidation(customer.year_subscription) ?
                            <SubscribeButton userID={user.id} total={(10000).toFixed(2)} /> :
                            <div className='text-white'>You Already Subscribed !</div>}
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Subscription