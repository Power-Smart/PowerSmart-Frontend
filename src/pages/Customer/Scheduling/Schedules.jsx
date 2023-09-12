import React, { useEffect } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import { Link, useParams } from 'react-router-dom'
import RoomSidebar from '../../../components/Sidebar/Customer/RoomSidebar';
import PageContent from '../../../components/Wrappers/PageContent';
import TopBar from '../../../components/smallComps/TopBar';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import ButtonBar from '../../../components/Wrappers/ButtonBar';
import ScheduleCard from '../../../components/Cards/ScheduleCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchedules, selectSchedules } from '../../../redux/slices/scheduleSlice';

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
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const schedules = useSelector(selectSchedules);
    const { placeID, roomID, deviceID } = useParams();

    useEffect(() => {
        if (user.id) {
            dispatch(fetchSchedules({ device_id: deviceID, user_id: user.id }));
        }
    }, [user, dispatch]);

    return (
        <PageWrapper>
            <RoomSidebar placeID={placeID} roomID={roomID} deviceID={deviceID} />
            <PageContent>
                <TopBar title={`Schedules`} baclLink={`/places/${placeID}/rooms/${roomID}/controlpanel`} />
                <ContentWrapper>
                    <ButtonBar>
                        <Link className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black' to={`/places/${placeID}/rooms/${roomID}/controlpanel/${deviceID}/addSchedule`}>Add Schedule</Link>
                    </ButtonBar>
                    <div className='py-4 flex flex-col'>
                        {schedules.length > 0 ?
                            schedules.map((schedule) => (
                                <ScheduleCard key={schedule.schedule_id}
                                    id={schedule.schedule_id}
                                    name={schedule.schedule.name}
                                    time_on={schedule.schedule.start_time}
                                    time_off={schedule.schedule.end_time}
                                    day_on={schedule.schedule.start_day}
                                    day_off={schedule.schedule.end_day}
                                    switch={schedule.switch_status}
                                />
                            )) :
                            "No Schedules to display"
                        }
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Schedules