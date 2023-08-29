import React, { useRef, useState } from 'react'
import RoomSidebar from '../../../components/Sidebar/TechSupport/RoomSidebar'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import Form from '../../../components/Forms/Form'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'
import SelectInput from '../../../components/Forms/SelectInput'
import { useParams, useNavigate } from 'react-router-dom'
import { addRelayUnitToPlace } from '../../../api/apiTechAssigns'
import { useDispatch, useSelector } from 'react-redux'
import { addRelay, selectRelays, selectRelaysStatus } from '../../../redux/slices/techsupport/relaySlice'
import { relay_types } from '../data'

const AddRelay = () => {
    const { customerID, placeID } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const relaysStatus = useSelector(selectRelaysStatus);
    const navigate = useNavigate();
    const categoryRef = useRef(null);
    const [data, setData] = useState({
        name: '',
        description: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (categoryRef.current !== "M" && categoryRef.current !== "L") {
            categoryRef.current = "M";
        }
        if (user.id) {
            if (data.name === '' || data.description === '') {
                alert("Please fill all the fields");
                return;
            }
            const newRelay = { ...data, category: categoryRef.current };
            dispatch(addRelay({ data: newRelay, placeID, userID: user.id }));
            // const response = await addRelayUnitToPlace(user.id, placeID, { ...data, category: categoryRef.current });
            if (relaysStatus === "succeded") {
                navigate(`/tech/${customerID}/place/${placeID}/relays`);
            } else {
                alert("Something went wrong");
            }
        }
    }

    const resetForm = (e) => {
        e.preventDefault()
        setData({
            name: '',
            description: '',
        })
    }


    return (
        <PageWrapper>
            <RoomSidebar customerID={customerID} placeID={placeID} />
            <PageContent>
                <TopBar title={'Add Relay'} baclLink={`/tech/${customerID}/place/${placeID}/relays`} />
                <ContentWrapper>
                    <Form>
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Description' required={true} value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <SelectInput required={true} categories={relay_types} ref={categoryRef} value={categoryRef.current} onChange={(e) => { categoryRef.current = e.target.value }} />
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

export default AddRelay
