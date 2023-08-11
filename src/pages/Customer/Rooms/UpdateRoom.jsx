import React, { useEffect, useState, useRef } from 'react'
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
import { useSelector, useDispatch } from 'react-redux'
import { selectCustomer } from '../../../redux/slices/customerSlice.js'
import { addRoom, updateRoom } from '../../../redux/slices/roomsSlice'
import AlertMessage from '../../../components/smallComps/AlertMessage'
import { useNavigate, useParams } from 'react-router-dom'
import { selectRooms } from '../../../redux/slices/roomsSlice'
import SelectInput from '../../../components/Forms/SelectInput'
import { windows_type, active_status, room_type } from './RoomSelectItemList'




const UpdateRoom = () => {

    const dispatch = useDispatch();
    const customer = useSelector(selectCustomer);
    const navigate = useNavigate();
    const rooms = useSelector(selectRooms)
    const { placeID, roomID } = useParams();



    const [room, setRoom] = useState({
        name: '',
        size: '',
    })

    const [alert, setAlert] = useState({
        message: '',
        type: 'success',
        visible: false,
    });


    const selectWindowType = useRef(null);
    const selectActiveStatus = useRef(null);
    const selectRoomType = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(updateRoom({ ...room, placeID: placeID, roomID: roomID, window_type: selectWindowType.current, active_status: selectActiveStatus.current, room_type: selectRoomType.current }));
            setAlert({
                message: 'Room Updated Successfully!',
                type: 'success',
                visible: true,
            })
        }
        catch (error) {
            console.log(error);
            setAlert({
                message: 'Error Updating Room!',
                type: 'error',
                visible: true,
            })
        }
        navigate(-1)
    }


    const resetForm = (e) => {
        e.preventDefault()
        setRoom({
            name: '',
            size: '',
        })
        setAlert({
            message: 'Form Cleaed',
            type: 'success',
            visible: false,
        })
    }

    useEffect(() => {
        rooms.map((room) => {
            if (room.room_id == roomID) {
                setRoom({
                    name: room.name,
                    size: room.size,
                })
                selectWindowType.current = room.windows_type
                selectActiveStatus.current = room.active_status
                selectRoomType.current = room.room_type
            }
        })
    }, [rooms, roomID]);


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar title={'Update Rooms'} />
                <ContentWrapper>
                    <Form>
                        <AlertMessage message={alert.message} visible={alert.visible} setVisible={setAlert} closable={true} type={alert.type} />
                        <FormGroup>
                            <TextInput type='text' label='Room Name' required={true} value={room.name} onChange={(e) => setRoom({ ...room, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <SelectInput required={true} categories={windows_type} ref={selectWindowType} onChange={(e) => { selectWindowType.current = e.target.value }} />
                        </FormGroup>
                        <FormGroup>
                            <SelectInput required={true} categories={active_status} ref={selectActiveStatus} onChange={(e) => selectActiveStatus.current = e.target.value} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='number' label='Room Size' required={true} value={room.size} onChange={(e) => setRoom({ ...room, size: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <SelectInput required={true} categories={room_type} ref={selectRoomType} onChange={(e) => { selectRoomType.current = e.target.value }} />
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

export default UpdateRoom;

