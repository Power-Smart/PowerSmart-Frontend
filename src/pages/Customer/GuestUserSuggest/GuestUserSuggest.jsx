import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import { useSelector, useDispatch } from 'react-redux'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import TableGuestUserSuggest from './TableGuestUserSuggest/TableOrderStatus'
import TableGuestUser from './TableGuestUsers/TableOrderStatus'


const GuestUserSuggest = () => {

    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <ContentWrapper>
                    <div className='flex flex-col grow'>
                        <div className='flex flex-col '>
                            <h1 className='text-lg font-semibold mb-2'>Guest User Requests</h1>
                            <TableGuestUserSuggest />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <h1 className='text-lg font-semibold mb-2'>Guest Users</h1>
                            <TableGuestUser />
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default GuestUserSuggest