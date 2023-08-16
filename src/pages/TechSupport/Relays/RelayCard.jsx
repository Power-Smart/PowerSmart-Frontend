import React from 'react'
import { Link } from "react-router-dom";

const RelayCard = ({ id, name, type, image }) => {
    return (
        <div className="text-sm flex flex-col border-solid border border-secondaryBlue w-[200px] h-auto bg-[#1C1C2E] rounded-3xl shadow-md px-2 pb-5 m-5 justify-evenly">
            <div className="item-image rounded-es-3xl rounded-ee-3xl mx-auto bg-white">
                <img
                    className="object-fill rounded-es-3xl rounded-ee-3xl h-20 w-20"
                    src={image}
                    alt="item"
                />
            </div>
            <div className="text-md my-2 mx-auto text-center">#{id} </div>
            <div className="text-sm w-4/5 mx-auto font-thin text-[#cecece] text-center h-30">
                {name}
            </div>
            <div className="mt-4 mb-3 text-center">
                <div className="text-sm text-secondaryText">{type}</div>
            </div>

            <div className="flex justify-evenly items-center">
                <Link to='#'>
                    <button className="px-4 py-1 w-20 text-sm bg-primaryBtn rounded-2xl text-black bg-[#83BCFF]">
                        Edit
                    </button>
                </Link>
                <button className="px-4 py-1 w-20 text-sm bg-secondaryBtn rounded-2xl text-black bg-[#FF8383]">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default RelayCard