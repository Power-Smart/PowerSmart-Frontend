import { GiCycle } from 'react-icons/gi';
import { MdLooksOne } from 'react-icons/md';
import { Switch } from 'antd';
import { dayConvertor } from '../../utils/Converters';

const ScheduleCard = ({ id, name, time_on, time_off, day_on, day_off, repeat = true }) => {
    return (
        <div className="flex p-4 mx-5 my-2 bg-[#151528] w-full rounded-md">
            <div className="flex-[1] text-center flex items-center">
                <h1 className="text-2xl mx-3">{name}</h1>
            </div>
            <div className='flex-[3] flex justify-center items-center'>
                <div className="flex-[1] text-left flex flex-col justify-center items-center">
                    <h3 className='text-xs mb-1'>Switch ON</h3>
                    <h1 className="text-3xl mb-2">{time_on}</h1>
                    <h3 className='text-2ml'>{(repeat ? "Every" : "Nearby") + " " + dayConvertor(day_on)}</h3>
                </div>
                <div className="flex-[1] text-left flex flex-col justify-center items-center">
                    <h3 className='text-xs mb-1'>Switch OFF</h3>
                    <h1 className="text-3xl mb-2">{time_off}</h1>
                    <h3 className='text-2ml'>{(repeat ? "Every" : "Nearby") + " " + dayConvertor(day_off)}</h3>
                </div>
            </div>
            <div className='flex-[1] flex justify-between items-center'>
                <div className="flex-1 flex justify-center items-center">
                    {repeat && <GiCycle className="text-3xl" />}
                    {!repeat && <MdLooksOne className="text-3xl" />}
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-end">
                <button className='w-20 py-1 m-1 text-sm bg-[#83BCFF] rounded-md text-black'>Edit</button>
                <button className='w-20 py-1 m-1 text-sm bg-[#ff8383] rounded-md text-black'>Delete</button>
            </div>
        </div>
    )
}

export default ScheduleCard