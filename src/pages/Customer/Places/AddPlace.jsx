import React, { useRef, useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Sidebar from '../../../components/Sidebar/Sidebar'
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
import { selectCustomer } from '../../../redux/slices/customerSlice'
import { addPlace } from '../../../redux/slices/placesSlice'
import { useNavigate } from 'react-router-dom'
import AlertMessage from '../../../components/smallComps/AlertMessage'
import SelectInput from '../../../components/Forms/SelectInput'
import { categories, countries, cities } from './selectItemList'


const AddPlace = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)

    const [place, setPlace] = useState({
        name: '',
        address: '',
        postal_code: '',
        time_zone: '',
        is_active: false,
    })

    
    const [alert, setAlert] = useState({
        message: '',
        type: 'success',
        visible: false,
    });


    const selectType = useRef(categories[0].value);
    const selectCity = useRef(cities[0].value);
    const selectCountry = useRef(countries[0].value);

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(addPlace({ ...place, id: user.id, place_type: selectType.current, city: selectCity.current, country: selectCountry.current }))
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
            time_zone: '',
            is_active: false,
        })
        selectType.current = categories[0].value;
        selectCity.current = cities[0].value;
        selectCountry.current = countries[0].value;
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
                                <TextInput type='text' label='address' required={true} value={place.address} onChange={(e) => { setPlace({ ...place, address: e.target.value }) }} />
                                <FiMapPin className="absolute right-2 top-3 text-gray-400" />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <SelectInput required={true} categories={categories} ref={selectType} onChange={(e) => { selectType.current = e.target.value }} />
                        </FormGroup>
                        <FormRowDual>
                            <FormGroup>
                                <TextInput type='text' label='Postal Code' required={true} value={place.postal_code} onChange={(e) => { setPlace({ ...place, postal_code: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <TextInput type='text' label='Time Zone' required={true} value={place.time_zone} onChange={(e) => { setPlace({ ...place, time_zone: e.target.value }) }} />
                            </FormGroup>
                        </FormRowDual>
                        <FormRowDual>
                            <FormGroup>
                                <SelectInput required={true} categories={cities} ref={selectCity} onChange={(e) => { selectCity.current = e.target.value }} />
                            </FormGroup>
                            <FormGroup>
                                <SelectInput required={true} categories={countries} ref={selectCountry} onChange={(e) => { selectCountry.current = e.target.value }} />
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
