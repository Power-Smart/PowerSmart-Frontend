import React, { useEffect, useState } from 'react'
import PageWrapper from '../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../components/Wrappers/ContentWrapper'
import PageContent from '../../components/Wrappers/PageContent'
import Form from '../../components/Forms/Form'
import FormGroup from '../../components/Forms/FormGroup'
import FormRowDual from '../../components/Forms/FormRowDual'
import TextInput from '../../components/Forms/TextInput'
import FormTitle from '../../components/Forms/FormTitle'
import FormSubmitButton from '../../components/Forms/FormSubmitButton'
import ProfilePictureUpload from './ProfilePictureUpload'
import { completeProfile } from '../../api/apiUser'
import { useSelector } from 'react-redux'
import { selectUserID } from '../../redux/slices/userSlice'
import { useDispatch } from 'react-redux';



const ProfileComplete = () => {

    const customerID = useSelector(selectUserID)
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [profileInfo, setProfileInfo] = useState({
        firstName: "",
        lastName: "",
        address: "",
        user_id: 17
    }
    );

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await completeProfile(profileInfo);
        if (response.status === 201) {
            console.log("dhdhdh");
        } else {
            console.log("skssks")
        }
    }

    const resetForm = (e) => {
        e.preventDefault()
        alert('Form Reset')
    }


    return (
        <PageWrapper>
            <PageContent>
                <ContentWrapper>
                    <Form>
                        <FormTitle>Profile Complete</FormTitle>
                        <div className="profile-picture flex justify-center items-center">
                            <ProfilePictureUpload />
                        </div>
                        <FormGroup>
                            <TextInput type='text' label='First Name' required={true} onChange={(e) => setProfileInfo({ ...profileInfo, firstName: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Last Name' required={true} onChange={(e) => setProfileInfo({ ...profileInfo, lastName: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Address' required={true} onChange={(e) => setProfileInfo({ ...profileInfo, address: e.target.value })} />
                        </FormGroup>
                        {/* <FormGroup>
                            <TextInput type='text' label='Email' required={true} onChange={(e) => setProfileInfo({...profileInfo,})}/>
                        </FormGroup> */}
                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Submit'} onClick={handleSubmit} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Clear'} onClick={resetForm} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default ProfileComplete