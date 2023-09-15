import React, { useState, useEffect } from 'react';
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import PageContent from '../../../components/Wrappers/PageContent';
import TopBar from '../../../components/smallComps/TopBar';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import { RiUserSearchLine } from 'react-icons/ri';
import ChatProfile from './ChatProfile';
import NotSelectedChat from './NotSelectedChat';
import SelectedChat from './SelectedChat';
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';
import { getTechSupportApi } from '../../../api/apiTechSupport';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerDetailsApi } from '../../../api/apiCutomerDetails';


const Chat = () => {
    const [selectedUser, setSelectedUser] = useState(false);
    const [selectedUserID, setSelectedUserID] = useState('');
    const [selectedUserName, setSelectedUserName] = useState('');
    const [selectedUserPicture, setSelectedUserPicture] = useState('');
    const [customerDetailsArray, setCustomerDetailsArray] = useState([]); 
    const user = useSelector(state => state.user.user);

    const handleSelectUserDisplay = (userID) => {
        customerDetailsArray.forEach((chatUser) => {
            console.log(chatUser);
            if (chatUser.user_id == userID) {
                setSelectedUser(true);
                setSelectedUserID(chatUser.user_id);
                setSelectedUserName(chatUser.user.first_name + ' ' + chatUser.user.last_name);
                setSelectedUserPicture(chatUser.profile_pic);
            }
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getTechSupportApi(user.id);
                const customersIndexArray = res.data.customers;

                const promises = customersIndexArray.map((customerID) => {
                    return getCustomerDetailsApi(customerID)
                        .then((res) => res.data)
                        .catch((err) => {
                            console.log(err);
                            return null;
                        });
                });
                const customerDetails = await Promise.all(promises);
                setCustomerDetailsArray(customerDetails); 
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [user.id]); 


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <div className="chat">
                    <div className="chat-message-container notSelectedUserPage px-16 py-4 mt-4">
                        {selectedUser ? (<SelectedChat userName={selectedUserName} userProfile={selectedUserPicture} selectedUserID={setSelectedUserID}/>) : (<NotSelectedChat />)}
                    </div>
                    <div className="chat-user-list">
                        <div className="search-chat mt-8">
                            <RiUserSearchLine className='text-xl mx-2 text-[#0E0E1A]' />
                            <input type="text" placeholder="Search Chat by Name" />
                        </div>
                        <div className="chat-list">
                            {customerDetailsArray.map((customer,index) => (
                                <ChatProfile
                                    profilePicture={customer.profile_pic}
                                    userName={customer.user.first_name + ' ' + customer.user.last_name}
                                    lastMessage={"lastMessage"}
                                    id={customer.user.user_id}
                                    onClick={(e) => handleSelectUserDisplay(e.currentTarget.id)}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </PageContent>
        </PageWrapper>
    );
};

export default Chat;
