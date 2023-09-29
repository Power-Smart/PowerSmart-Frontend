import React from 'react'
import About1 from '/images/about_1.webp'
import { motion } from 'framer-motion'

const AboutSection = () => {
    return (
        <section className='w-full bg-[url("/images/about_back.jpg")] text-white my-10 py-10 bg-fixed bg-blue-400/10'>
            <div className='w-[80%] mx-auto'>
                <div className='flex flex-col justify-around mx-auto'>
                    <div className='flex my-5 items-center lg:w-[80%] left-full bg-gradient-to-r from-slate-700/10 to-slate-900/60 p-4 lg:rounded-full backdrop-blur-lg rounded-xl'>
                        <motion.img
                            src={About1}
                            className='w-44 h-44 object-cover lg:rounded-full rounded-xl mr-10 border-2 border-slate-100/10 md:block hidden'
                            alt=""
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.05 }}
                            transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
                        />
                        <div className='flex flex-col md:pr-10 p-5'>
                            <h1 className=' font-bold text-3xl'>Our Mission</h1>
                            <p className='text-justify my-1'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quasi corrupti deleniti nam ipsam? Ea velit possimus,
                                quia nostrum, non atque pariatur optio commodi eius dolore laudantium, sed cumque iure.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse my-5 items-center justify-end lg:w-[80%] w-full self-end bg-gradient-to-r from-slate-900/10 to-slate-700/60 p-4 lg:rounded-full rounded-xl backdrop-blur-lg'>
                        <motion.img
                            src={About1}
                            className='w-44 h-44 object-cover lg:rounded-full rounded-xl ml-10 border-2 border-slate-100/10 md:block hidden'
                            alt=""
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.05 }}
                            transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
                        />
                        <div className='flex flex-col md:pl-10 p-5'>
                            <h1 className=' font-bold text-3xl text-right'>Our Vision</h1>
                            <p className='text-justify my-1'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quasi corrupti deleniti nam ipsam? Ea velit possimus,
                                quia nostrum, non atque pariatur optio commodi eius dolore laudantium, sed cumque iure.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection