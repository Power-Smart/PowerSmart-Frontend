import React from 'react'

const Indicator = ({ color }) => {
    return (
        <div className={`${color} w-[8px] h-[8px] mr-2 rounded-full`}></div>
    )
}

export default Indicator