import React from 'react'

const KeyValueLabel = ({ name = '', value = '' }) => {
    return (
        <div className="flex space-x-4 text-base lg:text-base md:text-sm rounded-xl flex-col my-2">
            <label className='px-3 py-2 rounded-xl text-blue-400'>{name}</label>
            <label className='px-3 py-1 rounded-xl bg-gray-900 '>{value}</label>
        </div>
    )
}

export default KeyValueLabel