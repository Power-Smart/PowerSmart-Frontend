import React, { useEffect, useRef, useState } from 'react'
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
import { relay_type } from '../../Customer/Rooms/RoomSelectItemList'
import { useParams, useNavigate } from 'react-router-dom'
import { addRelayUnitToPlace } from '../../../api/apiTechAssigns'
import { useDispatch, useSelector } from 'react-redux'
import { selectRelays, selectRelaysStatus, updateRelay } from '../../../redux/slices/techsupport/relaySlice'

const EditRelay = () => {
    const dispatch = useDispatch();
    const { customerID, placeID, relayID } = useParams();
    const user = useSelector(state => state.user.user);
    const relayUnits = useSelector(selectRelays);
    const relaysStatus = useSelector(selectRelaysStatus);
    const navigate = useNavigate();
    const categoryRef = useRef(null);
    const [data, setData] = useState({});

    useEffect(() => {
        if (user.id) {
            const relay = relayUnits.find((relay) => relay.relay_unit_id === +relayID);
            if (relay) {
                setData({ name: relay.name, description: relay.description, relay_unit_id: relay.relay_unit_id });
                categoryRef.current = relay.category;
            } else {
                navigate(`/tech/${customerID}/place/${placeID}/relays`);
            }
        }
    }
        , [user]);


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
            dispatch(updateRelay({ placeID, userID: user.id, relayID, data: { ...data, category: categoryRef.current } }))
            if (relaysStatus === "succeeded") {
                navigate(`/tech/${customerID}/place/${placeID}/relays`);
            } else {
                alert("Something went wrong");
            }
        }
    }

    const cancelForm = (e) => {
        e.preventDefault()
        const relay = relayUnits.find((relay) => relay.relay_unit_id === +relayID);
        if (relay) {
            setData({ name: relay.name, description: relay.description });
            categoryRef.current = relay.category;
        }
    }


    return (
        <PageWrapper>
            <RoomSidebar customerID={customerID} placeID={placeID} />
            <PageContent>
                <TopBar title={'Update Relay'} baclLink={`/tech/${customerID}/place/${placeID}/relays`} />
                <ContentWrapper>
                    <Form>
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Description' required={true} value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <SelectInput required={true} categories={relay_type} ref={categoryRef} value={categoryRef.current} onChange={(e) => { categoryRef.current = e.target.value; console.log(categoryRef.current) }} />
                        </FormGroup>
                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Update'} onClick={handleSubmit} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Reset'} onClick={cancelForm} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default EditRelay
