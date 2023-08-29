import React, { useEffect } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import DeviceCard from './DeviceCard'
import { Link, useParams } from 'react-router-dom'
import InsideRoomSidebar from '../../../components/Sidebar/TechSupport/InsideRoomSidebar'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDevices, selectDevices, selectDevicesStatus } from '../../../redux/slices/techsupport/deviceSlice'
import LoadingSpinner from '../../../components/smallComps/LoadingSpinner'

const Devices = () => {
    const { customerID, placeID, roomID } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const devices = useSelector(selectDevices);
    const devicesStatus = useSelector(selectDevicesStatus);
    useEffect(() => {
        if (user.id) {
            dispatch(fetchDevices({ userID: user.id, placeID, roomID }));
        }
    }, [user, dispatch]);

    return (
        <PageWrapper>
            <InsideRoomSidebar customerID={customerID} placeID={placeID} roomID={roomID} />
            <PageContent>
                <TopBar title={"Room Devices"} baclLink={`/tech/${customerID}/place/${placeID}/rooms`} />
                <ContentWrapper>
                    <ButtonBar>
                        <Link to={`/tech/${customerID}/place/${placeID}/room/${roomID}/devices/add`}>
                            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Device</button>
                        </Link>
                    </ButtonBar>
                    <div className='flex flex-wrap'>
                        {
                            devices.map((device) => (
                                <DeviceCard
                                    key={device.id}
                                    id={device.id}
                                    walt={device.walt}
                                    deviceName={device.name}
                                    image={device.image}
                                />
                            ))
                        }
                        {devices.length === 0 && <h2 className=' text-center mx-auto'>No Devices <br /> <nav className='text-gray-500'>click 'Add Device' to add a device</nav></h2>}
                        {devicesStatus === "loading" && <LoadingSpinner />}
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Devices