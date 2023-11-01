import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import KeyValueLabel from '../../../components/Forms/KeyValueLabel';
import SensorData from './SensorData';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSensorUnitApi, getSensorUnitOfRoom, updateSensorUnit } from '../../../api/apiTechAssigns';
import Form from '../../../components/Forms/Form';
import FormGroup from '../../../components/Forms/FormGroup';
import TextInput from '../../../components/Forms/TextInput';
import { Switch } from 'antd';
import Swal from 'sweetalert2';

const SensorCard = ({ customerID, placeID, roomID, setHasSensor, setAvilUnitCount }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const [sensorUnit, setSensorUnit] = useState({});
    const [editToggle, setEditToggle] = useState(false);

    const getSensorUnitInfo = async () => {
        const data = await getSensorUnitOfRoom(user.id, placeID, roomID)
        if (data.status === 200) {
            setSensorUnit(data.data);
        }
        else { setSensorUnit({}); }
        if (data.data.sensor_unit_id)
            setHasSensor(true)
        else
            setHasSensor(false)
    }

    const saveChanges = async () => {
        const data = await updateSensorUnit(roomID, sensorUnit.sensor_unit_id, sensorUnit);
        if (data.status === 200)
            setSensorUnit(data.data);
        setEditToggle(!editToggle);
    }

    const deleteSensorUnit = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed && user.id) {
                await deleteSensorUnitApi(user.id, placeID, roomID, sensorUnit.sensor_unit_id);
                setSensorUnit({});
                setHasSensor(false);
                setAvilUnitCount(prev => prev + 1);
            }
        })
    }

    useEffect(() => {
        if (user.id) {
            getSensorUnitInfo();
        }
    }, [user, dispatch]);

    return ((sensorUnit.sensor_unit_id) ? (
        <div className={`text-sm flex flex-col border-solid border border-secondaryBlue ${editToggle ? "w-96" : "w-[90%]"} h-auto bg-[#1C1C2E] rounded-3xl shadow-md px-2 pb-5 my-5 m-auto justify-evenly`}>
            {!editToggle && <div className='flex flex-col m-4'>
                <KeyValueLabel name='Sensor No' value={sensorUnit.sensor_unit_id} />
                <KeyValueLabel name='Name' value={sensorUnit.name} />
                {/* <KeyValueLabel name='Type' value={sensorUnit.category === null ? "Default" : sensorUnit.category} /> */}
                <KeyValueLabel name='Status' value={sensorUnit.status ? "Active" : "Disabled"} />
            </div>}
            {editToggle &&
                <div className='mx-8 my-8'>
                    <KeyValueLabel name='Sensor No' value={sensorUnit.sensor_unit_id} />
                    <FormGroup>
                        <KeyValueLabel name='Status' isComp={true} >
                            <></>
                        </KeyValueLabel>
                        <Switch
                            checkedChildren="Activated"
                            unCheckedChildren="Deactivated"
                            defaultChecked={sensorUnit.status}
                            onChange={(checked) => { setSensorUnit({ ...sensorUnit, status: checked }); }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextInput type="text" label="Name" required={true} value={sensorUnit?.name} onChange={(e) => { setSensorUnit({ ...sensorUnit, name: e.target.value }) }} />
                    </FormGroup>
                    {/* <FormGroup>
                        <TextInput type="text" label="Type" required={true} value={sensorUnit?.category} onChange={(e) => { setSensorUnit({ ...sensorUnit, category: e.target.value }) }} />
                    </FormGroup> */}
                    <button className="px-4 py-1 m-2 text-sm bg-primaryBtn rounded-xl text-black bg-[#83BCFF]" onClick={saveChanges}>
                        Save Changes
                    </button>
                    <button className="px-4 py-1 m-2 text-sm bg-primaryBtn rounded-xl text-black bg-[#FF8383]" onClick={() => { getSensorUnitInfo(); setEditToggle(!editToggle); }}>
                        Cancel Editing
                    </button>
                </div>}
            {!editToggle && <div className='text-sm flex mx-10 my-2 flex-col'>
                <details className='mx-0 my-2'>
                    <summary className='pb-2 text-[#83BCFF]'>
                        Recent Sensor Logs
                    </summary>
                    <SensorData placeID={placeID} roomID={roomID} sensor_unit_id={sensorUnit.sensor_unit_id} />
                </details>
            </div>}
            <div className="flex justify-end items-end">
                {!editToggle &&
                    <button className="px-4 py-1 m-2 w-20 text-sm bg-primaryBtn rounded-xl text-black bg-[#83BCFF]" onClick={() => setEditToggle(!editToggle)}>
                        Edit
                    </button>
                }
                {!editToggle &&
                    <button className="px-4 py-1 m-2 w-20 text-sm bg-secondaryBtn rounded-xl text-black bg-[#FF8383]" onClick={deleteSensorUnit}>
                        Delete
                    </button>}
            </div>
        </div>
    ) : <h1 className='text-center m-3 mx-auto'>No Sensor unit to display</h1>)
}

export default SensorCard