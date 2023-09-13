import React, { useEffect, useState } from 'react'
import './chat.css'
import RecivierMessage from './RecivierMessage'
import SenderMessage from './SenderMessage'
import { LuSend } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChatHistoryofCustomerTechSupportReceiverMsg, selectChatHistoryofCustomerTechSupportReceiverMsg } from '../../../redux/slices/customer/ChatMsgReceiveSlice'
import { fetchChatHistoryofCustomerTechSupportSenderMsg, selectChatHistoryofCustomerTechSupportSenderMsg,sendMsgToTechSupport } from '../../../redux/slices/customer/ChatMsgSendSlice'
import io from 'socket.io-client'



const SelectedChat = ({ userName, userProfile, selectedUserID }) => {

    const socketIO = io.connect('http://localhost:3010');
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

    useEffect(() => {
        socketIO.on('receive-message', (message) => {
            dispatch(fetchChatHistoryofCustomerTechSupportSenderMsg({ customerID: user.id, techSupportID: selectedUserID }));
        });
    }, [socketIO, dispatch, user, selectedUserID]);



    const [message, setMessage] = useState('');

    const handleSendMessage = async (e) => {
        e.preventDefault();

        try{
            let createdDate = new Date();

            const socketReturn =  await socketIO.emit('send-message', {flag:"M", message: message, senderID: user.id, receiverID: selectedUserID , createdDate: createdDate});

            const dispatchReturn =  dispatch(sendMsgToTechSupport({ customerID: user.id, techSupportID: selectedUserID, message: message, createdDate: createdDate }));
            setMessage('');
        }catch(error){
            //
            console.error("An error occurred:", error);
        }
        
    };


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
                <input type="text" placeholder="Type a message here" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={handleSendMessage}><LuSend /></button>
            </div>
        </>


    )
}

export default SelectedChat
