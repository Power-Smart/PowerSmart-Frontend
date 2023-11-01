import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import { useSelector, useDispatch } from 'react-redux'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import Form from '../../../components/Forms/Form'
import FormRowDual from '../../../components/Forms/FormRowDual'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'
import SelectInput from '../../../components/Forms/SelectInput'
import { FiMapPin } from 'react-icons/fi';
// import SelectInput from '../../../components/Forms/SelectInput'
import { Select } from 'antd';



const ServiceRequest = () => {

    



    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <ContentWrapper>
                    <Form>
                        <FormGroup>
                            <Select
                                defaultValue={'Select Place Type'}
                                // value={place.place_type}
                                style={{ width: '100%' }}
                            // onChange={(value) => { setPlace({ ...place, place_type: value }) }}
                            // options={categories}
                            />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Order Description' required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Number of Rooms' required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Number of Places' required={true} />
                        </FormGroup>

                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Request'} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Reset'} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default ServiceRequest