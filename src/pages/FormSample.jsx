import React from 'react'
import PageWrapper from '../components/Wrappers/PageWrapper'
import ContentWrapper from '../components/Wrappers/ContentWrapper'
import Sidebar from '../components/Sidebar/Sidebar'
import TopBar from '../components/smallComps/TopBar'
import PageContent from '../components/Wrappers/PageContent'
import Form from '../components/Forms/Form'
import FormGroup from '../components/Forms/FormGroup'
import FormRowDual from '../components/Forms/FormRowDual'
import TextInput from '../components/Forms/TextInput'
import FormTitle from '../components/Forms/FormTitle'
import FormSubmitButton from '../components/Forms/FormSubmitButton'


const FormSample = () => {

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
            <Sidebar />
            <PageContent>
                <TopBar title={'Form Sample'} />
                <ContentWrapper>
                    <Form>
                        <FormTitle>Form Title</FormTitle>
                        <FormGroup>
                            <TextInput type='text' label='First Name' required={true} />
                        </FormGroup>
                        <FormRowDual>
                            <FormGroup>
                                <TextInput type='text' label='Last Name' required={true} />
                            </FormGroup>
                            <FormGroup>
                                <TextInput type='text' label='Middle Name' required={true} />
                            </FormGroup>
                        </FormRowDual>
                        <FormGroup>
                            <TextInput type='text' label='Address' required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Email' required={true} />
                        </FormGroup>
                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Submit'} onClick={handleSubmit} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Cancel'} onClick={resetForm} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default FormSample