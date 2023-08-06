import React, { useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Sidebar from '../../../components/Sidebar/Sidebar'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import Form from '../../../components/Forms/Form'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'
import { FiMapPin } from 'react-icons/fi';
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import { useSelector, useDispatch } from 'react-redux'
import { selectCustomer } from '../../../redux/slices/customerSlice'
import { addPlace } from '../../../redux/slices/placesSlice'
import { useNavigate } from 'react-router-dom'
import AlertMessage from '../../../components/smallComps/AlertMessage'


const AddPlace = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const customer = useSelector(selectCustomer)
    const [place, setPlace] = useState({
        name: '',
        location: '',
        postal_Code: '',
        is_active: false,
    })
    const [alert, setAlert] = useState({
        message: '',
        type: 'success',
        visible: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(addPlace({ ...place, id: customer.id }))
            resetForm(e)
            setAlert({
                message: 'Place Added Successfully !',
                type: 'success',
                visible: true,
            })
        }
        catch (err) {
            console.log(err)
            setAlert({
                message: 'Error Adding Place !',
                type: 'error',
                visible: true,
            })
        }
    }

    const resetForm = (e) => {
        e.preventDefault()
        setPlace({
            name: '',
            location: '',
            postal_Code: '',
        })
        setAlert({
            message: '',
            type: 'success',
            visible: false,
        })
    }


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar title={'Add Places'} />
                <ContentWrapper>
                    <Form>
                        <AlertMessage message={alert.message} visible={alert.visible} setVisible={setAlert} closable={true} type={alert.type} />
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} value={place.name} onChange={(e) => { setPlace({ ...place, name: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <div className="relative">
                                <TextInput type='text' label='Location' required={true} value={place.location} onChange={(e) => { setPlace({ ...place, location: e.target.value }) }} />
                                <FiMapPin className="absolute right-2 top-3 text-gray-400" />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Postal Code' required={true} value={place.postal_Code} onChange={(e) => { setPlace({ ...place, postal_Code: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Nature of Business' required={true} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Address' required={true} />
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

export default AddPlace;
