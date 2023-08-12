import React from 'react'
import './chat.css'
import RecivierMessage from './RecivierMessage'
import SenderMessage from './SenderMessage'
import { LuSend } from 'react-icons/lu'


const SelectedChat = ({userName, userProfile}) => {
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
                <RecivierMessage RecivedMessageText='I am fine, how are you?' />
                <SenderMessage SendMessageText='I am fine, how are you?' />
                <RecivierMessage RecivedMessageText='I am fine, how are you?' />
                <SenderMessage SendMessageText='I am fine, how are you?' />
                <RecivierMessage RecivedMessageText='I am fine, how are you?' />
                <SenderMessage SendMessageText='I am fine, how are you?' />
                <RecivierMessage RecivedMessageText='I am fine, how are you?' />
                <SenderMessage SendMessageText='I am fine, how are you?' />
                <RecivierMessage RecivedMessageText='I am fine, how are you?' />
                <SenderMessage SendMessageText='I am fine, how are you?' />
            </div>
            <div className="chat-send">
                <input type="text" placeholder="Type a message here" />
                <a href="#"><LuSend /></a>
            </div>
        </>


    )
}

export default SelectedChat