import React from 'react'
import ss1 from '/images/screenshots/ss1.png'
import ss2 from '/images/screenshots/ss2.png'
import { motion } from "framer-motion"

const KeyFeaturesSection = () => {
    return (
        <section className='w-full bg-gradient-to-r from-gray-900/80 via-black to-gray-900/80 text-white py-12 bg-fixed bg-blue-400/10 flex flex-col'>
            <div className='w-[80%] mx-auto'>
                <motion.h1
                    initial={{ opacity: 1, y: 20 }}
                    animate={{ opacity: 0, y: 0 }}
                    transition={{ duration: 1, delay: 0, repeat: Infinity, repeatType: 'reverse', repeatDelay: 3 }}
                    className='text-3xl text-center'>Experience Excellence with Us</motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0, repeat: Infinity, repeatType: 'reverse', repeatDelay: 3 }}
                    className='text-3xl text-center'>We are PowerSmart</motion.h1>
            </div>
            <div className='w-[80%] mx-auto my-16'>
                <div className='flex my-5'>
                    <img className='w-96 flex-1 rounded-xl opacity-60 shadow-md drop-shadow-lg' src={ss1} alt="" />
                    <div className='flex-1 flex flex-col  justify-center px-10'>
                        <h1 className='text-2xl text-gray-300 rounded-2xl py-2'>Control Your Place Remotely..</h1>
                        <p className=' text-justify text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quos, officiis alias tempore ratione doloremque harum, quibusdam dignissimos quas \
                            veniam facilis in natus cum perferendis. Enim voluptatem dolorum placeat amet.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyFeaturesSection