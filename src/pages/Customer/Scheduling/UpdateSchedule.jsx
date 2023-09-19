import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import RoomSidebar from '../../../components/Sidebar/Customer/RoomSidebar';
import PageContent from '../../../components/Wrappers/PageContent';
import TopBar from '../../../components/smallComps/TopBar';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import Form from '../../../components/Forms/Form';
import FormGroup from '../../../components/Forms/FormGroup';
import FormRowDual from '../../../components/Forms/FormRowDual';
import TextInput from '../../../components/Forms/TextInput';
import FormSubmitButton from '../../../components/Forms/FormSubmitButton';
import { Checkbox, TimePicker, Select, Switch } from 'antd';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { selectSchedules } from '../../../redux/slices/scheduleSlice';
import { updateScheduleApi } from '../../../api/apiSchedules';

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

const UpdateSchedule = () => {
    const { placeID, roomID, deviceID, scheduleID } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);
    const schedules = useSelector(selectSchedules);
    const timeFormat = 'HH:mm';
    const [formData, setFormData] = useState({
        deviceID,
        switch_status: true,
        placeId: placeID,
        name: '',
        startTime: '00:00',
        endTime: '00:00',
        startDay: '',
        endDay: '',
        repeat: true,
        scheduleOverride: false,
        automationOverride: false,
        manualOverride: false,
    });

    useEffect(() => {
        const schedule = schedules.find(schedule => +schedule.schedule_id === +scheduleID);
        setFormData({
            ...formData,
            name: schedule.schedule.name,
            switch_status: schedule.switch_status,
            startTime: (schedule.schedule.start_time).slice(0, 5),
            endTime: (schedule.schedule.end_time).slice(0, 5),
            startDay: schedule.schedule.start_day,
            endDay: schedule.schedule.end_day,
            // repeat: schedule.schedule.repeat,
            scheduleOverride: schedule.schedule.schedule_override,
            automationOverride: schedule.schedule.automation_override,
            manualOverride: schedule.schedule.manual_override,
            deviceID,
        })
    }, [schedules, user]);

    const updateSheduleData = async (e) => {
        e.preventDefault();
        try {
            const res = await updateScheduleApi(user.id, scheduleID, formData);
            if (res.status === 200) {
                console.log(res.data);
                navigate(`/places/${placeID}/rooms/${roomID}/controlpanel/${deviceID}/schedules`);
            } else {
                throw new Error(res.data);
            }
        } catch (err) {
            alert("can't update schedule !");
        }
    }

    const resetForm = (e) => {
        e.preventDefault();
        const schedule = schedules.find(schedule => +schedule.schedule_id === +scheduleID);
        setFormData({
            ...formData,
            name: schedule.schedule.name,
            switch_status: schedule.switch_status,
            startTime: (schedule.schedule.start_time).slice(0, 5),
            endTime: (schedule.schedule.end_time).slice(0, 5),
            startDay: schedule.schedule.start_day,
            endDay: schedule.schedule.end_day,
            repeat: true,
            scheduleOverride: schedule.schedule.schedule_override,
            automationOverride: schedule.schedule.automation_override,
            manualOverride: schedule.schedule.manual_override,
            deviceID,
        })
    }

    const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return (
        <PageWrapper>
            <RoomSidebar placeID={placeID} roomID={roomID} />
            <PageContent>
                <TopBar title={'Update Schedule'} baclLink={`/places/${placeID}/rooms/${roomID}/controlpanel/${deviceID}/schedules`} />
                <ContentWrapper>
                    <Form>
                        {/* <AlertMessage message={alert.message} visible={alert.visible} setVisible={setAlert} closable={true} type={alert.type} /> */}
                        <div className='text-right pb-2'>Schedule ID : {scheduleID}</div>
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} />
                        </FormGroup>
                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <label className='mr-3'>Device status : </label>
                                <Switch checkedChildren="on"
                                    unCheckedChildren="Off"
                                    onChange={(e) => { setFormData({ ...formData, switch_status: e }) }}
                                    checked={formData.switch_status}
                                    defaultChecked={formData.switch_status}
                                />
                            </div>
                            <Checkbox
                                defaultChecked={formData.repeat}
                                onChange={(e) => { setFormData({ ...formData, repeat: e.target.checked }) }}
                                checked={formData.repeat}
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
                                        <Switch checkedChildren="Allow"
                                            unCheckedChildren="Deny"
                                            checked={formData.automationOverride}
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
                                        <Switch checkedChildren="Allow"
                                            unCheckedChildren="Deny"
                                            checked={formData.manualOverride}
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
                                        <Switch checkedChildren="Allow"
                                            unCheckedChildren="Deny"
                                            checked={formData.scheduleOverride}
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
                                    <TimePicker
                                        defaultValue={dayjs(formData.startTime, timeFormat)}
                                        value={dayjs(formData.startTime, timeFormat)}
                                        format={timeFormat}
                                        onChange={(time, timeString) => setFormData({ ...formData, startTime: timeString })}
                                    />
                                    <Select
                                        showSearch
                                        placeholder="Select a day"
                                        optionFilterProp="children"
                                        onChange={(value) => { setFormData({ ...formData, startDay: value }) }}
                                        filterOption={filterOption}
                                        options={daysOfWeek}
                                        value={formData.startDay}
                                    />
                                </FormRowDual>
                            </div>
                        </div>
                        <hr className='my-5 border-gray-700 mx-5' />
                        <div className='flex flex-col'>
                            <h2>Schedule End</h2>
                            <div className='flex m-2 flex-col'>
                                <FormRowDual>
                                    <TimePicker
                                        value={dayjs(formData.endTime, timeFormat)}
                                        defaultValue={dayjs(formData.endTime, timeFormat)}
                                        format={timeFormat}
                                        onChange={(time, timeString) => setFormData({ ...formData, endTime: timeString })}
                                    />
                                    <Select
                                        showSearch
                                        placeholder="Select a day"
                                        optionFilterProp="children"
                                        filterOption={filterOption}
                                        options={daysOfWeek}
                                        onChange={(value) => { setFormData({ ...formData, endDay: value }) }}
                                        value={formData.endDay}
                                    />
                                </FormRowDual>
                            </div>
                        </div>

                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Update'} onClick={(e) => updateSheduleData(e)} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Reset'} onClick={resetForm} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default UpdateSchedule