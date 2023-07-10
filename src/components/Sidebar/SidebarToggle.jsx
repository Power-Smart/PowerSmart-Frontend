import React from 'react'
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'

const SidebarToggle = ({ toggle, setToggle }) => {
    return (
        <div className={'text-white absolute p-1 border-2 rounded-full bg-slate-800 -right-3.5 top-10 transition-all duration-300 text-sm'}
            onClick={() => setToggle(toggle => !toggle)}>
            {toggle && <AiFillCaretLeft />}
            {!toggle && <AiFillCaretRight />}
        </div>
    )
}

export default SidebarToggle