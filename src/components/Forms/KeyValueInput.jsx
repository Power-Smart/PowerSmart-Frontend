import React from 'react'

const KeyValueLabel = ({ name = '', value = '' , placeholder=''}) => {
    return (
        <div className="flex space-x-4 text-base lg:text-lg md:text-sm rounded-xl flex-col">
            <label className='px-3 py-1 rounded-xl text-blue-400'>{name}</label>
            <input className='px-3 py-1 rounded-xl bg-gray-900 placeholder:text-slate-400 placeholder:text-sm' value={value} placeholder={placeholder}/>
        </div>
    )
}

export default KeyValueLabel