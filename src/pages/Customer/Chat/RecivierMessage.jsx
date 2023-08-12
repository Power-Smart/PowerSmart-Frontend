import './chat.css'
import React from 'react'


const RecivierMessage = ({RecivedMessageText}) => {
    return (
        <div className="receiver-side">
            <div className="message">
                <p>{RecivedMessageText}</p>
            </div>
        </div>
    )
}

export default RecivierMessage