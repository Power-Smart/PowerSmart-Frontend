import React from 'react'
import { Link, useParams } from "react-router-dom";
import DeviceImages from '../../../components/smallComps/DeviceImages';
import { deleteDevice } from '../../../redux/slices/techsupport/deviceSlice';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'

const DeviceCard = ({ id, deviceName, socket, type, relay }) => {
    const { placeID, roomID } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const deleteDeviceFromRoom = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete',
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (user.id) dispatch(deleteDevice({ userID: user.id, placeID, roomID, deviceID: id }))
            }
        })
    }
    return (
        <div className="text-sm flex flex-col border-solid border border-secondaryBlue w-[200px] h-auto bg-[#1C1C2E] rounded-3xl shadow-md pb-5 m-5 justify-evenly">
            <div className="bg-white w-[200px] rounded-tr-3xl rounded-tl-3xl">
                <img
                    className="object-cover h-[100px] w-[200px] rounded-3xl"
                    src={DeviceImages(type)}
                    alt="item"
                />
            </div>
            <div className="text-md mx-auto text-center mb-1">#{id} </div>
            <div className="text-sm mb-1 w-4/5 mx-auto font-bold text-[#cecece] text-center h-30">
                {deviceName}
            </div>
            <div className="text-center mb-3">
                <div className="text-sm text-secondaryText">Relay {relay}</div>
                <div className="text-sm text-secondaryText">Socket {socket}</div>
            </div>

            <div className="flex justify-evenly items-center">
                <Link to={`edit/${id}`}>
                    <button className="px-4 py-1 w-20 text-sm bg-primaryBtn rounded-2xl text-black bg-[#83BCFF]">
                        Edit
                    </button>
                </Link>
                <button className="px-4 py-1 w-20 text-sm bg-secondaryBtn rounded-2xl text-black bg-[#FF8383]" onClick={deleteDeviceFromRoom}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default DeviceCard