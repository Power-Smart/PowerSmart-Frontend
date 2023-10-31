import React, { useEffect, useState } from 'react';
import SenderMessage from './SenderMessage';
import RecivierMessage from './RecivierMessage';
import { LuSend } from 'react-icons/lu';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { getChatHistoryofCustomerTechSupportReceiverMsgApi, getChatHistoryofCustomerTechSupportSenderMsgApi, sendMsgToCustomerApi } from '../../../api/apiChat';
import { useNavigate } from 'react-router-dom';
import { BsBackspace } from 'react-icons/bs';

const SOCKET_URL = import.meta.env.VITE_APP_SOCKET_URL;

const SelectedChat = ({ userName, userProfile, selectedUserID }) => {
    const user = useSelector(state => state.user.user);
    const [message, setMessage] = useState('');
    const [sendingMsg, setSendingMsg] = useState([]);
    const [recivingMsg, setRecivingMsg] = useState([]);
    const navigate = useNavigate();
    const [allMessages, setAllMessages] = useState([]);

    const socketIO = io.connect(SOCKET_URL);
    socketIO.emit("joinRoom", user.id);

    useEffect(() => {
        getChatHistoryofCustomerTechSupportReceiverMsgApi(user.id, selectedUserID)
            .then((response) => {
                setRecivingMsg(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [selectedUserID]);


    useEffect(() => {
        getChatHistoryofCustomerTechSupportSenderMsgApi(user.id, selectedUserID)
            .then((res) => {
                setSendingMsg(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [selectedUserID]);


    useEffect(() => {
        const mergedMessages = [...sendingMsg, ...recivingMsg];
        mergedMessages.sort((a, b) => {
            return a.chat_id - b.chat_id;
        });
        setAllMessages(mergedMessages);
        console.log(mergedMessages);
    }, [sendingMsg, recivingMsg]);


    socketIO.on("receiveEvent", (data) => {
        console.log(data);
        setRecivingMsg([...recivingMsg, { message: data.message, chat_id: data.chat_id }])
    });


    const handleSendMessage = (e) => {
        e.preventDefault();
        socketIO.emit("sendEvent", {
            senderID: user.id,
            receiverID: selectedUserID,
            message: message,
        });

        let createdDate = new Date();
        sendMsgToCustomerApi({
            senderID: user.id,
            receiverID: selectedUserID,
            message: message,
            createdAt: createdDate,
        });
        setSendingMsg([...sendingMsg, { message: message, createdAt: createdDate }]);
        const updatedMessages = [...allMessages, { message: message }];
        updatedMessages.sort((a, b) => {
            return a.chat_id - b.chat_id;
        });
        setAllMessages(updatedMessages);
        setMessage('');
    };


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {

            let createdDate = new Date().toISOString();
            sendMsgToCustomerApi({
                senderID: user.id,
                receiverID: selectedUserID,
                message: message,
                createdDate: createdDate,
            }).then((res) => {
                socketIO.emit("sendEvent", {
                    senderID: user.id,
                    receiverID: selectedUserID,
                    message: message,
                    chat_id: res.data.chat_id
                });
                setSendingMsg([...sendingMsg, res.data]);
                setMessage('');
            }).catch((err) => {
                console.log(err);
            });
        }
    };


    const goPreviousChat = () => {
        navigate(-1);
    };


    return (
        <>
            <div className="chat-header">
                <div className="profile-image flex flex-row">
                    <div
                        onClick={goPreviousChat}
                        className={`flex justify-center items-center mr-3 mt-1 backBtn responsiveBackBtn`}
                    >
                        <BsBackspace className='text-[40px]' />
                    </div>
                    <img src={userProfile} alt='' />
                </div>
                <div className="name">
                    <h1 className='text-xl'>{userName}</h1>
                </div>
            </div>
            <div className="chat-body">
                {allMessages.map((msg, index) => {
                    if (msg.sender_id === user.id) {
                        return <SenderMessage key={index} SendMessageText={msg.message} />;
                    } else {
                        return <RecivierMessage key={index} RecivedMessageText={msg.message} />;
                    }
                })}
            </div>
            <div className="chat-send">
                <input
                    type="text"
                    placeholder="Type a message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={handleSendMessage}><LuSend /></button>
            </div>
        </>
    );
};

export default SelectedChat;