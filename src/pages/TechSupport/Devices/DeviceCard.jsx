import React from 'react'
import { Link } from "react-router-dom";


const DeviceCard = ({ id, deviceName, walt, image }) => {
    return (
        <div className="text-sm flex flex-col border-solid border border-secondaryBlue w-[200px] h-auto bg-[#1C1C2E] rounded-3xl shadow-md pb-5 m-5 justify-evenly">
            <div className="bg-white w-[200px] rounded-tr-3xl rounded-tl-3xl">
                <img
                    className="object-cover h-[100px] w-[200px] rounded-3xl"
                    src={image}
                    alt="item"
                />
            </div>
            <div className="text-md mx-auto text-center mb-1">#{id} </div>
            <div className="text-sm mb-1 w-4/5 mx-auto font-bold text-[#cecece] text-center h-30">
                {deviceName}
            </div>
            <div className="text-center mb-3">
                <div className="text-sm text-secondaryText">{walt}wh</div>
            </div>

            <div className="flex justify-evenly items-center">
                <button className="px-4 py-1 w-20 text-sm bg-secondaryBtn rounded-2xl text-black bg-[#FF8383]">
                    Delete
                </button>
                <Link to='#'>
                    <button className="px-4 py-1 w-20 text-sm bg-primaryBtn rounded-2xl text-black bg-[#83BCFF]">
                        Edit
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default DeviceCard