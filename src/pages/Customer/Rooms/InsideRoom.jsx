import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Indicator from '../../../components/smallComps/Indicator'
import SwitchCard from '../../../components/Cards/SwitchCard'
import RoomSidebar from '../../../components/Sidebar/Customer/RoomSidebar'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getDevicesData } from '../../../api/apiDevices'
import { selectRooms, selectRoomsStatus } from '../../../redux/slices/roomsSlice'

const dataSet = [
    {
        type: 'FAN',
        device: 'Fan 1',
        lastSeen: '2hrs',
        power: '25',
        status: 'on'
    },
    {
        type: 'BULB',
        device: 'Bulb 1',
        lastSeen: '2hrs',
        power: '15',
        status: 'off'
    },
    {
        type: 'AC',
        device: 'AC 1',
        lastSeen: '2hrs',
        power: '25',
        status: 'on'
    },
];

const InsideRoom = () => {
    const { placeID, roomID } = useParams();
    const user = useSelector(state => state.user.user);
    const rooms = useSelector(selectRooms);
    const room = rooms.find(room => room.room_id == roomID);
    const [deviceData, setDeviceData] = useState([]);
    const [switches, setSwitches] = useState([]);
    const fetchDevicesData = async () => {
        const devData = await getDevicesData(user.id, roomID);
        setDeviceData(devData);
        const tempSwitches = [];
        devData.forEach(device => {
            tempSwitches.push({ "id": device.device_id, "status": device.deviceSwitch.switch_status });
        });
        setSwitches(tempSwitches);
        console.log(deviceData);
    }


    useEffect(() => {
        if (user) {
            fetchDevicesData();
            const interval = setInterval(fetchDevicesData, 5000);
            return () => clearInterval(interval);
        }
    }, [user]);

    return (
        <PageWrapper >
            <RoomSidebar placeID={placeID} roomID={roomID} />
            <PageContent >
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Inside Room" baclLink={`/places/${placeID}/rooms`} />
                <ContentWrapper>
                    {deviceData.length > 0 ? <div className='m-4 py-4 px-8 border-[#0693F3] border-2 rounded-lg bg-[#151528]'>
                        <div className='p-3'>
                            <div className={`flex items-center ` + (room.is_active ? "text-green-400" : "text-red-400")}>
                                <Indicator color={room.is_active ? `bg-green-400` : `bg-red-400`} />
                                <div className='text-sm'>{room.is_active ? "Active" : "Disabled"}</div>
                            </div>
                            <h1 className='text-xl mt-2'>{room.name} Room</h1>
                        </div>
                        <hr className='m-2 border-gray-500' />
                        <div className='px-6 py-4 '>
                            <h3>My Devices</h3>
                            <div className='py-4 flex flex-wrap'>
                                {deviceData.map((device, index) => (
                                    <SwitchCard key={index}
                                        id={device.device_id}
                                        status={device.deviceSwitch.switch_status}
                                        validity={device.deviceSwitch.status}
                                        device={device.name}
                                        switch_toggle={switches.find(switches => switches.id === device.device_id)}
                                        setSwitches={setSwitches}
                                        type={device.type}
                                        is_active={device.is_active}
                                        schedule={device.schedule}
                                    />
                                ))}
                            </div>
                        </div>
                    </div> :
                        <div className='m-4 py-4 px-8 text-center'>No Devices Found</div>}
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default InsideRoom