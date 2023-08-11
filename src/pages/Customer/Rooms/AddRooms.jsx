import React, { useRef, useState } from 'react'
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
import { addRoom, selectRoomsStatus } from '../../../redux/slices/roomsSlice'
import AlertMessage from '../../../components/smallComps/AlertMessage'
import { selectPlaces } from '../../../redux/slices/placesSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { windows_type, active_status, room_type } from './RoomSelectItemList'
import SelectInput from '../../../components/Forms/SelectInput'



const AddRooms = () => {

    const dispatch = useDispatch();
    const customer = useSelector(selectCustomer);
    const navigate = useNavigate();
    const { placeID } = useParams();
    const user = useSelector(state => state.user.user)


    const [room, setRoom] = useState({
        name: '',
        size: '',
    })

    const [alert, setAlert] = useState({
        message: '',
        type: 'success',
        visible: false,
    });


    const selectWindowType = useRef(windows_type[0].value);
    const selectActiveStatus = useRef(active_status[0].value);
    const selectRoomType = useRef(room_type[0].value);

    
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(addRoom({ ...room, id: user.id, placeID: placeID, windows_type:selectWindowType.current,active_status:selectActiveStatus.current,room_type:selectRoomType.current }))
            setAlert({
                message: 'Room Added Successfully!',
                type: 'success',
                visible: true,
            })
        }
        catch (error) {
            console.log(error);
            setAlert({
                message: 'Error Adding Place!',
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
        selectWindowType.current = windows_type[0].value;
        selectActiveStatus.current = active_status[0].value;
        selectRoomType.current = room_type[0].value;
        setAlert({
            message: 'Form Cleaed',
            type: 'success',
            visible: false,
        })
    }


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar title={'Add Rooms'} />
                <ContentWrapper>
                    <Form>
                        <AlertMessage message={alert.message} visible={alert.visible} setVisible={setAlert} closable={true} type={alert.type} />
                        <FormGroup>
                            <TextInput type='text' label='Room Name' required={true} value={room.name} onChange={(e) => setRoom({ ...room, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <SelectInput required={true} categories={windows_type} ref={selectWindowType} onChange={(e) => {selectWindowType.current = e.target.value}} />
                        </FormGroup>
                        <FormGroup>
                            <SelectInput required={true} categories={active_status} ref={selectActiveStatus} onChange = {(e) => selectActiveStatus.current = e.target.value} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='number' label='Room Size' required={true} value={room.size} onChange={(e) => setRoom({ ...room, size: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <SelectInput required={true} categories={room_type} ref={selectRoomType} onChange = {(e)=>{selectRoomType.current = e.target.value}} />
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

