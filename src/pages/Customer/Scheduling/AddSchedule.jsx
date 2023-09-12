import React from 'react'
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
import { Checkbox, TimePicker, Select } from 'antd';
import dayjs from 'dayjs';

const daysOfWeek = [
    {
        value: 0,
        label: 'Sunday',
    },
    {
        value: 1,
        label: 'Monday',
    },
    {
        value: 2,
        label: 'Tuesday',
    },
    {
        value: 3,
        label: 'Wednesday',
    },
    {
        value: 4,
        label: 'Thursday',
    },
    {
        value: 5,
        label: 'Friday',
    },
    {
        value: 6,
        label: 'Saturday',
    },
]

const AddSchedule = () => {
    const { placeID, roomID, deviceID } = useParams();
    const timeFormat = 'HH:mm';
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return (
        <PageWrapper>
            <RoomSidebar />
            <PageContent>
                <TopBar title={'Add Schedules'} baclLink={`/places/${placeID}/rooms/${roomID}/controlpanel/${deviceID}/schedules`} />
                <ContentWrapper>
                    <Form>
                        {/* <AlertMessage message={alert.message} visible={alert.visible} setVisible={setAlert} closable={true} type={alert.type} /> */}
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} />
                        </FormGroup>
                        <div className='flex justify-end'>
                            <Checkbox><h1 className='text-white text-lg'>Recurring</h1></Checkbox>
                        </div>
                        <hr className='my-5 border-gray-700 mx-5' />
                        <div className='flex flex-col'>
                            <h2>Switch ON</h2>
                            <div className='flex m-2 flex-col'>
                                <FormRowDual>
                                    <FormGroup>
                                        <TimePicker defaultValue={dayjs('00:00', timeFormat)} format={timeFormat} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Select
                                            showSearch
                                            placeholder="Select a day"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={filterOption}
                                            options={daysOfWeek}
                                        />
                                    </FormGroup>
                                </FormRowDual>
                            </div>
                        </div>
                        <hr className='my-5 border-gray-700 mx-5' />
                        <div className='flex flex-col'>
                            <h2>Switch OFF</h2>
                            <div className='flex m-2 flex-col'>
                                <FormRowDual>
                                    <FormGroup>
                                        <TimePicker defaultValue={dayjs('00:00', timeFormat)} format={timeFormat} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Select
                                            showSearch
                                            placeholder="Select a day"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={filterOption}
                                            options={daysOfWeek}
                                        />
                                    </FormGroup>
                                </FormRowDual>
                            </div>
                        </div>
                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Add'} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Clear'} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default AddSchedule