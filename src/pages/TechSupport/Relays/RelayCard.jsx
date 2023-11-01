import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { deleteRelay } from '../../../redux/slices/techsupport/relaySlice';
import Swal from 'sweetalert2';

const RelayCard = ({ id, name, type, image, description }) => {
    const { customerID, placeID } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const deleteRelayUnit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "The linked devices also be deleted !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete',
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (user.id) dispatch(deleteRelay({ userID: user.id, placeID, relayID: id }))
            }
        })
    }

    return (
        <div className="text-sm flex flex-col border-solid border border-secondaryBlue w-[200px] h-auto bg-[#1C1C2E] rounded-3xl shadow-md px-2 pb-5 m-5 justify-evenly">
            <div className="item-image rounded-es-3xl rounded-ee-3xl mx-auto bg-white">
                <img
                    className="object-fill rounded-es-3xl rounded-ee-3xl h-20 w-20"
                    src={image}
                    alt="item"
                />
            </div>
            <div className="text-md my-2 mx-auto text-center">ID No : {id} </div>
            <div className="text-sm w-4/5 mx-auto font-thin text-[#cecece] text-center h-30">
                {name} Relay Unit
            </div>
            <div className="mt-1 mb-4 text-center">
                <div className="text-xs">{type === "L" ? "Large" : "Medium"}</div>
            </div>
            <div className="flex justify-evenly items-center">
                <Link to={`/tech/${customerID}/place/${placeID}/relays/update/${id}`}>
                    <button className="px-4 py-1 w-20 text-sm bg-primaryBtn rounded-2xl text-black bg-[#83BCFF]">
                        Edit
                    </button>
                </Link>
                <button className="px-4 py-1 w-20 text-sm bg-secondaryBtn rounded-2xl text-black bg-[#FF8383]" onClick={deleteRelayUnit}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default RelayCard