import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FeatureComp = ({ image, title, children, imgRight = false }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
    })
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    return (
        <div ref={ref}
            className={`flex pt-16 ${!imgRight ? 'flex-row' : 'flex-row-reverse'}`}>
            <motion.img
                style={{ opacity }}
                className='w-96 h-96 object-contain flex-1 rounded-xl opacity-60 shadow-md drop-shadow-lg border-white' src={image} alt=""
            />
            <div className='flex-1 flex flex-col  justify-center px-10' >
                <motion.h1
                    className='text-2xl text-gray-300 rounded-2xl py-3'>{title}</motion.h1>
                <motion.p
                    className='text-justify text-sm max-w-lg'>{children}</motion.p>
            </div>
        </div>
    )
}

export default FeatureComp