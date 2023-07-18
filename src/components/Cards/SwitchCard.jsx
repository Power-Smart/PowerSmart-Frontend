import React from 'react'
import { FaFan } from "react-icons/fa";
import { Switch } from 'antd';

const SwitchCard = ({ icon, device, lastSeen, power }) => {
    return (
        <div className='drop-shadow text-sm flex flex-col justify-between w-[230px] h-[150px] bg-[#0E0E1A] rounded-xl shadow-md px-6 py-6 m-5'>
            <div className='flex justify-between flex-grow'>
                <FaFan className='text-2xl' />
                <Switch className='toggle-switch' checkedChildren="on" unCheckedChildren="Off" defaultChecked />
            </div>

            <div className='flex flex-grow justify-between items-end'>
                <div className='flex flex-col'>
                    <h2 className='text-lg'>Fan left</h2>
                    <h3 className='text-xs'>Last Working 3h</h3>
                </div>
                <div className='flex flex-col text-[#83BCFF] justify-end items-end'>
                    <h2>-</h2>
                    <h3 className=''>15Kwh</h3>
                </div>
            </div>
        </div>
    )
}

export default SwitchCard