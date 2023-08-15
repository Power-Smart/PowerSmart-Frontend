import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SidebarButton = ({ children, text, toggle, link }) => {
    return (
        <NavLink to={link} className={({ isActive }) => `flex items-center py-2 cursor-pointer transition-all duration-300 ${isActive ? "text-black bg-white" : "text-white hover:bg-sky-950"} ` + (toggle ? 'w-full pl-4 pr-8 justify-start' : 'mx-auto justify-center text-lg')}>
            <div className={'pr-4'}>{children}</div>
            {toggle && <div>{text}</div>}
        </NavLink>


    )
}

export default SidebarButton