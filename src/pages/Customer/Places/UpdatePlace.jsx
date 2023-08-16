import React, { useState, useEffect, useRef } from 'react'
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
import { updatePlace } from '../../../redux/slices/placesSlice'
import { useNavigate, useParams } from 'react-router-dom'
import AlertMessage from '../../../components/smallComps/AlertMessage'
import { selectPlaces } from '../../../redux/slices/placesSlice'
import SelectInput from '../../../components/Forms/SelectInput'
import { categories, countries, cities } from './selectItemList'

const UpdatePlace = () => {
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const places = useSelector(selectPlaces);
    const { placeID } = useParams()
    // console.log(user.id);



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

    const selectType = useRef(null);
    const selectCity = useRef(null);
    const selectCountry = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(updatePlace({ ...place, place_id: placeID, id: user.id, place_type: selectType.current, city: selectCity.current, country: selectCountry.current }))
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
        setAlert({
            message: '',
            type: 'success',
            visible: false,
        })
    }


    useEffect(() => {
        places.forEach(place => {
            if (place.place_id == placeID) {
                setPlace({
                    name: place.name,
                    address: place.address,
                    postal_code: place.postal_code,
                    time_zone: (place.time_zone) ? place.time_zone : '',
                    is_active: place.is_active,
                })
                selectType.current = place.place_type
                selectCity.current = place.city
                selectCountry.current = place.country
            }
        })
    }, [places, placeID]);


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar title={'Update Place'} baclLink='/places' />
                <ContentWrapper>
                    <Form>
                        <AlertMessage message={alert.message} visible={alert.visible} setVisible={setAlert} closable={true} type={alert.type} />
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} value={place.name} onChange={(e) => { setPlace({ ...place, name: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <div className="relative">
                                <TextInput type='text' label='Location' required={true} value={place.address} onChange={(e) => { setPlace({ ...place, address: (e.target.value === undefined) ? "" : e.target.value }) }} />
                                <FiMapPin className="absolute right-2 top-3 text-gray-400" />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <SelectInput required={true} categories={categories} selectedOption={selectType.current} ref={selectType} onChange={(e) => { selectType.current = e.target.value }} />
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
                                <SelectInput required={true} categories={cities} selectedOption={selectCity.current} ref={selectCity} onChange={(e) => { selectCity.current = e.target.value }} />
                            </FormGroup>
                            <FormGroup>
                                <SelectInput required={true} categories={countries} selectedOption={selectCountry.current} ref={selectCountry} onChange={(e) => { selectCountry.current = e.target.value }} />
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

export default UpdatePlace;
