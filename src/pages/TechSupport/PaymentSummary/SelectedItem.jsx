import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { removeItems } from '../../../redux/slices/techsupport/customerCartSlice'
import { useDispatch } from 'react-redux'


const SelectedItem = ({ itemID, itemName, itemPrice, place, room, count, itemDevicePic }) => {

    const dispatch = useDispatch();

    const removeSelectedItems = (itemID) => {
        dispatch(removeItems(itemID))
    }



    return (
        <div className='one-item flex flex-row justify-around w-full mb-6'>
            <div className="image">
                <img src={itemDevicePic} alt="" className='w-[70px] h-[70px] rounded-md object-fill' />
            </div>

            <div className="item-description text-center flex justify-center items-center flex-col">
                <div className="item-name">
                    <h1>{itemName}</h1>
                </div>
                <div className="price">
                    <h1>{itemPrice}</h1>
                </div>
            </div>

            <div className="place-room text-center flex justify-center items-center flex-col">
                <div>
                    <h1>{place}</h1>
                </div>
                <div>
                    <h1>{room}</h1>
                </div>
            </div>

            <div className="select-item-count flex flex-row justify-between items-center w-20">
                <div className="decrement border border-[#006DFF] rounded-md p-1">
                    <button className='flex items-center justify-center'><AiOutlineMinus /></button>
                </div>
                <div className="count">
                    <h1>{count}</h1>
                </div>
                <div className="increment border border-[#006DFF] rounded-md p-1">
                    <button className='flex items-center justify-center'><AiOutlinePlus /></button>
                </div>
            </div>

            <div className="remove-items">
                <button className='text-[#006DFF]' onClick={(e) => removeSelectedItems(itemID)}>Remove</button>
            </div>


        </div>
    )
}

export default SelectedItem