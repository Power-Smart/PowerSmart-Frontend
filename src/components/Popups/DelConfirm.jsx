import React from 'react'
import { RxCrossCircled } from 'react-icons/rx';

const DelConfirm = ({
    item = "this item",
    onYes = () => { },
    onNo = () => { },
    visible = false,
}) => {
    if (!visible) return <></>
    else return (
        <div className='absolute w-full h-full flex items-center justify-center bg-black/80 z-50'>
            <div className='py-3 px-4 w-72 flex flex-col rounded-md items-center bg-slate-800  border-2 border-[#83BCFF] text-white relative'>
                <RxCrossCircled onClick={onNo} className='absolute top-1 text-xl right-1 text-[#83BCFF] cursor-pointer' />
                <h1 className='mb-3'>Are you sure you want to delete {item} ?</h1>
                <div className='flex'>
                    <button className='w-20 py-1 m-1 text-sm bg-[#ff8383] rounded-md text-black' onClick={onYes}>Yes</button>
                    <button className='w-20 py-1 m-1 text-sm bg-[#83BCFF] rounded-md text-black' onClick={onNo}>No</button>
                </div>
            </div>
        </div>
    )
}

export default DelConfirm