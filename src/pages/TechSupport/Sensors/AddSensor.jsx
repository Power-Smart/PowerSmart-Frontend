import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import Form from '../../../components/Forms/Form'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'
import { useParams } from 'react-router-dom'
import InsideRoomSidebar from '../../../components/Sidebar/TechSupport/InsideRoomSidebar'
import { Select } from 'antd'
import { useSelector } from 'react-redux'
import { selecStyles } from '../../Customer/Places/selectItemList'
import KeyValueLabel from '../../../components/Forms/KeyValueLabel'
import { useNavigate } from 'react-router-dom'
import { addSensorUnitApi } from '../../../api/apiTechAssigns'


const AddSensor = () => {
    const navigate = useNavigate();
    const { customerID, placeID, roomID } = useParams();
    const user = useSelector(state => state.user.user);
    // const relaySet = []
    const [formData, setFormData] = useState({
        room_id: roomID,
        name: '',
        status: false,

    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await addSensorUnitApi(user.id, +roomID, formData);
            if (res.status === 201) {
                navigate(`/tech/${customerID}/place/${placeID}/room/${roomID}/sensor`)
            }
        } catch (error) {
            console.log(error);
        }


    }

    const resetForm = (e) => {
        e.preventDefault()
        setFormData({
            room_id: roomID,
            name: '',
            status: false,
        })
    }


    return (
        <PageWrapper>
            <InsideRoomSidebar customerID={customerID} placeID={placeID} roomID={roomID} />
            <PageContent>
                <TopBar title={'Add Sensor Unit'} baclLink={`/tech/${customerID}/place/${placeID}/room/${roomID}/sensor`} />
                <ContentWrapper>
                    <Form>
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <h1 className='mb-3'>Status : </h1>
                            <Select
                                options={[{ value: true, label: 'Active' }, { value: false, label: 'Inactive' }]}
                                styles={selecStyles}
                                defaultValue={formData.status}
                                onChange={(e) => { setFormData({ ...formData, status: e.value }) }}
                                value={formData.status}
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

export default AddSensor
