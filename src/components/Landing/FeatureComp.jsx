import { useRef } from "react";

const FeatureComp = ({ image, title, children, imgRight = false }) => {
    const ref = useRef(null)
    return (
        <div
            ref={ref}
            className={`flex lg:w-auto lg:h-auto h-96 relative pt-16 ${!imgRight ? 'flex-row' : 'flex-row-reverse'}`}>
            <img className='lg:relative absolute lg:w-96 lg:h-96 w-full h-full lg:object-contain object-cover flex-1 rounded-xl lg:opacity-60 opacity-10  shadow-md drop-shadow-lg border-white' src={image} alt=""
            />
            <div className='flex-1 flex flex-col  justify-center px-10 z-10' >
                <h1 className='lg:text-2xl text-3xl font-bold text-gray-300 lg:rounded-2xl  py-3'>{title}</h1>
                <p className='text-justify lg:text-sm text-base max-w-lg'>{children}</p>
            </div>
        </div>
    )
}

export default FeatureComp