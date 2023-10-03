import React from 'react'
import ss1 from '/images/screenshots/ss1.png'
import ss2 from '/images/screenshots/ss2.png'
import ss4 from '/images/screenshots/ss4.png'
import { motion } from "framer-motion"
import FeatureComp from '../../components/Landing/FeatureComp'
import Padding from '../../components/smallComps/Padding'

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
                <FeatureComp image={ss1} title='Control Your Place Remotely..' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum, corrupti, distinctio voluptatum rem nobis qui inventore est quae vitae unde nihil nostrum officia. Ipsam laboriosam dolor earum quam? Harum.
                </FeatureComp>
                <Padding />
                <FeatureComp image={ss2} title='Control Your Place Remotely..' imgRight>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum, corrupti, distinctio voluptatum rem nobis qui inventore est quae vitae unde nihil nostrum officia. Ipsam laboriosam dolor earum quam? Harum.
                </FeatureComp>
                <Padding />
                <FeatureComp image={ss4} title='Control Your Place Remotely..' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum, corrupti, distinctio voluptatum rem nobis qui inventore est quae vitae unde nihil nostrum officia. Ipsam laboriosam dolor earum quam? Harum.
                </FeatureComp>
            </div>
        </section>
    )
}

export default KeyFeaturesSection