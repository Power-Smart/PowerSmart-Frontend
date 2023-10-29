import React, { useState } from 'react'
import PageWrapper from '../../components/Wrappers/PageWrapper'
import TopBar from '../../components/smallComps/TopBar'
import ContentWrapper from '../../components/Wrappers/ContentWrapper';
import PageContent from '../../components/Wrappers/PageContent'
import { Link, useParams } from 'react-router-dom';
import './guestUserPage.css';
import { submitGuestUserSuggest } from '../../api/apiGuestUser';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2'


const GuestUserPage = () => {
    let [selectedOption, setSelectedOption] = useState('option1');
    const [captcha, setCaptcha] = useState(false);

    let customerID = 1;

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        if (selectedOption === 'option1') {
            selectedOption = 'High power consumption for less number of People'
        } else if (selectedOption === 'option2') {
            selectedOption = 'Excessive energy consumption'
        }
    };

    const submitSuggest = () => {
        submitGuestUserSuggest({ customerID: customerID, selectedOption: selectedOption });
    }
    

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
                                <div className="form" >
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
                                            value="option2"
                                            checked={selectedOption === 'option2'}
                                            onChange={handleOptionChange}
                                        />
                                        <span className="ml-2">Excessive energy consumption</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-blue-500 h-5 w-5"
                                            value="option3"
                                            checked={selectedOption === 'option3'}
                                            onChange={handleOptionChange}
                                        />
                                        <span className="ml-2">option 3</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-blue-500 h-5 w-5"
                                            value="option4"
                                            checked={selectedOption === 'option4'}
                                            onChange={handleOptionChange}
                                        />
                                        <span className="ml-2">Option 4</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-blue-500 h-5 w-5"
                                            value="option5"
                                            checked={selectedOption === 'option5'}
                                            onChange={handleOptionChange}
                                        />
                                        <span className="ml-2">Option 5</span>
                                    </label>

                                    <div className="flex justify-center mt-7 flex-col">
                                        <ReCAPTCHA
                                            sitekey="6LffHC4oAAAAAAU0WbrF_ZiFExqj7Uw8YbINVzLj"
                                            onChange={() => setCaptcha(true)}
                                        />
                                        <button className='px-4 py-1 bg-blue-700 rounded-lg w-[100px] mt-4' disabled={!captcha} onClick={submitSuggest}>Submit</button>
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



export default GuestUserPage