import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import Sidebar from '../../../components/Sidebar/Sidebar'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Form from '../../../components/Forms/Form'
import FormGroup from '../../../components/Forms/FormGroup'
import FormRowDual from '../../../components/Forms/FormRowDual'
import TextInput from '../../../components/Forms/TextInput'
import FormTitle from '../../../components/Forms/FormTitle'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'
import AdmninSidebar from '../../../components/Sidebar/Admin/AdminSidebar'


const AdminProfile = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Form Submitted')
    }

    const resetForm = (e) => {
        e.preventDefault()
        alert('Form Reset')
    }

    return (
        <PageWrapper>
            <AdmninSidebar />
            <PageContent>
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Profile" />
                <ContentWrapper>
                    <div className='flex justify-between items-center p-4'>
                        <div className='flex justify-start items-center'>
                            <div className='relative  select-none'>
                                <img src="https://avatars.githubusercontent.com/u/73744585?v=4" alt="" className='w-36 h-36 rounded-full' />
                                <span className='shadow-md absolute right-0 bottom-0 text-xs font-semibold bg-[#83BCFF] text-black py-1 px-4 rounded-full'>Edit</span>
                            </div>
                            <div className='flex flex-col ml-10'>
                                <h1 className='text-4xl my-2 font-semibold'>Kavishka Sulakshana</h1>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                    <Form>
                        <FormTitle>Edit Profile</FormTitle>
                        <FormGroup>
                            <TextInput type='text' label='First Name' required={true} />
                        </FormGroup>
                        
                            <FormGroup>
                                <TextInput type='text' label='Last Name' required={true} />
                            </FormGroup>
                        
                        
                        <FormGroup>
                            <TextInput type='text' label='Email' required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='password' label='Password' required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='password' label='Confirm Password' required={true} />
                        </FormGroup>
                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Submit'} onClick={handleSubmit} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Cancel'} onClick={resetForm} />
                        </div>
                    </Form>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default AdminProfile