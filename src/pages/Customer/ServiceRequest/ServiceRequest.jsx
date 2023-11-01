import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Select } from 'antd';
import './service.css';
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import PageContent from '../../../components/Wrappers/PageContent';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar';
import Form from '../../../components/Forms/Form';
import FormGroup from '../../../components/Forms/FormGroup';
import TextInput from '../../../components/Forms/TextInput';
import FormSubmitButton from '../../../components/Forms/FormSubmitButton';
import TopBar from '../../../components/smallComps/TopBar';
import { getPlacesApi } from '../../../api/apiPlaces';
import { addCustomerOrderRequestApi, getAllCustomerOrderRequestsApi } from '../../../api/apiCustomerOrderRequest';

const ServiceRequest = () => {
    const user = useSelector(state => state.user.user);
    const customerID = user.id;

    const [places, setPlaces] = useState([]);
    const [place, setPlace] = useState('Select Place Type');
    const [orderDescription, setOrderDescription] = useState('');
    const [numberOfRooms, setNumberOfRooms] = useState('');
    const [numberOfDevices, setNumberOfDevices] = useState('');
    const [customerOrderRequests, setCustomerOrderRequests] = useState([]);
    const [acceptOrderRequest, setAcceptOrderRequest] = useState(false);

    useEffect(() => {
        getPlacesApi(customerID)
            .then(res => {
                setPlaces(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [customerID]);

    const placeCategories = places.map(place => ({
        value: place.place_id,
        label: place.name,
    }));

    const requestOrder = () => {
        addCustomerOrderRequestApi({
            customer_id: customerID,
            place_id: place,
            order_description: orderDescription,
            number_of_rooms: numberOfRooms,
            number_of_devices: numberOfDevices,
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            });
    };

    useEffect(() => {
        getAllCustomerOrderRequestsApi()
            .then(res => {
                setCustomerOrderRequests(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const filteredCustomerOrderRequests = customerOrderRequests.filter(
        customerOrderRequest => customerOrderRequest.user_id === customerID
    );
    console.log(customerOrderRequests[0].user_id, customerID);

    useEffect(() => {
        if (filteredCustomerOrderRequests.is_tech_support_assigned === true) {
            setAcceptOrderRequest(true);
        }
    }, [filteredCustomerOrderRequests]);


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar title="Service Request" backLink="./" />
                <ContentWrapper>
                    <div className="total">
                        <div className="form">
                            <Form>
                                {acceptOrderRequest === false ? (
                                    <>
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
                                        <div className="button-section w-2/3 text-center p-2 mx-auto flex space-x-20 items-center mt-8">
                                            <FormSubmitButton
                                                backgroundColor="#0856CD"
                                                urlLink="register"
                                                buttonText="Request"
                                                onClick={requestOrder}
                                            />
                                            <FormSubmitButton backgroundColor="#CE4444" urlLink="register" buttonText="Reset" />
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center text-2xl text-green-500">
                                        Your request has been accepted. Please contact our tech support for further assistance.
                                    </div>
                                )}
                            </Form>
                        </div>
                        <div className="introduction bg-blue-100 p-6 rounded-lg shadow-md">
                            <div className="text-blue-900 p-2">
                                <ul className="list-disc">
                                    <li className="text-[20px]">
                                        Request our PowerSmart service by filling out the form according to your specific requirements. 📝
                                    </li>
                                    <li className="text-[20px]">
                                        After submitting your request, please get in touch with our tech support for immediate assistance. 📞
                                    </li>
                                    <li className="text-[20px]">Experience the benefits of PowerSmart and enhance your quality of life. 😊</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    );
};

export default ServiceRequest;
