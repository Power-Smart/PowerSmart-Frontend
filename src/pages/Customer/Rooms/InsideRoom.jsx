import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import Sidebar from '../../../components/Sidebar/Sidebar'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import Indicator from '../../../components/smallComps/Indicator'
import { FaFan } from "react-icons/fa";
import SwitchCard from '../../../components/Cards/SwitchCard'

const InsideRoom = () => {
    return (
        <PageWrapper >
            <Sidebar />
            <PageContent >
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Inside Room" />
                <ContentWrapper>
                    <div className='m-4 py-4 px-8 border-[#0693F3] border-2 rounded-lg bg-[#151528]'>
                        <div className='p-3'>
                            <div className='text-green-400 flex items-center'>
                                <Indicator color="bg-green-400" />
                                <div className='text-sm'>{"Activity   "}</div>
                            </div>
                            <h1 className='text-xl mt-2'>Front Room</h1>
                        </div>
                        <hr className='m-2 border-gray-500' />
                        <div className='px-6 py-4'>
                            <h3>My Devices</h3>
                            <div className='py-4 flex flex-wrap'>
                                {/* Card */}
                                <SwitchCard />
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default InsideRoom