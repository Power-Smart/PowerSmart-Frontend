import React, { useEffect, useState } from 'react'
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


const UpdateRoom = () => {

    const dispatch = useDispatch();
    const customer = useSelector(selectCustomer);
    const navigate = useNavigate();
    const rooms = useSelector(selectRooms)
    const { placeID, roomID } = useParams();



    const [room, setRoom] = useState({
        name: '',
        windows_type: '',
        size: '',
        type: '',
    })

    const [alert, setAlert] = useState({
        message: '',
        type: 'success',
        visible: false,
    });


    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(updateRoom({ ...room, placeID: placeID, roomID: roomID }));
            setAlert({
                message: 'Room Updated Successfully!',
                type: 'success',
                visible: true,
            })
            navigate(-1)
        }
        catch (error) {
            console.log(error);
            setAlert({
                message: 'Error Updating Room!',
                type: 'error',
                visible: true,
            })
        }
    }


    const resetForm = (e) => {
        e.preventDefault()
        setRoom({
            name: '',
            windows_type: '',
            size: '',
            type: '',
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
                    windows_type: room.windows_type,
                    size: room.size,
                    type: room.type
                })
            }
        })
    }, [rooms]);


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

