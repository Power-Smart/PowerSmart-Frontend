import { AiFillCaretRight } from "react-icons/ai";
import React, { useEffect, useState } from 'react'

const CheckoutBox = ({ place_id, place, items, setTotals }) => {
    const [open, setOpen] = useState(false);
    const total = items.reduce((acc, one) => acc + one.item.price * one.quantity, 0);

    useEffect(() => {
        setTotals(totals => ({ ...totals, [place_id]: total }));
    }, []);

    return (
        <details className="bg-white dark:bg-slate-900 ring-1 ring-black/5 dark:ring-white/10 shadow-lg px-4 my-2 py-2 w-4/5 rounded-lg" open={false} >
            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none flex justify-between items-center" onClick={() => { setOpen(open => !open) }}>
                <div className='flex items-center flex-wrap'>
                    <AiFillCaretRight className={'text-lg ease-in duration-100 ' + (!open ? "rotate-0" : "rotate-90")} />
                    <h1 className='text-[#83BCFF] px-2 py-1'>{place}</h1>
                    {/* <div className='px-2 py-1'>{ }</div> */}
                </div>
                <div className='px-2'>Rs. {total.toFixed(2)}</div>
            </summary>
            <div className="m-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <div>
                    <div className='flex flex-col w-full'>
                        <hr className=" border-blue-400/30 my-2" />
                        {items.map((item, index) => (
                            <div key={index}>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex items-end'>
                                        <div className='px-2'>{item.item.name}</div>
                                        <div className='px-2 font-semibold'>x</div>
                                        <div className='px-2'>{item.quantity}</div>
                                    </div>
                                    <div className='flex items-end'>
                                        <div className='px-2'>{item.item.price}</div>
                                        <div className='px-2 font-semibold'>x</div>
                                        <div className='px-2'>{item.quantity}</div>
                                    </div>
                                    <div className='px-2'>Rs. {(item.item.price * item.quantity).toFixed(2)}</div>
                                </div>
                                <hr className=" border-blue-400/30 my-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </details>
    )
}

export default CheckoutBox