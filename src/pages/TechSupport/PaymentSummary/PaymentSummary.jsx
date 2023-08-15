import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import SelectedItem from './SelectedItem'
import { Link } from 'react-router-dom'
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';



const PaymentSummary = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar title={'Add Relay'} />
                <ContentWrapper>
                    <div className="mb-8 border-b-[1px] border-[#707070]">
                        <p className="text-xl font-bold pb-2">Selected 03 Items</p>
                    </div>

                    <div className="selected-items h-[400px] overflow-y-scroll">
                        <SelectedItem itemName={'Relay Kit (Large)'} itemPrice={'Rs. 2500.00'} place={'Home'} room={'Bedroom'} count={1} itemDevicePic={"https://www.plusquip.com.au/wp-content/uploads/2013/07/REL-000-relay-replacement-kit.jpg"} />
                        <SelectedItem itemName={'Sensor Kit (Large)'} itemPrice={'Rs. 5000.00'} place={'Office'} room={'Kitchen'} count={1} itemDevicePic={"https://microchip.lk/wp-content/uploads/2019/05/37-sensor-in-kit.jpg"} />
                    </div>

                    <div className="do-payment rounded-md bg-[#3F3F46] p-4 w-full text-center mt-5">
                        <div className="flex justify-end items-center">
                            <p className="text-xl font-bold mr-4">Total</p>
                            <p className="text-xl font-bold pr-3">Rs. 7500.00</p>
                        </div>
                        <div className="button-section flex justify-end align-middle mt-4">
                            <button className='mx-2 px-4 py-2 bg-[#CE4444] rounded-md text-black w-fit font-bold'>Cancel</button>
                            <Link to="/tech/accessCusAccount">
                                <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black w-fit font-bold'>Sent to customer</button>
                            </Link>
                        </div>
                    </div>

                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default PaymentSummary