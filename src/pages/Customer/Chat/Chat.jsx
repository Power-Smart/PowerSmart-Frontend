import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { fetchAssignedTechSupportForCustomer, selectAssignedTechSupportForCustomer } from '../../../redux/slices/customer/CusAssginTechSupport'



const chatList = [
    {
        userID: '1',
        profilePicture: 'https://avatars.githubusercontent.com/u/73744585?v=4',
        userName: 'Jone Doe',
        lastMessage: 'I am fine, how are you?'
    },
    {
        userID: '2',
        profilePicture: 'https://avatars.githubusercontent.com/u/7144115?v=4',
        userName: 'Kamal Perera',
        lastMessage: 'I am fine, how are you?'
    },
    {
        userID: '3',
        profilePicture: 'https://avatars.githubusercontent.com/u/73544585?v=4',
        userName: 'Sunil Perera',
        lastMessage: 'I am fine, how are you?'
    },
    {
        userID: '4',
        profilePicture: 'https://avatars.githubusercontent.com/u/73342585?v=4',
        userName: 'Amal Perera',
        lastMessage: 'I am fine, how are you?'
    },
]


const Chat = ({ socket }) => {

    const [selectedUser, setSelectedUser] = useState(false);
    const [selectedUserID, setSelectedUserID] = useState('');
    const [selectedUserName, setSelectedUserName] = useState('');
    const [selectedUserPicture, setSelectedUserPicture] = useState('');


    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const assignedTechSupportForCustomer = useSelector(selectAssignedTechSupportForCustomer);


    useEffect(() => {
        if (user.id) {
            dispatch(fetchAssignedTechSupportForCustomer(user.id));
        }
    }, [user, dispatch]);


    const handleSelectUserDisplay = (userDetails) => {
        assignedTechSupportForCustomer.forEach((chatUser) => {
            setSelectedUser(true)
            setSelectedUserID(chatUser.user_id)
            setSelectedUserName(chatUser.userDetails.first_name + ' ' + chatUser.userDetails.last_name)
            setSelectedUserPicture(chatUser.profile_pic)
        })
    }


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <div className="chat ">

                    <div className="chat-message-container notSelectedUserPage px-16 py-4 w-full flex flex-col flex-grow mx-auto mt-4">
                        {
                            selectedUser ? (<SelectedChat userName={selectedUserName} userProfile={selectedUserPicture} selectedUserID={selectedUserID} socket={socket} />) : (<NotSelectedChat />)
                        }
                    </div>

                    <div className="chat-user-list">
                        <div className="search-chat mt-8">
                            <RiUserSearchLine className='text-xl mx-2 text-[#0E0E1A]' />
                            <input type="text" placeholder="Search Chat by Name" />
                        </div>
                        <div className="chat-list">
                            {
                                assignedTechSupportForCustomer.map((chat) => (
                                    <ChatProfile profilePicture={chat.profile_pic} userName={chat.userDetails.first_name + ' ' + chat.userDetails.last_name} lastMessage={chat.lastMessage} id={chat.userID} onClick={(e) => handleSelectUserDisplay(chat.userDetails)} key={chat.userID} />
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