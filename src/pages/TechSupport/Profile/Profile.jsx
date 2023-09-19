import React, { useEffect, useState } from 'react';
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import TopBar from '../../../components/smallComps/TopBar';
import PageContent from '../../../components/Wrappers/PageContent';
import Form from '../../../components/Forms/Form';
import FormGroup from '../../../components/Forms/FormGroup';
import TextInput from '../../../components/Forms/TextInput';
import FormSubmitButton from '../../../components/Forms/FormSubmitButton';
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';
import { useDispatch, useSelector } from 'react-redux';
import ProfileForm from './Info'
import { fetchTechSupport,selectTechSupport } from '../../../redux/slices/techSupportSlice';


const Profile = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const techSupportInfo = useSelector(selectTechSupport);


    useEffect(()=> {
        dispatch(fetchTechSupport(user.id));
    },[dispatch,user])


    return (
        <PageWrapper>
            <MainSidebar username={user.first_name + ' ' + user.last_name}/>
            <PageContent>
                {/* <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Profile" baclLink='/' /> */}
                <ContentWrapper>
                    <div className='flex justify-between items-center p-4'>
                        <div className='flex justify-start items-center'>
                            <div className='relative  select-none'>
                                <img src="https://avatars.githubusercontent.com/u/73744585?v=4" alt="" className='w-36 h-36 rounded-full' />
                                <span className='shadow-md absolute right-0 bottom-0 text-xs font-semibold bg-[#83BCFF] text-black py-1 px-4 rounded-full'>Active</span>
                            </div>
                            <div className='flex flex-col ml-10'>
                                <h1 className='text-4xl my-2 font-semibold'>{user.first_name + " " + user.last_name}</h1>
                                <h2 className='text-lg my-2'>ID : #{user.id} </h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ProfileForm />
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    );
};

export default Profile;
