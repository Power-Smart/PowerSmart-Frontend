import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import SelectedItem from './SelectedItem'
import { Link , useNavigate} from 'react-router-dom'
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';
import { useSelector } from 'react-redux'
import { selectCustomerCart } from '../../../redux/slices/techsupport/customerCartSlice'
import { sendCustomerPaymentSummaryApi } from '../../../api/apiMarketPlace'
import { useParams } from 'react-router-dom'

const PaymentSummary = () => {

    const customerCartItems = useSelector(selectCustomerCart);
    const totalSelectedItems = customerCartItems.length;
    const user = useSelector(state => state.user.user);
    let techSupportId = user.id;
    let totalItemPrice = 0;
    const { customerID } = useParams();

    customerCartItems.map((data) => {
        return totalItemPrice = totalItemPrice + data.price;
    })

    const navigate = useNavigate();
    const backMarketplace = () => {
        navigate(-1)
    }

    const sentToCustomer = () => {
        sendCustomerPaymentSummaryApi({...customerCartItems, customerID: customerID, techSupportId: techSupportId})
    }


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                {/* <TopBar title={'Add Relay'} /> */}
                <ContentWrapper>
                    <div className="mb-8 border-b-[1px] border-[#707070] mt-5">
                        <p className="text-xl font-bold pb-2">Selected {totalSelectedItems} Items</p>
                    </div>

                    <div className="selected-items h-[400px] overflow-y-scroll">
                        {
                            customerCartItems.map((data) => {
                                return <SelectedItem itemID={data.item_id} itemName={data.name} itemPrice={data.price} place={data.place_name} room={data.room_name} count={data.quantity} itemDevicePic={"https://www.plusquip.com.au/wp-content/uploads/2013/07/REL-000-relay-replacement-kit.jpg"} />
                            })
                        }

                    </div>

                    <div className="do-payment rounded-md bg-[#3F3F46] p-4 w-full text-center mt-5">
                        <div className="flex justify-end items-center">
                            <p className="text-xl font-bold mr-4">Total</p>
                            <p className="text-xl font-bold pr-3">Rs. {totalItemPrice}</p>
                        </div>
                        <div className="button-section flex justify-end align-middle mt-4">
                            <button className='mx-2 px-4 py-2 bg-[#CE4444] rounded-md text-black w-fit font-bold' onClick={(e) => backMarketplace()}>Cancel</button>

                            {/* <Link to="/tech/accessCusAccount"> */}
                                <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black w-fit font-bold' onClick={(e) => sentToCustomer()}>Sent to customer</button>
                            {/* </Link> */}
                        </div>
                    </div>

                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default PaymentSummary