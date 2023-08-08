import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Indicator from '../../../components/smallComps/Indicator'
import StatusCardMd from '../../../components/Cards/StatusCardMd'
import RoomSidebar from '../../../components/Sidebar/Customer/RoomSidebar'

const dataSet = [
    {
        title: 'Temperature',
        value: '25',
        measure: '°C'
    },
    {
        title: 'Humidity',
        value: '50',
        measure: '%'
    },
    {
        title: 'Air Quality',
        value: 'Good',
        other: 'CO2: 400ppm'
    },
];

const CheckStatus = () => {
    return (
        <PageWrapper>
            <RoomSidebar />
            <PageContent>
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Check Status" baclLink='/places/rooms' />
                <ContentWrapper>
                    <div className='m-4 py-4 px-8 rounded-lg bg-[#151528]'>
                        <div className='p-3'>
                            <div className='text-green-400 flex items-center'>
                                <Indicator color='bg-green-400' />
                                <div className='text-sm'>{"Activity   "}</div>
                            </div>
                            <h1 className='text-xl mt-2'>Front Room</h1>
                        </div>
                        <hr className='m-2 border-gray-500' />
                        <div className='px-6 py-4'>
                            <div className='py-4 flex flex-wrap justify-center'>
                                {dataSet.map((data, index) => (<StatusCardMd key={index} {...data} />))}
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default CheckStatus