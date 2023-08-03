import React from 'react'
import { Switch } from 'antd';
import DeviceIcon from '../smallComps/DeviceIcon.jsx';

const SwitchCard = ({ type, device, lastSeen, power, status }) => {
    return (
        <div className='mx-auto drop-shadow text-sm flex flex-col justify-between md:w-[230px] md:h-[150px] w-[200px] h-[150px] bg-[#0E0E1A] md:rounded-xl rounded-md shadow-md px-6 py-6 m-5'>
            <div className='flex justify-between flex-grow flex-wrap'>
                <DeviceIcon type={type} />
                <Switch className='toggle-switch' checkedChildren="on" unCheckedChildren="Off" defaultChecked={status === "on" ? true : false} />
            </div>

            <div className='flex sm:flex-row sm:flex-grow sm:justify-between sm:items-end flex-col justify-start items-center'>
                <div className='flex flex-col sm:items-start items-center'>
                    <h2 className='text-lg'>{device}</h2>
                    <h3 className='text-xs'>Last Working {lastSeen}</h3>
                </div>
                <div className='flex flex-col text-[#83BCFF] justify-end items-end flex-wrap'>
                    <h2>-</h2>
                    <h3 className=''>{power} Wh</h3>
                </div>
            </div>
        </div>
    )
}

export default SwitchCard