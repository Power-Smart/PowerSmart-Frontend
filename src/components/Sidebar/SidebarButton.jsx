import React from 'react'
import { Link } from 'react-router-dom'

const SidebarButton = ({ children, text, toggle, link }) => {
    return (
        <Link to={link}>
            <div className={'flex items-center py-2 text-white hover:bg-sky-950 cursor-pointer transition-all duration-300 ' + (toggle ? 'w-full pl-4 pr-16 justify-start' : 'mx-auto justify-center text-lg')}>
                <div className={'px-2'}>{children}</div>
                {toggle && <div>{text}</div>}
            </div>
        </Link>


    )
}

export default SidebarButton