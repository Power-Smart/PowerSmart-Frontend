import React from 'react'
import { Link } from "react-router-dom";
import KeyValueLabel from '../../../components/Forms/KeyValueLabel';
import SensorData from './SensorData';

const RelayCard = ({ id, name, type, image }) => {
    return (
        <div className="text-sm flex flex-col border-solid border border-secondaryBlue w-[90%] h-auto bg-[#1C1C2E] rounded-3xl shadow-md px-2 pb-5 my-5 m-auto justify-evenly">
            <div className='flex flex-col m-4'>
                <KeyValueLabel name='Sensor No' value={id} />
                <KeyValueLabel name='Name' value={name} />
                <KeyValueLabel name='Type' value={type} />
                <KeyValueLabel name='Status' value={"Active"} />
            </div>
            <div className='text-sm flex mx-10 my-2 flex-col'>
                <details className='mx-0 my-2'>
                    <summary className='pb-2 text-[#83BCFF]'>Recent Sensor Logs</summary>
                    <SensorData />
                </details>
            </div>
            <div className="flex justify-end items-end">
                <Link to='/tech/selectPlaceRoom'>
                    <button className="px-4 py-1 m-2 w-20 text-sm bg-primaryBtn rounded-xl text-black bg-[#83BCFF]">
                        Edit
                    </button>
                </Link>
                <button className="px-4 py-1 m-2 w-20 text-sm bg-secondaryBtn rounded-xl text-black bg-[#FF8383]">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default RelayCard