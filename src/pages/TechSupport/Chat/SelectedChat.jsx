import React, { useEffect, useState } from 'react';
import RecivierMessage from './RecivierMessage'
import SenderMessage from './SenderMessage'
import { LuSend } from 'react-icons/lu'
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';


const SelectedChat = ({userName, userProfile,selectedUserID}) => {

    const user = useSelector(state => state.user.user);
    
    const socketIO = io.connect('http://localhost:3010');
    socketIO.emit("connected", user.id);

    const [message, setMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        socketIO.emit("sendEvent", {
            senderID: user.id,
            receiverID: selectedUserID,
            message: message
        });
    }

    socketIO.on("receiveEvent", (data) => {
        console.log(data);
    });

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
                {/* 
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
                */}
            </div>
            <div className="chat-send">
                <input type="text" placeholder="Type a message here" />
                <a href="#"><LuSend /></a>
            </div>
        </>


    )
}

export default SelectedChat