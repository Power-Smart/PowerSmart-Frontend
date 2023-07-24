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

const FormSample = () => {
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
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default FormSample