import React, { useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import { RiUserSearchLine } from 'react-icons/ri'
import './chat.css'
import ChatProfile from './ChatProfile'
import NotSelectedChat from './NotSelectedChat'
import SelectedChat from './SelectedChat'



const chatList = [
    {
        userID: '1',
        profilePicture: 'https://avatars.githubusercontent.com/u/73744585?v=4',
        userName: 'Viraj Sandakelum',
        lastMessage: 'I am fine, how are you?'
    },
    {
        userID: '2',
        profilePicture: 'https://avatars.githubusercontent.com/u/7144115?v=4',
        userName: 'Nirman Sandapawan',
        lastMessage: 'I am fine, how are you?'
    },
    {
        userID: '3',
        profilePicture: 'https://avatars.githubusercontent.com/u/73544585?v=4',
        userName: 'Madushika Sandaruwan',
        lastMessage: 'I am fine, how are you?'
    },
    {
        userID: '4',
        profilePicture: 'https://avatars.githubusercontent.com/u/73342585?v=4',
        userName: 'Hansanga Sandatharauka',
        lastMessage: 'I am fine, how are you?'
    },
]


const Chat = () => {

    const [selectedUser, setSelectedUser] = useState(false);
    const [selectedUserID, setSelectedUserID] = useState('');
    const [selectedUserName, setSelectedUserName] = useState('');
    const [selectedUserPicture, setSelectedUserPicture] = useState('');


    const handleSelectUserDisplay = (userID) => {
        chatList.forEach((chatUser) => {
            if (chatUser.userID === userID) {
                setSelectedUser(true)
                setSelectedUserID(chatUser.userID)
                setSelectedUserName(chatUser.userName)
                setSelectedUserPicture(chatUser.profilePicture)
            }
        })
    }




    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <div className="chat ">

                    <div className="chat-message-container notSelectedUserPage px-16 py-4 w-full flex flex-col flex-grow mx-auto mt-4">
                        {
                            selectedUser ? (<SelectedChat userName={selectedUserName} userProfile={selectedUserPicture}/>) : (<NotSelectedChat/>)
                        }
                    </div>


                    <div className="chat-user-list">
                        <div className="search-chat mt-8">
                            <RiUserSearchLine className='text-xl mx-2 text-[#0E0E1A]' />
                            <input type="text" placeholder="Search Chat by Name" />
                        </div>
                        <div className="chat-list">
                            {
                                chatList.map((chat) => (
                                    <ChatProfile profilePicture={chat.profilePicture} userName={chat.userName} lastMessage={chat.lastMessage} id={chat.userID}  onClick={(e) => handleSelectUserDisplay(e.currentTarget.id)} key={chat.userID} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </PageContent>
        </PageWrapper>
    )
}


export default Chat