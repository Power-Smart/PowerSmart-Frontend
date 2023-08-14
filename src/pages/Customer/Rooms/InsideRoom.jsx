import React, { useEffect } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Indicator from '../../../components/smallComps/Indicator'
import SwitchCard from '../../../components/Cards/SwitchCard'
import RoomSidebar from '../../../components/Sidebar/Customer/RoomSidebar'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getDevices } from '../../../api/apiDevices'

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
    const [devices, setDevices] = React.useState([]);

    useEffect(() => {
        const fetchDevicesData = async () => {
            const devices = await getDevices(user.id, roomID);
            setDevices(devices);
        }
        if (user) {
            fetchDevicesData();
            console.log(devices);
        }
    }, [user]);

    return (
        <PageWrapper >
            <RoomSidebar placeID={placeID} roomID={roomID} />
            <PageContent >
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Inside Room" baclLink={`/places/${placeID}/rooms`} />
                <ContentWrapper>
                    <div className='m-4 py-4 px-8 border-[#0693F3] border-2 rounded-lg bg-[#151528]'>
                        <div className='p-3'>
                            <div className='text-green-400 flex items-center'>
                                <Indicator color="bg-green-400" />
                                <div className='text-sm'>{"Activity   "}</div>
                            </div>
                            <h1 className='text-xl mt-2'>Front Room</h1>
                        </div>
                        <hr className='m-2 border-gray-500' />
                        <div className='px-6 py-4 '>
                            <h3>My Devices</h3>
                            <div className='py-4 flex flex-wrap'>
                                {devices.map((device, index) => (
                                    <SwitchCard key={index}
                                        id={device.device_id}
                                        status={device.switch_status}
                                        validity={device.status}
                                        device={device.device.name}
                                        type={device.device.type}
                                        schedule={device.device.schedule}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default InsideRoom