import React from 'react'
import './chat.css'


const NotSelectedChat = () => {
    return (
        <div className="empty-part text-center" id="empty-part">
            <div className="image-part">
                <img src="https://www.pngall.com/wp-content/uploads/4/Mic-Chat-Support-Transparent.png" alt="" />
            </div>
            <div className="text-part">
                <h1 className='text-4xl'>There is no chat selected</h1>
                <p className='text-xl'>Please select a chat to see details</p>
            </div>
        </div>
    )
}

export default NotSelectedChat