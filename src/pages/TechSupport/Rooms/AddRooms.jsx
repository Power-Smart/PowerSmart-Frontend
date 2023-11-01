import React, { useEffect, useRef, useState } from 'react'
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
import FormRowDual from '../../../components/Forms/FormRowDual'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import RoomSidebar from '../../../components/Sidebar/TechSupport/RoomSidebar'
import { useSelector, useDispatch } from 'react-redux'
import { selectCustomer } from '../../../redux/slices/customerSlice.js'
import { addRoom, selectRoomsStatus } from '../../../redux/slices/roomsSlice'
import AlertMessage from '../../../components/smallComps/AlertMessage'
import { selectPlaces } from '../../../redux/slices/placesSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { windows_type, active_status, room_type } from '../../Customer/Rooms/RoomSelectItemList'
import SelectInput from '../../../components/Forms/SelectInput'
import { Select } from 'antd';
import { selecStyles } from '../../Customer/Places/selectItemList'
import { addRoomApi } from '../../../api/apiTechAssigns'


const AddRooms = () => {
    const navigate = useNavigate();
    const { customerID, placeID } = useParams();
    const user = useSelector(state => state.user.user)


    const [room, setRoom] = useState({
        name: '',
        size: '',
        active_status: active_status[0].value,
        room_type: room_type[0].value,
        window_type: windows_type[0].value,
    })

    const [alert, setAlert] = useState({
        message: '',
        type: 'success',
        visible: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await addRoomApi(user.id, +placeID, { ...room, id: customerID });
            if (res.status === 201) {
                setAlert({
                    message: 'Room Added Successfully!',
                    type: 'success',
                    visible: true,
                })
                navigate(`/tech/${customerID}/place/${placeID}/rooms`)
            }
        }
        catch (error) {
            console.log(error);
            setAlert({
                message: 'Error Adding Place!',
                type: 'error',
                visible: true,
            })
        }
    }


    const resetForm = (e) => {
        e.preventDefault()
        setRoom({
            name: '',
            size: '',
            active_status: active_status[0].value,
            room_type: room_type[0].value,
            window_type: windows_type[0].value,
        })
        setAlert({
            message: 'Form Cleaed',
            type: 'success',
            visible: false,
        })
    }


    return (
        <PageWrapper>
            <RoomSidebar customerID={customerID} placeID={placeID} />
            <PageContent>
                <TopBar title={'Add Rooms'} baclLink={`/places/${placeID}/rooms`} />
                <ContentWrapper>
                    <Form>
                        <AlertMessage message={alert.message} visible={alert.visible} setVisible={setAlert} closable={true} type={alert.type} />
                        <FormGroup>
                            <TextInput type='text' label='Room Name' required={true} value={room.name} onChange={(e) => setRoom({ ...room, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Select
                                defaultValue={windows_type[0].value}
                                style={selecStyles}
                                onChange={(e) => setRoom({ ...room, window_type: e })}
                                options={windows_type}
                                value={room.window_type}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Select
                                defaultValue={active_status[0].value}
                                style={selecStyles}
                                onChange={(e) => setRoom({ ...room, active_status: e })}
                                options={active_status}
                                value={room.active_status}
                            />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='number' label='Room Size ( Ft x Ft )' required={true} value={room.size} onChange={(e) => setRoom({ ...room, size: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Select
                                defaultValue={room_type[0].value}
                                style={selecStyles}
                                onChange={(e) => setRoom({ ...room, room_type: e })}
                                options={room_type}
                                value={room.room_type}
                            />
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

export default AddRooms;

