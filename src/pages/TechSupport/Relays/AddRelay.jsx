import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Sidebar from '../../../components/Sidebar/Sidebar'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import Form from '../../../components/Forms/Form'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'
import FormDropdown from '../../../components/Forms/FormDropdown'
import PlaceSidebar from '../../../components/Sidebar/TechSupport/PlaceSidebar'



const AddRelay = () => {

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
            <PlaceSidebar />
            <PageContent>
                <TopBar title={'Add Relay'} />
                <ContentWrapper>
                    <Form>
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Relay ID' required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Wattage' required={true} />
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

export default AddRelay
