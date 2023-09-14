import React, { useEffect, useState } from 'react'
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
import DelConfirm from '../../../components/Popups/DelConfirm';
import { deleteScheduleApi } from '../../../api/apiSchedules';

const Schedules = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const schedules = useSelector(selectSchedules);
    const { placeID, roomID, deviceID } = useParams();
    const [visible, setVisible] = useState(false);
    const [delData, setDelData] = useState({
        id: null,
        name: null,
    });

    const onDelete = (e, id, name) => {
        e.preventDefault();
        setVisible(true);
        setDelData({ id, name });
    }

    const deleteItem = async (e) => {
        e.preventDefault();
        const res = await deleteScheduleApi(user.id, delData.id);
        if (res.status === 200) {
            alert('data deleted');
            dispatch(fetchSchedules({ device_id: deviceID, user_id: user.id }));
        }
        else
            alert('error deleting data');
        setVisible(false);
    }

    useEffect(() => {
        if (user.id) {
            dispatch(fetchSchedules({ device_id: deviceID, user_id: user.id }));
        }
        console.log(schedules);
    }, [user, dispatch]);

    return (
        <PageWrapper>
            <DelConfirm visible={visible} onNo={(e) => setVisible(false)} onYes={e => deleteItem(e)} item={delData.name} />
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
                                    switch_status={schedule.switch_status}
                                    onDelete={onDelete}
                                    setVisible={setVisible}
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