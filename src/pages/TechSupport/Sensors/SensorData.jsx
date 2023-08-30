import React from 'react'
import SensorDataRow from './SensorDataRow';
import { IoSearchCircle } from 'react-icons/io5'


const dataset = [
    {
        id: 1,
        co2_level: 200,
        hummidity_level: 50,
        temperature: 30,
        light_intensity: 2,
        pir_reading: 'true',
        createdAt: '2021-08-01 12:00:00'
    }
];


const SensorData = () => {
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-12 px-8">

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
                    {dataset.map((data) => <SensorDataRow {...data} />)}
                </tbody>
            </table>
        </div>

    )
}

export default SensorData