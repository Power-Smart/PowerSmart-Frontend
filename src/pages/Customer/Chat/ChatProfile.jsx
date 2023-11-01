import React from 'react'
import './chat.css'



const ChatProfile = ({ profilePicture, userName, lastMessage, onClick = undefined, id = null }) => {
    return (
        <div className="one-chat" onClick={onClick} id={id} >
            <div className="profile-image">
                <img src={profilePicture} alt="" />
            </div>
            <div className="chat-details">
                <div className="name">
                    <h3>{userName}</h3>
                </div>
                <div className="last-message">
                    {/* <p>{lastMessage}</p> */}
                </div>
            </div>
        </div>
    )
}

export default ChatProfile