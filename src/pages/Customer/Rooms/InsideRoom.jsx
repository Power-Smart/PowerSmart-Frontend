import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Indicator from '../../../components/smallComps/Indicator'
import SwitchCard from '../../../components/Cards/SwitchCard'
import RoomSidebar from '../../../components/Sidebar/Customer/RoomSidebar'

const dataSet = [
    {
        type: 'FAN',
        device: 'Fan 1',
        lastSeen: '2hrs',
        power: '25',
        status: 'on'
    },
    {
        type: 'BULB',
        device: 'Bulb 1',
        lastSeen: '2hrs',
        power: '15',
        status: 'off'
    },
    {
        type: 'AC',
        device: 'AC 1',
        lastSeen: '2hrs',
        power: '25',
        status: 'on'
    },
];

const InsideRoom = () => {
    return (
        <PageWrapper >
            <RoomSidebar />
            <PageContent >
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Inside Room" baclLink='/places/rooms' />
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
                        <div className='px-6 py-4 '>
                            <h3>My Devices</h3>
                            <div className='py-4 flex flex-wrap'>
                                {dataSet.map((data, index) => (<SwitchCard key={index} {...data} />))}
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default InsideRoom