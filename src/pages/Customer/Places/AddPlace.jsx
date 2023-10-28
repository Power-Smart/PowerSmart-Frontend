import React, { useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import Form from '../../../components/Forms/Form'
import FormRowDual from '../../../components/Forms/FormRowDual'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'
import { FiMapPin } from 'react-icons/fi';
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import { useSelector, useDispatch } from 'react-redux'
import { addPlace } from '../../../redux/slices/placesSlice'
import { useNavigate } from 'react-router-dom'
import AlertMessage from '../../../components/smallComps/AlertMessage'
import { Select } from 'antd';
import { categories, countries, cities, time_zones, selecStyles } from './selectItemList'


const AddPlace = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)

    const [place, setPlace] = useState({
        name: '',
        address: '',
        postal_code: '',
        time_zone: time_zones[0].value,
        place_type: categories[0].value,
        city: cities[0].value,
        country: countries[0].value,
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
            dispatch(addPlace({ ...place, id: user.id }))
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
        navigate(-1)
    }

    const resetForm = (e) => {
        e.preventDefault()
        setPlace({
            name: '',
            address: '',
            postal_code: '',
            time_zone: time_zones[0].value,
            place_type: categories[0].value,
            city: cities[0].value,
            country: countries[0].value,
            is_active: false,
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
                <TopBar title={'Add Places'} baclLink='/places' />
                <ContentWrapper>
                    <Form>
                        <AlertMessage message={alert.message} visible={alert.visible} setVisible={setAlert} closable={true} type={alert.type} />
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} value={place.name} onChange={(e) => { setPlace({ ...place, name: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <div className="relative">
                                <TextInput type='text' label='address' required={true} value={place.address} onChange={(e) => { setPlace({ ...place, address: e.target.value }) }} />
                                <FiMapPin className="absolute right-2 top-3 text-gray-400" />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Select
                                defaultValue={categories[0].value}
                                style={selecStyles}
                                onChange={(value) => { setPlace({ ...place, place_type: value }) }}
                                options={categories}
                                value={place.place_type}
                            />
                        </FormGroup>
                        <FormRowDual>
                            <FormGroup>
                                <TextInput type='text' label='Postal Code' required={true} value={place.postal_code} onChange={(e) => { setPlace({ ...place, postal_code: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Select
                                    defaultValue={time_zones[0].value}
                                    style={selecStyles}
                                    onChange={(value) => { setPlace({ ...place, time_zone: value }) }}
                                    options={time_zones}
                                    value={place.time_zone}
                                />
                            </FormGroup>
                        </FormRowDual>
                        <FormRowDual>
                            <FormGroup>
                                <Select
                                    defaultValue={cities[0].value}
                                    style={selecStyles}
                                    onChange={(value) => { setPlace({ ...place, city: value }) }}
                                    options={cities}
                                    value={place.city}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Select
                                    defaultValue={countries[0].value}
                                    style={selecStyles}
                                    onChange={(value) => { setPlace({ ...place, country: value }) }}
                                    options={countries}
                                    value={place.country}
                                />
                            </FormGroup>
                        </FormRowDual>
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
