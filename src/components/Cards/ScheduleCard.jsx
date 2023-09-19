import { GiCycle } from 'react-icons/gi';
import { MdLooksOne } from 'react-icons/md';
import { Switch } from 'antd';
import { dayConvertor } from '../../utils/Converters';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { updateScheduleStatusApi } from '../../api/apiSchedules';
import { updateScheduleStatus } from '../../redux/slices/scheduleSlice';

const ScheduleCard = ({ id, name, time_on, time_off, day_on, day_off, repeat = true, switch_status, onDelete, status, dispatch }) => {
    const [scheduleStatus, setScheduleStatus] = useState(status);
    const [switchLoading, setSwitchLoading] = useState(false);
    const changeStatus = async (checked) => {
        setSwitchLoading(true);
        const res = await updateScheduleStatusApi(id, checked);
        if (res.status === 200) {
            dispatch(updateScheduleStatus({ id, status: checked }))
            setScheduleStatus(scheduleStatus => !scheduleStatus);
            setSwitchLoading(false);
        }
    }

    return (
        <div className="flex p-4 mx-5 my-2 bg-[#151528] w-full rounded-md">
            <div className="flex-[1] text-center flex items-center">
                <h1 className="text-2xl mx-3">{name}</h1>
            </div>
            <div className="flex-[1] text-center flex items-center justify-center">
                {switch_status && <h1 className="text-xl mx-3 text-green-400 text-center">ON</h1>}
                {!switch_status && <h1 className="text-xl mx-3 text-yellow-400 text-center">OFF</h1>}
            </div>
            <div className='flex-[3] flex justify-center items-center'>
                <div className="flex-[1] text-left flex flex-col justify-center items-center">
                    <h3 className='text-xs mb-1'>Schedule Start</h3>
                    <h1 className="text-3xl mb-2">{time_on}</h1>
                    <h3 className='text-2ml'>{(repeat ? "Every" : "Nearby") + " " + dayConvertor(day_on)}</h3>
                </div>
                <div className="flex-[1] text-left flex flex-col justify-center items-center">
                    <h3 className='text-xs mb-1'>Schedule End</h3>
                    <h1 className="text-3xl mb-2">{time_off}</h1>
                    <h3 className='text-2ml'>{(repeat ? "Every" : "Nearby") + " " + dayConvertor(day_off)}</h3>
                </div>
            </div>
            <div className='flex-[2] flex justify-between items-center'>
                <div className="flex-1 flex justify-center items-center">
                    {repeat && <GiCycle className="text-3xl" />}
                    {!repeat && <MdLooksOne className="text-3xl" />}
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <Switch
                        checkedChildren="ON"
                        unCheckedChildren="OFF"
                        defaultChecked={status}
                        checked={scheduleStatus}
                        onChange={changeStatus}
                        loading={switchLoading}
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-end">
                <Link className='w-20 py-1 m-1 text-sm bg-[#83BCFF] rounded-md text-center text-black' to={`update/${id}`}>Edit</Link>
                <button className='w-20 py-1 m-1 text-sm bg-[#ff8383] rounded-md text-black' onClick={e => onDelete(e, id, name)}>Delete</button>
            </div>
        </div>
    )
}

export default ScheduleCard