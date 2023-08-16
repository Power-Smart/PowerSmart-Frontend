import React from 'react'
import RoomSidebar from '../../../components/Sidebar/TechSupport/RoomSidebar'
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
        size: 3,
        type: 'Room 01',
        window_type: 'Window 01',
    },
    {
        place_id: 2,
        room_id: 2,
        name: 'Room 2',
        is_active: true,
        device_count: 7,
        size: 5,
        type: 'Room 02',
        window_type: 'Window 02',

    },
];



const Rooms = () => {
    return (
        < PageWrapper >
            <RoomSidebar />
            <PageContent >
                <TopBar image="https://avatars.githubusercontent.com/u/7374455?v=4" title="Rooms" baclLink='/' />

                {/* Content Area */}
                <ContentWrapper>

                    <div className='flex flex-wrap px-8 py-2 justify-center'>
                        {/* Cards */}
                        {rooms.map((data, index) => (<RoomCard isCustomer={false} key={index} {...data} />))}
                    </div>

                </ContentWrapper>
            </PageContent>
        </PageWrapper >
    )
}

export default Rooms