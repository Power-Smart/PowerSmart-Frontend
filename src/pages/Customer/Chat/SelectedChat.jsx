import React, { useEffect, useState } from 'react'
import './chat.css'
import RecivierMessage from './RecivierMessage'
import SenderMessage from './SenderMessage'
import { LuSend } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChatHistoryofCustomerTechSupportReceiverMsg, selectChatHistoryofCustomerTechSupportReceiverMsg } from '../../../redux/slices/customer/ChatMsgReceiveSlice'
import { fetchChatHistoryofCustomerTechSupportSenderMsg, selectChatHistoryofCustomerTechSupportSenderMsg } from '../../../redux/slices/customer/ChatMsgSendSlice'


const SelectedChat = ({ userName, userProfile, selectedUserID }) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const sendingMsg = useSelector(selectChatHistoryofCustomerTechSupportSenderMsg);
    const recivingMsg = useSelector(selectChatHistoryofCustomerTechSupportReceiverMsg);


    useEffect(() => {
        if (user.id) {
            dispatch(fetchChatHistoryofCustomerTechSupportSenderMsg({ customerID: user.id, techSupportID: selectedUserID }));
            dispatch(fetchChatHistoryofCustomerTechSupportReceiverMsg({ customerID: user.id, techSupportID: selectedUserID }));
        }
    }, [user, dispatch]);



    return (
        <>
            <div className="chat-header">
                <div className="profile-image">
                    <img src={userProfile} alt="" />
                </div>
                <div className="name">
                    <h1 className='text-xl'>{userName}</h1>
                </div>
            </div>
            <div className="chat-body">
                {
                    sendingMsg.map((msg) => (
                        <SenderMessage SendMessageText={msg.message} />
                    ))
                }

                {
                    recivingMsg.map((msg) => (
                        <RecivierMessage RecivedMessageText={msg.message} />
                    ))
                }
            </div>
            <div className="chat-send">
                <input type="text" placeholder="Type a message here" />
                <a href="#"><LuSend /></a>
            </div>
        </>


    )
}

export default SelectedChat