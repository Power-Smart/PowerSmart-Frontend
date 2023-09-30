import React, { useState } from 'react'
import PageWrapper from '../../components/Wrappers/PageWrapper'
import TopBar from '../../components/smallComps/TopBar'
import ContentWrapper from '../../components/Wrappers/ContentWrapper';
import PageContent from '../../components/Wrappers/PageContent'
import { Link, useParams,useNavigate } from 'react-router-dom';
import './guestUserPage.css';
import { submitGuestUserSuggest } from '../../api/apiGuestUser';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import ReCAPTCHA from "react-google-recaptcha";



const GuestUserAuth = () => {
    // let [selectedOption, setSelectedOption] = useState('option1');
    const navigate = useNavigate();

    // let customerID = 1;

    // const handleOptionChange = (e) => {
    //     setSelectedOption(e.target.value);
    //     if (selectedOption === 'option1') {
    //         selectedOption = 'High power consumption for less number of People'
    //     } else if (selectedOption === 'option2') {
    //         selectedOption = 'Excessive energy consumption'
    //     }
    //     submitGuestUserSuggest({ customerID: customerID, selectedOption: selectedOption });
    // };

    return (
        <div>
            <PageWrapper>
                <PageContent>
                    <TopBar title={"Guest User"}></TopBar>
                    <ContentWrapper>
                        <GoogleOAuthProvider clientId="904393184245-f9d6vcbti52podrom5a8as22ti9v612f.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    const details = jwt_decode(credentialResponse.credential);
                                    navigate('/guest');
                                    submitGuestUserSuggest({ guest_name: details.name, guest_email: details.email ,profile_pic:details.picture});
                                    console.log(details);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </GoogleOAuthProvider>
                    </ContentWrapper>
                </PageContent>
            </PageWrapper>
        </div >
    )
}

export default GuestUserAuth