import React from 'react'
import NotSelectedChatImage from '../../../assets/images/NotSelectedChat.png'

const NotSelectedChat = () => {
    return (
        <div className="empty-part text-center" id="empty-part">
            <div className="image-part">
                <img src={NotSelectedChatImage} alt="" />
            </div>
            <div className="text-part">
                <h1 className='text-3xl'>There is no chat selected</h1>
                <p className='text-xl'>Please select a chat to see details</p>
            </div>
        </div>
    )
}

export default NotSelectedChat