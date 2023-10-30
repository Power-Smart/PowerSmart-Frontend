import React from 'react'
import Indicator from '../smallComps/Indicator'
import { Link } from 'react-router-dom'
import { TbHomeEdit } from 'react-icons/tb'
import { Button, QRCode } from 'antd';
import { FaDownload } from 'react-icons/fa';
import {FiDownload} from 'react-icons/fi'

const RoomCard = ({ is_active, name, size, type, window_type, place_id, room_id, device_count = 0, isCustomer = true, isTechSupport = false, customerID = undefined, user_id }) => {

    const downloadQRCode = () => {
        const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
        if (canvas) {
            const url = canvas.toDataURL();
            const a = document.createElement('a');
            a.download = 'QRCode.png';
            a.href = url;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    return (
        <div className='text-sm flex flex-col w-[230px] h-[290px] bg-[#1C1C2E] rounded-md shadow-md px-8 py-6 m-5 justify-evenly'>

            {/* <div className="edit flex justify-end mb-3">
                <Link to={`/places/${place_id}/rooms/${room_id}/update`}>
                    <button className='text-ml text-white bg-[#1f446e] px-2 py-1 rounded-md'><TbHomeEdit className='inline mb-1 mr-1 text-8ml' />Edit</button>
                </Link>
            </div> */}

            <div className='flex flex-row space-x-16 mb-3'>
                <div className="set">
                    <div className={'text-xs flex justify-start items-center ' + (is_active ? "text-green-300" : "text-red-300")}>
                        {is_active && <Indicator color="bg-green-400" status={"Online"} />}
                        {!is_active && <Indicator color="bg-red-400" status={"Offline"} />}
                    </div>
                    <label>{name}</label>
                </div>
                <div id="myqrcode" className='text-center'>
                    <QRCode
                        value={`http://localhost:5173/guest/auth/${user_id}/${place_id}/${room_id}`}
                        bgColor="#fff"
                        style={{
                            marginBottom: 7,
                        }}
                        size={70}
                        bordered={false}
                    />
                    <Link to={`http://localhost:5173/guest/auth/${user_id}/${place_id}/${room_id}`} target="_blank">
                        <Button type="primary" className='px-2 py-1 bg-[#83BCFF] rounded-md text-black font-semibold' onClick={downloadQRCode}>
                            <FaDownload className='inline-block mb-1 mr-1' />QR
                        </Button>
                    </Link>
                </div>
            </div>

            <hr className='border-gray-600' />

            <div className='flex flex-col flex-grow justify-center items-center mt-2'>
                <div className='text-[#83BCFF] my-1'>{device_count} Devices Working</div>
                <div className='text-sm'>Room size : {size}</div>
                <div className='text-sm'>Room type : {type}</div>
                <div className='text-sm'>Window type : {window_type}</div>
            </div>

            {
                isCustomer ? <Link to={`/places/${place_id}/rooms/${room_id}/controlpanel`}>
                    <div className='flex flex-col flex-grow justify-end items-center mt-3'>
                        <button className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black'>Go inside</button>
                    </div>
                </Link> : <></>
            }
            {
                isTechSupport ? <Link to={`/tech/${customerID}/place/${place_id}/room/${room_id}/devices`}>
                    <div className='flex flex-col flex-grow justify-end items-center mt-3'>
                        <button className='px-4 py-1 text-sm bg-[#83BCFF] rounded-md text-black'>Go inside</button>
                    </div>
                </Link> : <></>
            }

        </div>
    )
}

export default RoomCard