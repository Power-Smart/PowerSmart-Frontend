import React from 'react'
import PageWrapper from '../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../components/Wrappers/ContentWrapper'
import Sidebar from '../../components/Sidebar/Sidebar'
import TopBar from '../../components/smallComps/TopBar'
import PageContent from '../../components/Wrappers/PageContent'
import Form from '../../components/Forms/Form'
import FormGroup from '../../components/Forms/FormGroup'
import TextInput from '../../components/Forms/TextInput'
import FormSubmitButton from '../../components/Forms/FormSubmitButton'
import { FiMapPin } from 'react-icons/fi';
import FormRowDual from '../../components/Forms/FormRowDual'
import MainSidebar from '../../components/Sidebar/Customer/MainSidebar'



const AddRooms = () => {

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
            <MainSidebar />
            <PageContent>
                <TopBar title={'Add Rooms'} />
                <ContentWrapper>
                    <Form>
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} />
                        </FormGroup>
                        <FormRowDual>
                            <FormGroup>
                                <TextInput type='text' label='Width 1 (Feet)' required={true} />
                            </FormGroup>
                            <FormGroup>
                                <TextInput type='text' label='Width 2 (Feet)' required={true} />
                            </FormGroup>
                        </FormRowDual>
                        <FormGroup>
                            <TextInput type='text' label='Height (Feet)' required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Room Type' required={true} />
                        </FormGroup>
                        
                        <FormGroup>
                            <TextInput type='text' label='Sample Input' required={true} />
                        </FormGroup>
                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Add'} onClick={handleSubmit} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Clear'} onClick={resetForm} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default AddRooms;
