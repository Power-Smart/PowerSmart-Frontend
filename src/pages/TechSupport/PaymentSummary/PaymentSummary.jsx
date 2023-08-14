import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Sidebar from '../../../components/Sidebar/Sidebar'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import SelectedItem from './SelectedItem'


const PaymentSummary = () => {
    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar title={'Add Relay'} />
                <ContentWrapper>
                    <div className="mb-8 border-b-[1px] border-[#707070]">
                        <p className="text-xl font-bold pb-2">Selected 03 Items</p>
                    </div>
                    <SelectedItem itemName={'Relay 1'} itemPrice={'Rs. 1000.00'} place={'Bedroom'} room={'Room 1'} count={1} />
                    <SelectedItem itemName={'Relay 1'} itemPrice={'Rs. 1000.00'} place={'Bedroom'} room={'Room 1'} count={1} />
                    <SelectedItem itemName={'Relay 1'} itemPrice={'Rs. 1000.00'} place={'Bedroom'} room={'Room 1'} count={1} />


                    <div className="do-payment rounded-md bg-[#3F3F46] p-2">
                        <div className="flex justify-end items-center">
                            <p className="text-xl font-bold mr-4">Total</p>
                            <p className="text-xl font-bold">Rs. 1000.00</p>
                        </div>
                        <div className="button-section w-full text-center m-auto flex justify-end align-middle mt-4">
                            <button className='mx-2 px-4 py-2 bg-[#CE4444] rounded-md text-black w-20 font-bold'>Cancel</button>
                            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black w-20 font-bold'>Pay</button>
                        </div>
                    </div>

                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default PaymentSummary