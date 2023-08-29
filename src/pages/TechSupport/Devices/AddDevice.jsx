import React, { useEffect, useRef, useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import Form from '../../../components/Forms/Form'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'
import SelectInput from '../../../components/Forms/SelectInput'
import { selectRelays, fetchRelays } from '../../../redux/slices/techsupport/relaySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { device_types } from '../data'
import InsideRoomSidebar from '../../../components/Sidebar/TechSupport/InsideRoomSidebar'
import { addDevice, selectDevicesStatus } from '../../../redux/slices/techsupport/deviceSlice'


const AddDevice = () => {
    const { customerID, placeID, roomID } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const relays = useSelector(selectRelays);
    const user = useSelector(state => state.user.user);
    const devicesStatus = useSelector(selectDevicesStatus);

    const relayObj = relays.map((relay) => ({ value: relay.relay_unit_id, label: `${relay.name} - #${relay.relay_unit_id}` }));

    const relayRef = useRef(null);
    const typeRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        socket: '',
    });

    useEffect(() => {
        if (user.id) {
            dispatch(fetchRelays({ userID: user.id, placeID }));
        }
        relayRef.current = relayObj[0]?.value;
        typeRef.current = device_types[0]?.value;
    }, [user, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (typeof (relayRef.current) !== 'number') relayRef.current = 0;
        if (typeof (typeRef.current) !== 'string') typeRef.current = undefined;
        if (formData.name === '' || formData.socket === '' || relayRef.current === 0 || typeRef.current === undefined) {
            return alert('Please fill all the fields');
        }
        else {
            const data = {
                name: formData.name,
                type: typeRef.current,
                socket: formData.socket,
                relay_unit_id: relayRef.current,
                is_active: false,
            }
            dispatch(addDevice({ userID: user.id, placeID, roomID, data }));
            if (devicesStatus === 'succeeded') {
                navigate(`/tech/${customerID}/place/${placeID}/room/${roomID}/devices`);
            } else {
                alert('Something went wrong');
            }
        }
    }

    const resetForm = (e) => {
        e.preventDefault()
        setFormData({
            name: '',
            socket: '',
        })
    }



    return (
        <PageWrapper>
            <InsideRoomSidebar customerID={customerID} placeID={placeID} roomID={roomID} />
            <PageContent>
                <TopBar title={'Add Devices'} baclLink={`/tech/${customerID}/place/${placeID}/room/${roomID}/devices`} />
                <ContentWrapper>
                    <Form>
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            {relays.length > 0 &&
                                <>
                                    <label htmlFor="relay">Select the relay : </label>
                                    <SelectInput required={true}
                                        categories={relayObj}
                                        ref={relayRef}
                                        value={(+relayRef.current)}
                                        onChange={(e) => { relayRef.current = +(e.target.value); console.log(relayRef.current) }}
                                    />
                                </>
                            }
                        </FormGroup>
                        <FormGroup>
                            <SelectInput required={true} categories={device_types} ref={typeRef} value={typeRef.current} onChange={(e) => { typeRef.current = e.target.value; console.log(typeRef.current) }} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Socket' required={true} value={formData.socket} onChange={(e) => setFormData({ ...formData, socket: e.target.value })} />
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

export default AddDevice
