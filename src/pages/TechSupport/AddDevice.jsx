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
import FormDropdown from '../../components/Forms/FormDropdown'


const AddDevice = () => {
    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar title={'Add Devices'} />
                <ContentWrapper>
                    <Form>
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Relay ID' required={true} />
                        </FormGroup>
                        <FormDropdown></FormDropdown>
                        <FormGroup>
                            <TextInput type='text' label='Wattage' required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Sample Input' required={true} />
                        </FormGroup>
                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor="bg-blue-600" urlLink={'register'} buttonText={'Next'} />
                            <FormSubmitButton backgroundColor="bg-red-600" urlLink={'register'} buttonText={'Clear'} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default AddDevice
