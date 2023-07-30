import React, { useState } from 'react';
import PageWrapper from '../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../components/Wrappers/ContentWrapper';
import Sidebar from '../../components/Sidebar/Sidebar';
import TopBar from '../../components/smallComps/TopBar';
import PageContent from '../../components/Wrappers/PageContent';
import Form from '../../components/Forms/Form';
import FormGroup from '../../components/Forms/FormGroup';
import TextInput from '../../components/Forms/TextInput';
import FormSubmitButton from '../../components/Forms/FormSubmitButton';

const Profile = () => {
    const [profilePhoto, setProfilePhoto] = useState(null);

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        setProfilePhoto(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted');
    };

    const resetForm = (e) => {
        e.preventDefault();
        alert('Form Reset');
    };

    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar title={'Profile'} />
                <ContentWrapper>
                    {/* Profile Photo Upload */}
                    <div className="w-1/3 m-auto mt-4">
                        <label htmlFor="profilePhotoUpload" className="cursor-pointer relative">
                            <div className="w-20 h-20 rounded-full mx-auto bg-gray-300">
                                {profilePhoto && (
                                    <img src={URL.createObjectURL(profilePhoto)} alt="Uploaded Profile" className="w-full h-full rounded-full" />
                                )}
                            </div>
                            {!profilePhoto && (
                                <span className="absolute inset-x-0 bottom--30px text-gray-600 text-center ">Upload Photo</span>
                            )}
                        </label>
                        <input
                            type="file"
                            id="profilePhotoUpload"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="hidden"
                        />
                    </div>

                    {/* Existing Form */}
                    <Form>
                        <FormGroup>
                            <TextInput type="text" label="Name" required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type="text" label="Description" required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type="text" label="Room Type" required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type="text" label="Sample Input" required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type="text" label="Price" required={true} />
                        </FormGroup>
                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Add'} onClick={handleSubmit} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Clear'} onClick={resetForm} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    );
};

export default Profile;
