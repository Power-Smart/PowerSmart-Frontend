import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
import "./dashboard.css"
import { dayConvertor, getDeviceType } from '../../../utils/Converters';

const ScheduleDevice = ({ schedule_id, name, status, start_time, end_time, start_day, end_day, place_name, type, switch_status }) => {
    return (
        <div className="one-schedule">
            <div className="place-room-device">
                <h1 className='text-xl '>{name}</h1>

                {/* <h1 className='text-ml'>Room: Kitchen</h1> */}
                <h1 className='text-sm text-gray-400'>{`Place : ${place_name}`}</h1>
                <h1 className='text-sm text-gray-400'>{`Device : ${getDeviceType(type)}`}</h1>
                <h1 className='text-sm text-gray-400'>{`Switch : ${switch_status ? "ON" : "OFF"}`}</h1>

            </div>
            <div className="time-details text-center">
                {status ? <h1 className=' text-xs text-green-500 '>Activated</h1> :
                    <h1 className=' text-xs text-red-500 '>Disabled</h1>}
                <h1 className="text-base ">{dayConvertor(start_day)} {start_time ? start_time.slice(0, 5).replace(':', " : ") : ""}</h1>
                <h1 className='text-gray-500 text-sm'> t o</h1>
                <h1 className="text-base ">{dayConvertor(end_day)} {end_time ? end_time.slice(0, 5).replace(':', " : ") : ""}</h1>
            </div>
        </div>
    )
}

export default ScheduleDevice