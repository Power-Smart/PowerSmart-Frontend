import React from 'react'

const KeyValueLabel = ({ name, value }) => {
    return (
        <div className="flex space-x-4 text-base">
            <label htmlFor="">{name} : </label>
            <label htmlFor="">{value}</label>
        </div>
    )
}

export default KeyValueLabel