import React, { useEffect, useState } from 'react'
import { ImOpt, ImStarFull } from 'react-icons/im'
import { ImStarHalf } from 'react-icons/im'
import { Progress } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { getTechSupportRatingByCustomer,selectTechSupportRatingByCustomer } from '../../../redux/slices/techsupport/techRatingByCustomerSlice';



const FeedbackSection = () => {

    const user = useSelector(state => state.user.user);
    let techSupportId = user.id;
    const dispatch = useDispatch();
    const techSupportRating = useSelector(selectTechSupportRatingByCustomer);

    let totalFiveStar = 0;
    let totalFourStar = 0;
    let totalThreeStar = 0;
    let totalTwoStar = 0;
    let totalOneStar = 0;

    let totalStar = 0;

    let fiveStarPercentage = 0;
    let fourStarPercentage = 0;
    let threeStarPercentage = 0;
    let twoStarPercentage = 0;
    let oneStarPercentage = 0;


    
    useEffect(() => {
        dispatch(getTechSupportRatingByCustomer(techSupportId));
    }, [dispatch, techSupportId])


    if (techSupportRating) {
        techSupportRating.map((rating) => {
            if (rating.rating === 5) {
                totalFiveStar++;
                totalStar++;
            }
            else if (rating.rating === 4) {
                totalFourStar++;
                totalStar++;
            }
            else if (rating.rating === 3) {
                totalThreeStar++;
                totalStar++;
            }
            else if (rating.rating === 2) {
                totalTwoStar++;
                totalStar++;
            }
            else if (rating.rating === 1) {
                totalOneStar++;
                totalStar++;
            }
        })
    }

    fiveStarPercentage = (totalFiveStar / totalStar) * 100;
    fourStarPercentage = (totalFourStar / totalStar) * 100;
    threeStarPercentage = (totalThreeStar / totalStar) * 100;
    twoStarPercentage = (totalTwoStar / totalStar) * 100;
    oneStarPercentage = (totalOneStar / totalStar) * 100;

    let totalRatingPercentage = (totalStar / ( 500)) * 100;


    return (
        <div>
            <div className="rating-sectuion text-center mb-4 bg-[#0856CD] py-3 px-2 rounded-lg h-fit">
                <div className="rating-number mb-4">
                    <h1 className='text-5xl font-bold'>{totalRatingPercentage}</h1>
                </div>
                <div className="star-count bg-[#83BCFF] rounded-lg p-2 ">
                    <div className="star flex justify-around mb-2">
                        <ImStarFull className='text-yellow-500 text-3xl' />
                        <ImStarFull className='text-yellow-500 text-3xl' />
                        <ImStarFull className='text-yellow-500 text-3xl' />
                        <ImStarFull className='text-yellow-500 text-3xl' />
                        <ImStarHalf className='text-yellow-500 text-3xl' />
                    </div>
                    <div className="num-of-rating">
                        <h3 className='text-2sm'>{totalStar} Ratings</h3>
                    </div>
                </div>
            </div>

            <div className="rating-section">
                <div className="flex justify-around flex-row items-center mb-1">
                    <div className="flex justify-between w-full items-center">
                        <h1>5</h1>
                        <div className="w-full ml-4">
                            <Progress percent={fiveStarPercentage} status="active" showInfo={false} strokeColor='#4CAF50' trailColor='#E5E5E5' size={[200, 10]} />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3>{totalFiveStar}</h3>
                    </div>
                </div>

                <div className="flex justify-around flex-row items-center mb-1">
                    <div className="flex justify-between w-full items-center">
                        <h1>4</h1>
                        <div className="w-full ml-4">
                            <Progress percent={fourStarPercentage} status="active" showInfo={false} strokeColor='#8BC34A' trailColor='#E5E5E5' size={[200, 10]} />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3>{totalFourStar}</h3>
                    </div>
                </div>


                <div className="flex justify-around flex-row items-center mb-1">
                    <div className="flex justify-between w-full items-center">
                        <h1>3</h1>
                        <div className="w-full ml-4">
                            <Progress percent={threeStarPercentage} status="active" showInfo={false} strokeColor='#FFC107' trailColor='#E5E5E5' size={[200, 10]} />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3>{totalThreeStar}</h3>
                    </div>
                </div>


                <div className="flex justify-around flex-row items-center mb-1">
                    <div className="flex justify-between w-full items-center">
                        <h1>2</h1>
                        <div className="w-full ml-4">
                            <Progress percent={twoStarPercentage} status="active" showInfo={false} strokeColor='#FF9800' trailColor='#E5E5E5' size={[200, 10]} />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3>{totalTwoStar}</h3>
                    </div>
                </div>

                <div className="flex justify-around flex-row items-center mb-1">
                    <div className="flex justify-between w-full items-center">
                        <h1>1</h1>
                        <div className="w-full ml-4">
                            <Progress percent={oneStarPercentage} status="active" showInfo={false} strokeColor='#F44336' trailColor='#E5E5E5' size={[200, 10]} />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3>{totalOneStar}</h3>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default FeedbackSection