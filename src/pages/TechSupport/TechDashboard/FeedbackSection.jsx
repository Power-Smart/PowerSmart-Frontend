import React from 'react'
import { ImStarFull } from 'react-icons/im'
import { ImStarHalf } from 'react-icons/im'
import { Progress } from 'antd';


const FeedbackSection = () => {
    return (
        <div>
            <div className="rating-sectuion text-center mb-4 bg-[#0856CD] py-3 px-2 rounded-lg h-fit">
                <div className="rating-number mb-4">
                    <h1 className='text-4xl font-bold'>4.9</h1>
                </div>
                <div className="star-count bg-[#83BCFF] rounded-lg p-2 ">
                    <div className="star flex justify-around mb-2">
                        <ImStarFull className='text-yellow-500 text-xl' />
                        <ImStarFull className='text-yellow-500 text-xl' />
                        <ImStarFull className='text-yellow-500 text-xl' />
                        <ImStarFull className='text-yellow-500 text-xl' />
                        <ImStarHalf className='text-yellow-500 text-xl' />
                    </div>
                    <div className="num-of-rating">
                        <h3 className='text-sm'>1540 Ratings</h3>
                    </div>
                </div>
            </div>

            <div className="rating-section">
                <div className="flex justify-around flex-row items-center">
                    <div className="flex justify-between w-full items-center">
                        <h1>5</h1>
                        <div className="w-full ml-4">
                            <Progress percent={80} status="active" showInfo={false} strokeColor='#4CAF50' trailColor='#E5E5E5' />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3>80</h3>
                    </div>
                </div>

                <div className="flex justify-around flex-row items-center">
                    <div className="flex justify-between w-full items-center">
                        <h1>4</h1>
                        <div className="w-full ml-4">
                            <Progress percent={10} status="active" showInfo={false} strokeColor='#8BC34A' trailColor='#E5E5E5' />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3>10</h3>
                    </div>
                </div>


                <div className="flex justify-around flex-row items-center">
                    <div className="flex justify-between w-full items-center">
                        <h1>3</h1>
                        <div className="w-full ml-4">
                            <Progress percent={60} status="active" showInfo={false} strokeColor='#FFC107' trailColor='#E5E5E5' />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3>60</h3>
                    </div>
                </div>


                <div className="flex justify-around flex-row items-center">
                    <div className="flex justify-between w-full items-center">
                        <h1>2</h1>
                        <div className="w-full ml-4">
                            <Progress percent={40} status="active" showInfo={false} strokeColor='#FF9800' trailColor='#E5E5E5' />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3>40</h3>
                    </div>
                </div>

                <div className="flex justify-around flex-row items-center">
                    <div className="flex justify-between w-full items-center">
                        <h1>1</h1>
                        <div className="w-full ml-4">
                            <Progress percent={5} status="active" showInfo={false} strokeColor='#F44336' trailColor='#E5E5E5' />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3>05</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackSection