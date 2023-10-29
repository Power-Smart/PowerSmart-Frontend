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
import { useParams } from 'react-router-dom';

const Chat = () => {
    const [selectedUser, setSelectedUser] = useState(false);
    const [selectedUserID, setSelectedUserID] = useState('');
    const [selectedUserName, setSelectedUserName] = useState('');
    const [selectedUserPicture, setSelectedUserPicture] = useState('');
    const [customerDetailsArray, setCustomerDetailsArray] = useState([]);

    const { customerID } = useParams();

    const user = useSelector(state => state.user.user);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getTechSupportApi(user.id);
                const customersIndexArray = res.data.customers;

                const promises = customersIndexArray.map(async (customerID) => {
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


    const handleSelectUserDisplay = (userID) => {
        const chatUser = customerDetailsArray.find((user) => user.user_id == userID);
        if (chatUser) {
            setSelectedUser(true);
            setSelectedUserID(chatUser.user_id);
            setSelectedUserName(chatUser.user.first_name + ' ' + chatUser.user.last_name);
            setSelectedUserPicture(chatUser.profile_pic);
        }
    };

    const handleSelectUserByParams = (userID, currentChatUsers) => {
        const chatUser = currentChatUsers.find((user) => user.user_id == userID);
        if (chatUser) {
            setSelectedUser(true);
            setSelectedUserID(chatUser.user_id);
            setSelectedUserName(chatUser.user.first_name + ' ' + chatUser.user.last_name);
            setSelectedUserPicture(chatUser.profile_pic);
        }
    };

    useEffect(() => {
        if (customerID !== undefined) {
            let currentChatUsers;

            const fetchData = async () => {
                try {
                    const res = await getTechSupportApi(user.id);
                    const customersIndexArray = res.data.customers;

                    const promises = customersIndexArray.map(async (customerID) => {
                        return getCustomerDetailsApi(customerID)
                            .then((res) => res.data)
                            .catch((err) => {
                                console.log(err);
                                return null;
                            });
                    });
                    const customerDetails = await Promise.all(promises);
                    currentChatUsers = customerDetails;
                    setCustomerDetailsArray(customerDetails);
                    handleSelectUserByParams(customerID, currentChatUsers);
                } catch (err) {
                    console.log(err);
                }
            };
            fetchData();
        }
    }, [customerID]);



    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <div className="chat responsive-chat-container">
                    <div className="chat-message-container notSelectedUserPage px-16 py-4 mt-4">
                        {selectedUser ? (
                            <SelectedChat userName={selectedUserName} userProfile={selectedUserPicture} selectedUserID={selectedUserID} />
                        ) : (
                            <NotSelectedChat />
                        )}
                    </div>
                    <div className="chat-user-list responsive-user-list">
                        <div className="chat-list">
                            {customerDetailsArray.map((customer, index) => (
                                <ChatProfile
                                    profilePicture={customer.profile_pic}
                                    userName={customer.user.first_name + ' ' + customer.user.last_name}
                                    lastMessage="lastMessage"
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
