import React, { useEffect, useState } from 'react';
import RecivierMessage from './RecivierMessage'
import SenderMessage from './SenderMessage'
import { LuSend } from 'react-icons/lu'
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { getChatHistoryofCustomerTechSupportReceiverMsgApi, getChatHistoryofCustomerTechSupportSenderMsgApi } from '../../../api/apiChat';


const SelectedChat = ({ userName, userProfile, selectedUserID }) => {

    const user = useSelector(state => state.user.user);
    const [message, setMessage] = useState('');
    const [sendingMsg, setSendingMsg] = useState([]);
    const [recivingMsg, setRecivingMsg] = useState([]);


    const socketIO = io.connect('http://localhost:3010');
    socketIO.emit("joinRoom", user.id);

    useEffect(() => {
        setRecivingMsg(clearChat);
        getChatHistoryofCustomerTechSupportReceiverMsgApi(user.id, selectedUserID).then((response) => {
            setRecivingMsg(response.data);
        }).catch((error) => {
            return error;
        })
    },[])

    socketIO.on("receiveEvent", (data) => {
        setRecivingMsg([...recivingMsg, { message: data.message }])
    });

    const handleSendMessage = (e) => {
        e.preventDefault();
        socketIO.emit("sendEvent", {
            senderID: user.id,
            receiverID: selectedUserID,
            message: message
        });

        let createdDate = new Date();
        sendMsgToTechSupportApi({ customerID: user.id, techSupportID: selectedUserID, message: message, createdDate: createdDate })
        setSendingMsg([...sendingMsg, { message: message }]);
        setMessage('');
    }

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