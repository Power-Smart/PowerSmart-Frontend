import React, { useEffect } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Title from 'antd/es/typography/Title'
import ItemCard from '../../../components/Cards/ItemCard'
import TechSupportTopBar from '../TechSupportTopBar/TechSupportTopBar'
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarketPlaceItems, selectMarketPlaceStatus, selectMarketPlaceItems } from '../../../redux/slices/techsupport/marketPlaceSlice'
import LoadingSpinner from '../../../components/smallComps/LoadingSpinner'
import { selectCustomerCart,selectCustomerCartStatus } from '../../../redux/slices/techsupport/customerCartSlice'



const TechMarketPlace = () => {

    const { customerID } = useParams();
    const dispatch = useDispatch();
    const marketPlaceItem = useSelector(selectMarketPlaceItems);
    const marketPlaceStatus = useSelector(selectMarketPlaceStatus);
    const customerCartItems = useSelector(selectCustomerCart);
    let totalPrice = 0;
    let itemsNumbers = 0;


    useEffect(() => {
        dispatch(fetchMarketPlaceItems());
    }, [dispatch]);

    if (customerCartItems.length > 0) {
        customerCartItems.map((data) => {
            totalPrice += data.price * data.quantity;
            itemsNumbers += data.quantity;
        })
    }


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TechSupportTopBar title={'Market Place'} customerID={customerID} totalPrice={totalPrice} itemsNumbers={itemsNumbers}/>
                <ContentWrapper>
                    <div className='flex flex-col justify-center text-left '>
                        <h1 className='text-2xl font-bold'>Built in packages</h1>
                        <div className='grid grid-cols-4'>
                            {(marketPlaceStatus === 'loading' || marketPlaceStatus === 'idle') && <LoadingSpinner />}
                            {(marketPlaceStatus === 'succeeded' && marketPlaceItem.length === 0) && <h1>No Items</h1>}
                            {(marketPlaceStatus === 'succeeded') && marketPlaceItem.map((data, index) => {
                                if (data.is_build_in_package) {
                                    return <ItemCard key={index} {...data} addDel={false} />
                                }
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center my-8'>
                        <h1 className='text-2xl font-bold'>Sensors and Relays</h1>
                        {(marketPlaceStatus === 'loading' || marketPlaceStatus === 'idle') && <LoadingSpinner />}
                            {(marketPlaceStatus === 'succeeded' && marketPlaceItem.length === 0) && <h1>No Items</h1>}
                            {(marketPlaceStatus === 'succeeded') && marketPlaceItem.map((data, index) => {
                                if (!data.is_build_in_package) {
                                    return <ItemCard key={index} {...data} addDel={false} />
                                }
                            })}
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default TechMarketPlace