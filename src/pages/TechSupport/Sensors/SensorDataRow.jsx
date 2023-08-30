import React from 'react'

const SensorDataRow = ({ id, co2_level, hummidity_level, temperature, light_intensity, pir_reading, createdAt }) => {
    return (
        <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 text-center">

            <td className="px-6 py-4">
                {createdAt}
            </td>
            <td className="px-6 py-4">
                {co2_level}
            </td>
            <td className="px-6 py-4">
                {hummidity_level}
            </td>
            <td className="px-6 py-4">
                {temperature}
            </td>
            <td className="px-6 py-4">
                {light_intensity}
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center justify-center">
                    {/* <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> {status} */}
                    {pir_reading && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-green-950 text-green-500">
                        {'true'}
                    </span>}
                    {!pir_reading && <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-red-950 text-red-500">
                        {'false'}
                    </span>}
                </div>
            </td>
        </tr>
    )
}

export default SensorDataRow