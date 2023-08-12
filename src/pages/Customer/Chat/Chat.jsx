import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import { LuSend } from 'react-icons/lu'
import { RiUserSearchLine } from 'react-icons/ri'
import './chat.css'
import RecivierMessage from './RecivierMessage'
import SenderMessage from './SenderMessage'
import ChatProfile from './ChatProfile'


const Chat = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <div className="chat ">
                    <div className="chat-message-container px-16 py-4 w-full flex flex-col flex-grow mx-auto mt-8">
                        <div className="chat-header">
                            <div className="profile-image">
                                <img src="https://avatars.githubusercontent.com/u/73744585?v=4" alt="" />
                            </div>
                            <div className="name">
                                <h1 className='text-xl'>Viraj Sandakelum</h1>
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
                    </div>

                    <div className="chat-user-list">
                        <div className="search-chat mt-8">
                            <RiUserSearchLine className='text-xl mx-2 text-[#0E0E1A]' />
                            <input type="text" placeholder="Search Chat by Name" />
                        </div>
                        <div className="chat-list">
                            <ChatProfile profilePicture='https://avatars.githubusercontent.com/u/73744585?v=4' userName='Viraj Sandakelum' lastMessage="I am fine, how are you?" />
                            <ChatProfile profilePicture='https://avatars.githubusercontent.com/u/73744585?v=4' userName='Viraj Sandakelum' lastMessage="I am fine, how are you?" />
                            <ChatProfile profilePicture='https://avatars.githubusercontent.com/u/73744585?v=4' userName='Viraj Sandakelum' lastMessage="I am fine, how are you?" />
                        </div>
                    </div>
                </div>
            </PageContent>
        </PageWrapper>
    )
}

export default Chat