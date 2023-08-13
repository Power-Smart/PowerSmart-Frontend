import React from 'react'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import PlaceCardTech from '../../../components/Cards/PlaceCardTech'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import RoomCard from '../../../components/Cards/RoomCard'

const rooms = [
    {
        place_id: 1,
        room_id: 1,
        name: 'Room 1',
        is_active: true,
        device_count: 3,

    },
    {
        place_id: 2,
        room_id: 2,
        name: 'Room 2',
        is_active: true,
        device_count: 7,
    },
];



const Rooms = () => {
    return (
        < PageWrapper >
            <MainSidebar />
            <PageContent >
                <TopBar image="https://avatars.githubusercontent.com/u/7374455?v=4" title="Rooms" baclLink='/' />

                {/* Content Area */}
                <ContentWrapper>

                    <div className='flex flex-wrap px-8 py-2 justify-center'>
                        {/* Cards */}
                        {rooms.map((data, index) => (<RoomCard key={index} {...data} />))}
                    </div>

                </ContentWrapper>
            </PageContent>
        </PageWrapper >
    )
}

export default Rooms