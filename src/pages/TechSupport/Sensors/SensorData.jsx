import React, { useEffect, useState } from 'react'
import SensorDataRow from './SensorDataRow';
import { getSensorLogs } from '../../../api/apiTechAssigns';
import { AiOutlineSync } from "react-icons/ai";

const SensorData = ({ placeId, roomID, sensor_unit_id }) => {
    const [sensorUnitData, setSensorUnitData] = useState([]);
    const [rows, setRows] = useState(5);

    const getSensorUnitData = async (rows = 5) => {
        const data = await getSensorLogs(sensor_unit_id, rows);
        console.log(data.data);
        setSensorUnitData(data.data);
    }

    useEffect(() => {
        if (sensorUnitData.length <= 0)
            getSensorUnitData();
    }, []);

    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-5 px-8">
            <div className='right-2 top-2 flex justify-between'>
                <div className='flex items-center'>
                    No of rows :
                    <select className='bg-slate-800 p-1 mx-3' onChange={(e) => { getSensorUnitData(+e.target.value); setRows(+e.target.value) }}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                    </select>
                </div>
                <button className='text-slate-50 text-xs py-2 px-2 rounded-lg flex items-center' onClick={(e) => getSensorUnitData(rows)}>
                    <AiOutlineSync className='mx-1' /> Refresh
                </button>
            </div>
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase ">
                    <tr className='text-center'>
                        <th scope="col" className="px-6 py-3">
                            timestamp
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Co2
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Humidity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Temp
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Light
                        </th>
                        <th scope="col" className="px-6 py-3">
                            PIR reading
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {sensorUnitData.map((row) => <SensorDataRow {...row} />)}
                </tbody>
            </table>
        </div>

    )
}

export default SensorData