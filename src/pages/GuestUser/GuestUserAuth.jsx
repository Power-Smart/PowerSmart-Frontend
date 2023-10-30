import React, { useState } from 'react'
import PageWrapper from '../../components/Wrappers/PageWrapper'
import TopBar from '../../components/smallComps/TopBar'
import ContentWrapper from '../../components/Wrappers/ContentWrapper';
import PageContent from '../../components/Wrappers/PageContent'
import { Link, useParams,useNavigate } from 'react-router-dom';
import './guestUserPage.css';
import { insertGuestUser } from '../../api/apiGuestUser';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import ReCAPTCHA from "react-google-recaptcha";


const GuestUserAuth = () => {
    const navigate = useNavigate();
    const { customerID, placeID, roomID } = useParams();


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
                                    insertGuestUser({ guest_name: details.name, guest_email: details.email ,profile_pic:details.picture}).then((res) => {
                                        navigate(`/guest/${res.data.user_id}/${customerID}/${placeID}/${roomID}`);
                                    }).catch((err) => {
                                        console.log(err);
                                    })
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