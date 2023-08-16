import React from 'react'
import './chat.css'


const SenderMessage = ({SendMessageText}) => {
    return (
        <div className="sender-side">
            <div className="message">
                <p>{SendMessageText}</p>
            </div>
        </div>
    )
}

export default SenderMessage