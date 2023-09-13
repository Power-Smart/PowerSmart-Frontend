import React, { useState } from 'react'
import PageWrapper from '../../components/Wrappers/PageWrapper'
import TopBar from '../../components/smallComps/TopBar'
import ContentWrapper from '../../components/Wrappers/ContentWrapper';
import PageContent from '../../components/Wrappers/PageContent'
import { Link, useParams } from 'react-router-dom';
import './guestUserPage.css';


const GuestUserPage = () => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div>
            <PageWrapper>
                <PageContent>
                    <TopBar title={"Guest User"}></TopBar>
                    <ContentWrapper>
                        <div className="guestUserPage-container">
                            <div className="guestUserPage">
                                <div className="infoHeader">
                                    <div className="title">
                                        <h3>Customer Order Request Information</h3>
                                    </div>
                                </div>
                                <div className="form">

                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-blue-500 h-5 w-5"
                                            value="option1"
                                            checked={selectedOption === 'option1'}
                                            onChange={handleOptionChange}
                                        />
                                        <span className="ml-2">High power consumption for less number of People</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-blue-500 h-5 w-5"
                                            value="option1"
                                            checked={selectedOption === 'option1'}
                                            onChange={handleOptionChange}
                                        />
                                        <span className="ml-2">Excessive energy consumption</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-blue-500 h-5 w-5"
                                            value="option1"
                                            checked={selectedOption === 'option1'}
                                            onChange={handleOptionChange}
                                        />
                                        <span className="ml-2">option 1</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-blue-500 h-5 w-5"
                                            value="option1"
                                            checked={selectedOption === 'option1'}
                                            onChange={handleOptionChange}
                                        />
                                        <span className="ml-2">Option 1</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-blue-500 h-5 w-5"
                                            value="option1"
                                            checked={selectedOption === 'option1'}
                                            onChange={handleOptionChange}
                                        />
                                        <span className="ml-2">Option 1</span>
                                    </label>





                                    <div className="flex justify-center mt-10">

                                        <Link to={`/tech/marketPlace/`}>
                                            <button className='px-4 py-1 bg-blue-700 rounded-lg'>Submit</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="login-page-navigation">
                                <div className="guestUserPage w-full mx-auto">
                                    <div className="infoHeader">
                                        <div className="title">
                                            <h3>Customer Order Request Information</h3>
                                        </div>
                                    </div>
                                    <div className="form">

                                        <div className="flex justify-center mt-10">

                                            <Link to={`/tech/marketPlace/`}>
                                                <button className='px-4 py-1 bg-blue-700 rounded-lg'>Submit</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ContentWrapper>
                </PageContent>
            </PageWrapper>
        </div >
    )
}

export default GuestUserPage;