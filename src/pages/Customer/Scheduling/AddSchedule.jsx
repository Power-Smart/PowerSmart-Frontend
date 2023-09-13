import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import RoomSidebar from '../../../components/Sidebar/Customer/RoomSidebar';
import PageContent from '../../../components/Wrappers/PageContent';
import TopBar from '../../../components/smallComps/TopBar';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import Form from '../../../components/Forms/Form';
import FormGroup from '../../../components/Forms/FormGroup';
import FormRowDual from '../../../components/Forms/FormRowDual';
import SelectInput from '../../../components/Forms/SelectInput';
import TextInput from '../../../components/Forms/TextInput';
import FormSubmitButton from '../../../components/Forms/FormSubmitButton';
import { Checkbox, TimePicker, Select, Switch } from 'antd';
import dayjs from 'dayjs';

const daysOfWeek = [
    {
        value: "sun",
        label: 'Sunday',
    },
    {
        value: "mon",
        label: 'Monday',
    },
    {
        value: "tue",
        label: 'Tuesday',
    },
    {
        value: "wed",
        label: 'Wednesday',
    },
    {
        value: "thu",
        label: 'Thursday',
    },
    {
        value: "fri",
        label: 'Friday',
    },
    {
        value: "sat",
        label: 'Saturday',
    },
]

const AddSchedule = () => {
    const { placeID, roomID, deviceID } = useParams();
    const timeFormat = 'HH:mm';
    const [formData, setFormData] = useState({
        status: true,
        deviceId: deviceID,
        placeId: placeID,
        name: '',
        startTime: dayjs('00:00', timeFormat),
        endTime: '',
        startDay: '',
        endDay: '',
        repeat: true,
        scheduleOverride: false,
        automationOverride: false,
        manualOverride: false,
    });
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const addSheduleData = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return (
        <PageWrapper>
            <RoomSidebar placeID={placeID} roomID={roomID} />
            <PageContent>
                <TopBar title={'Add Schedules'} baclLink={`/places/${placeID}/rooms/${roomID}/controlpanel/${deviceID}/schedules`} />
                <ContentWrapper>
                    <Form>
                        {/* <AlertMessage message={alert.message} visible={alert.visible} setVisible={setAlert} closable={true} type={alert.type} /> */}
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} />
                        </FormGroup>
                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <label className='mr-3'>Device state : </label>
                                <Switch checkedChildren="on"
                                    unCheckedChildren="Off"
                                    defaultChecked={formData.status}
                                />
                            </div>
                            <Checkbox
                                defaultChecked={formData.repeat}
                                onChange={(e) => { setFormData({ ...formData, repeat: e.target.checked }) }}
                            ><h1 className='text-white text-lg'>Recurring</h1></Checkbox>
                        </div>
                        <hr className='my-5 border-gray-700 mx-5' />
                        <table className='table-auto mx-auto'>
                            <tbody>
                                <tr>
                                    <td className='py-2'>
                                        <label className='mr-3 my-1'>Automation Override : </label>
                                    </td>
                                    <td>
                                        <Switch checkedChildren="on"
                                            unCheckedChildren="Off"
                                            defaultChecked={formData.automationOverride}
                                            onChange={(state) => { setFormData({ ...formData, automationOverride: state }) }}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='py-2'>
                                        <label className='mr-3 my-1'>Manual Override : </label>
                                    </td>
                                    <td>
                                        <Switch checkedChildren="on"
                                            unCheckedChildren="Off"
                                            defaultChecked={formData.manualOverride}
                                            onChange={(state) => { setFormData({ ...formData, manualOverride: state }) }}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='py-2'>
                                        <label className='mr-3 my-1'>Schedule Override : </label>
                                    </td>
                                    <td>
                                        <Switch checkedChildren="on"
                                            unCheckedChildren="Off"
                                            defaultChecked={formData.scheduleOverride}
                                            onChange={(state) => { setFormData({ ...formData, scheduleOverride: state }) }}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr className='my-5 border-gray-700 mx-5' />
                        <div className='flex flex-col'>
                            <h2>Schedule Start</h2>
                            <div className='flex m-2 flex-col'>
                                <FormRowDual>
                                    <TimePicker defaultValue={dayjs('00:00', timeFormat)} format={timeFormat} />
                                    <Select
                                        showSearch
                                        placeholder="Select a day"
                                        optionFilterProp="children"
                                        onChange={(value) => { setFormData({ ...formData, startDay: value }) }}
                                        filterOption={filterOption}
                                        options={daysOfWeek}
                                    />
                                </FormRowDual>
                            </div>
                        </div>
                        <hr className='my-5 border-gray-700 mx-5' />
                        <div className='flex flex-col'>
                            <h2>Schedule End</h2>
                            <div className='flex m-2 flex-col'>
                                <FormRowDual>
                                    <TimePicker defaultValue={dayjs('00:00', timeFormat)} format={timeFormat} />
                                    <Select
                                        showSearch
                                        placeholder="Select a day"
                                        optionFilterProp="children"
                                        filterOption={filterOption}
                                        options={daysOfWeek}
                                        onChange={(value) => { setFormData({ ...formData, endDay: value }) }}

                                    />
                                </FormRowDual>
                            </div>
                        </div>

                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Add'} onClick={addSheduleData} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Clear'} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default AddSchedule