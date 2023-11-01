import React, { useEffect, useState } from 'react';
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import PageContent from '../../../components/Wrappers/PageContent';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import { useSelector } from 'react-redux';
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar';
import Form from '../../../components/Forms/Form';
import FormGroup from '../../../components/Forms/FormGroup';
import TextInput from '../../../components/Forms/TextInput';
import FormSubmitButton from '../../../components/Forms/FormSubmitButton';
import { Select } from 'antd';
import { getPlacesApi } from '../../../api/apiPlaces';
import { addCustomerOrderRequestApi } from '../../../api/apiCustomerOrderRequest';

const ServiceRequest = () => {
    const user = useSelector(state => state.user.user);
    const customerID = user.id;

    const [places, setPlaces] = useState([]);
    const [place, setPlace] = useState('Select Place Type');
    const [orderDescription, setOrderDescription] = useState('');
    const [numberOfRooms, setNumberOfRooms] = useState('');
    const [numberOfDevices, setNumberOfDevices] = useState('');

    console.log(places);

    useEffect(() => {
        getPlacesApi(customerID)
            .then(res => {
                setPlaces(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const placeCategories = places.map(place => ({
        value: place.place_id,
        label: place.name,
    }));

    const requestOrder = () => {
        console.log(place);

        const selectedPlace = places.find(p => p.name === place);

        if (selectedPlace) {
            const place_id = selectedPlace.place_id;

            addCustomerOrderRequestApi({
                customer_id: customerID,
                place_id,
                order_description: orderDescription,
                number_of_rooms: numberOfRooms,
                number_of_devices: numberOfDevices,
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <ContentWrapper>
                    <Form>
                        <FormGroup>
                            <Select
                                value={place}
                                style={{ width: '100%' }}
                                onChange={value => setPlace(value)}
                                options={placeCategories}
                            />
                        </FormGroup>
                        <FormGroup>
                            <TextInput
                                type="text"
                                label="Order Description"
                                required={true}
                                onChange={e => setOrderDescription(e.target.value)}
                                value={orderDescription}
                            />
                        </FormGroup>
                        <FormGroup>
                            <TextInput
                                type="text"
                                label="Number of Rooms"
                                required={true}
                                onChange={e => setNumberOfRooms(e.target.value)}
                                value={numberOfRooms}
                            />
                        </FormGroup>
                        <FormGroup>
                            <TextInput
                                type="text"
                                label="Number of Devices"
                                required={true}
                                onChange={e => setNumberOfDevices(e.target.value)}
                                value={numberOfDevices}
                            />
                        </FormGroup>

                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton
                                backgroundColor="#0856CD"
                                urlLink="register"
                                buttonText="Request"
                                onClick={requestOrder}
                            />
                            <FormSubmitButton backgroundColor="#CE4444" urlLink="register" buttonText="Reset" />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    );
};

export default ServiceRequest;
