import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import { useParams } from 'react-router-dom'
import RoomSidebar from '../../../components/Sidebar/Customer/RoomSidebar';
import PageContent from '../../../components/Wrappers/PageContent';
import TopBar from '../../../components/smallComps/TopBar';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import ButtonBar from '../../../components/Wrappers/ButtonBar';
import ScheduleCard from '../../../components/Cards/ScheduleCard';

const data = [
    {
        id: 1,
        name: "Schedule 1",
        switch_on: "10:00 AM",
        switch_off: "06:00 PM",
        date: "Wednesday",
        repeat: true
    },
    {
        id: 2,
        name: "Schedule 2",
        switch_on: "10:00 AM",
        switch_off: "06:00 PM",
        date: "Everyday",
        repeat: false
    },
    {
        id: 3,
        name: "Schedule 3",
        switch_on: "10:00 AM",
        switch_off: "06:00 PM",
        date: "Sunday",
        repeat: true
    }
];

const Schedules = () => {
    const { placeID, roomID, deviceID } = useParams();

    return (
        <PageWrapper>
            <RoomSidebar placeID={placeID} roomID={roomID} deviceID={deviceID} />
            <PageContent>
                <TopBar title={`Schedules`} baclLink={`/places/${placeID}/rooms/${roomID}/controlpanel`} />
                <ContentWrapper>
                    <ButtonBar>
                        <button className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black'>Add Schedule</button>
                    </ButtonBar>
                    <div className='py-4 flex flex-col'>
                        {
                            data.map((schedule) => (
                                <ScheduleCard key={schedule.id} {...schedule} />
                            ))
                        }
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Schedules