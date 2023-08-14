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
                    <SelectedItem itemName={'Relay 1'} itemPrice={'Rs. 1000.00'} place={'Bedroom'} room={'Room 1'} count={1} />
                    <SelectedItem itemName={'Relay 1'} itemPrice={'Rs. 1000.00'} place={'Bedroom'} room={'Room 1'} count={1} />
                    <SelectedItem itemName={'Relay 1'} itemPrice={'Rs. 1000.00'} place={'Bedroom'} room={'Room 1'} count={1} />


                    <div className="do-payment rounded-md bg-[#3F3F46] p-2 w-full text-center">
                        <div className="flex justify-end items-center">
                            <p className="text-xl font-bold mr-4">Total</p>
                            <p className="text-xl font-bold pr-3">Rs. 1000.00</p>
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