import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import React, { useState } from 'react'

const CheckoutBox = ({ place, room, total }) => {
    const [open, setOpen] = useState(false);

    return (
        <details className="bg-white dark:bg-slate-900 ring-1 ring-black/5 dark:ring-white/10 shadow-lg px-4 my-2 py-2 w-4/5 rounded-lg" open={false} >
            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none flex justify-between items-center" onClick={() => { setOpen(open => !open) }}>
                <div className='flex items-center flex-wrap'>
                    <AiFillCaretRight className={'text-lg ease-in duration-100 ' + (!open ? "rotate-0" : "rotate-90")} />
                    <h1 className='text-[#83BCFF] px-2 py-1'>{place}</h1>
                    <div className='px-2 py-1'>{room}</div>
                </div>
                <div className='px-2'>Rs. {total}</div>
            </summary>
            <div className="m-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <p>The mug is round. The jar is round. They should call it Roundtine.</p>
            </div>
        </details>
    )
}

export default CheckoutBox