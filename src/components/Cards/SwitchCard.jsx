import React, { useState } from 'react'
import { Switch } from 'antd';
import DeviceIcon from '../smallComps/DeviceIcon.jsx';
import { apiToggleDevice } from '../../api/apiDevices.js';
import { Link } from 'react-router-dom';

const SwitchCard = ({ id, type, device, validity, schedule = null, status, switch_toggle, setSwitches }) => {
    const [loading, setLoading] = useState((validity === "active_pending"));
    const deviceSwitch = async (state) => {
        setLoading(true);
        let res = await apiToggleDevice(id, state);
        if (res.data === "toggled") {
            setLoading(false);
            setSwitches(prev => {
                const temp = [...prev];
                const index = temp.findIndex(switches => switches.id === id);
                temp[index].status = state;
                return temp;
            });
        } else {
            setLoading(false);
        }
    }

    return (
        <div className='mx-auto drop-shadow text-sm flex flex-col justify-between md:w-[230px] md:h-[150px] w-[200px] h-[150px] bg-[#0E0E1A] md:rounded-xl rounded-md shadow-md px-6 py-6 m-5'>
            <div className='flex justify-between flex-grow flex-wrap'>
                <DeviceIcon type={type} />
                <Switch className='toggle-switch'
                    checkedChildren="on"
                    unCheckedChildren="Off"
                    defaultChecked={switch_toggle.status}
                    checked={switch_toggle.status}
                    loading={loading}
                    onChange={deviceSwitch} />
            </div>

            <div className='flex sm:flex-row sm:flex-grow sm:justify-between sm:items-end flex-col justify-start items-center'>
                <div className='flex flex-col sm:items-start items-center'>
                    <h2 className='text-lg'>{device}</h2>
                    <h3 className=''>ID : {id}</h3>
                </div>
                <div className='flex flex-col text-[#83BCFF] justify-end items-end flex-wrap'>
                    <Link to={`${id}/schedules`} className='px-1 py-1 mb-1 bg-[#83BCFF] rounded-md text-black text-xs'>
                        {"Schedules >"}
                    </Link>
                    <h3 className='text-xs'>{!schedule ? "Not Scheduled" : "Scheduled"}</h3>
                </div>
            </div>
        </div>
    )
}

export default SwitchCard