import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineCheck } from 'react-icons/ai'
import { updateNotificationStatusApi } from '../../api/apiChat';

const Thread = ({ title, description, time, status, setNotifications, id }) => {

    const date = new Date(time);
    const dateComponent = date.toISOString().slice(0, 10);
    const timeComponent = date.toISOString().slice(11, 16);
    const [readStatus, setReadStatus] = useState(status);

    const readNotification = async () => {
        try {
            await updateNotificationStatusApi(id, "R");
            setReadStatus("R");
        } catch (error) {
            console.log(error);
        }
    }

    const deleteNotification = async () => {
        try {
            await updateNotificationStatusApi(id, "D");
            setNotifications((prev) => prev.filter((item) => item.notification_id != id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex p-2 m-2 bg-slate-900 rounded-md w-full justify-between'>
            {/* <div className='p-3 w-20 flex items-center'>1. </div> */}
            <div className='p-3 flex-1'>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='font-bold'>{title}</h1>
                    <h1 className='text-xs font-mono text-white/50'>{`${dateComponent} | ${timeComponent}`}</h1>
                </div>
                <hr className=' border-white/10 mb-1 ' />
                <div className='text-sm'> {description}
                </div>
            </div>
            <div className='p-3 w-24 flex flex-row items-center justify-center text-xl'>
                <div className='flex mx-1 p-1 rounded-md text-red-500 bg-red-400/10 flex-grow items-center justify-center' onClick={deleteNotification}>
                    <RxCross1 className='cursor-pointer' />
                </div>
                {readStatus == "U" && <div className='flex mx-1 p-1 rounded-md text-green-500 bg-green-400/10 flex-grow items-center justify-center' onClick={readNotification}>
                    <AiOutlineCheck className='cursor-pointer' />
                </div>}
            </div>
        </div>
    )
}

export default Thread