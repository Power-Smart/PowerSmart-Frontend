import React from 'react'
import { motion } from "framer-motion"
import { IoMdPricetags } from 'react-icons/io';
import { RiCustomerServiceFill } from 'react-icons/ri';
import NavBar from './NavBar';
import HeroHomeModel from '../../components/Landing/HeroHomeModel';
const HeroSection = () => {
    return (
        <div className="bg-[url('/images/hero-back.png')] bg-cover">
            <section className="w-[80%] mx-auto z-10 flex h-screen lg:flex-row flex-col-reverse">
                <div className='flex flex-col flex-1 justify-center'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className='text-white lg:text-4xl text-3xl mb-10 font-bold'>
                        Empowering Your  Energy Efficiency
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='text-white lg:text-lg text-base lg:mb-12 mb-8 text-justify'>
                        Welcome to a smarter way of living, where your home becomes intuitive, efficient, and effortlessly connected.
                        Welcome to a smarter way of living, where your home becomes intuitive, efficient, and effortlessly connected.
                        Welcome to a smarter way of living, where your home becomes intuitive, efficient, and effortlessly connected.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='flex lg:justify-start lg:self-start lg:mt-10 mt-4'>
                        <button className='text-white bg-blue-700 text-center rounded-full px-10 py-2 mr-5'>Get Started</button>
                        {/* <button className='text-white bg-slate-800 text-center rounded-full px-10 py-2 ml-5'>See Details</button> */}
                    </motion.div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex-1'>
                        <HeroHomeModel />
                    </div>
                    <div className='justify-evenly flex-1 items-center lg:flex hidden'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className='flex flex-col items-center justify-center'>
                            <IoMdPricetags className='text-white text-4xl mb-3' />
                            <div className='text-white text-sm'>Affordable Price</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className='flex flex-col items-center justify-center'>
                            <RiCustomerServiceFill className='text-white text-4xl mb-3' />
                            <div className='text-white text-sm'>99% Service Providing</div>
                        </motion.div>
                    </div>

                </div>
            </section>
        </div >
    )
}

export default HeroSection