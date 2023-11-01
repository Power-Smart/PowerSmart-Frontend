import React, { useEffect, useState } from 'react'
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
import { addDevice, fetchDevices, selectDevices, selectDevicesStatus, updateDevice } from '../../../redux/slices/techsupport/deviceSlice'
import { Select } from 'antd'
import { selecStyles } from '../../Customer/Places/selectItemList'

const EditDevice = () => {
    const { customerID, placeID, roomID, deviceID } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const relays = useSelector(selectRelays);
    const user = useSelector(state => state.user.user);
    const devicesStatus = useSelector(selectDevicesStatus);
    const devices = useSelector(selectDevices);
    const deviceObj = devices.find((device) => device.device_id === +deviceID);
    console.log(deviceObj);

    const relayObj = relays.map((relay) => ({ value: relay.relay_unit_id, label: `${relay.name} - #${relay.relay_unit_id}` }));

    const [formData, setFormData] = useState({
        name: '',
        socket: '',
        type: device_types[0].value,
        relay_unit_id: relayObj[0]?.value,
        is_active: false,
    });

    useEffect(() => {
        if (user.id) {
            dispatch(fetchRelays({ userID: user.id, placeID }));
            setFormData({
                name: deviceObj?.name,
                socket: deviceObj?.socket,
                type: deviceObj?.type,
                relay_unit_id: deviceObj?.relay_unit_id,
                is_active: deviceObj?.is_active,
            });
        }
    }, [user, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.name === '' || formData.socket === '') {
            return alert('Please fill all the fields');
        }
        else {
            const data = {
                name: formData.name,
                socket: formData.socket,
                type: formData.type,
                relay_unit_id: formData.relay_unit_id,
                is_active: formData.is_active,
            }
            dispatch(updateDevice({ userID: user.id, placeID, roomID, deviceID, data }));
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
            name: deviceObj?.name,
            socket: deviceObj?.socket,
            type: deviceObj?.type,
            relay_unit_id: deviceObj?.relay_unit_id,
            is_active: deviceObj?.is_active,
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
                                    <Select
                                        defaultValue={relayObj[0]?.value}
                                        style={selecStyles}
                                        onChange={(e) => { setFormData({ ...formData, relay_unit_id: e }) }}
                                        options={relayObj}
                                        value={formData.relay_unit_id}
                                    />
                                </>
                            }
                        </FormGroup>
                        <FormGroup>
                            <Select
                                defaultValue={formData.is_active}
                                style={selecStyles}
                                onChange={(e) => { setFormData({ ...formData, is_active: e }) }}
                                options={[{ value: true, label: 'Active' }, { value: false, label: 'Inactive' }]}
                                value={formData.is_active}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Select
                                defaultValue={device_types[0].value}
                                style={selecStyles}
                                onChange={(e) => { setFormData({ ...formData, type: e }) }}
                                options={device_types}
                                value={formData.type}
                            />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Socket' required={true} value={formData.socket} onChange={(e) => setFormData({ ...formData, socket: e.target.value })} />
                        </FormGroup>
                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Update'} onClick={handleSubmit} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Reset'} onClick={resetForm} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default EditDevice
