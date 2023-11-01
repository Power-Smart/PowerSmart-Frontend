import React, { useEffect, useState } from 'react'
import PageWrapper from '../../components/Wrappers/PageWrapper'
import MainSidebar from '../../components/Sidebar/Customer/MainSidebar'
import TechMainSidebar from '../../components/Sidebar/TechSupport/MainSidebar'
import AdminSidebar from '../../components/Sidebar/Admin/AdminSidebar'
import PageContent from '../../components/Wrappers/PageContent'
import TopBar from '../../components/smallComps/TopBar'
import ContentWrapper from '../../components/Wrappers/ContentWrapper'
import ButtonBar from '../../components/Wrappers/ButtonBar'
import { Link } from 'react-router-dom'
import { ImCross } from 'react-icons/im'

import { useSelector } from 'react-redux'
import Thread from '../../components/Notifications/Thread'
import { getAllNotificationApi } from '../../api/apiChat'

const Notifications = () => {
    const user = useSelector(state => state.user.user);
    const [notifications, setNotifications] = useState([]);


    useEffect(() => {
        const getNotifications = async () => {
            try {
                const response = await getAllNotificationApi(user.id);
                setNotifications(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        if (user.id) {
            getNotifications();
            var interval = setInterval(getNotifications, 5000);
        }

        return () => {
            clearInterval(interval);
        }
    }, [user]);

    return (
        <PageWrapper>
            {user.role == 1 && <MainSidebar />}
            {user.role == 2 && <TechMainSidebar />}
            {user.role == 4 && <AdminSidebar />}
            <PageContent >
                {user.role == 1 && <TopBar title="Notifications" baclLink='/' />}
                {user.role == 2 && <TopBar title="Notifications" baclLink='/tech' />}
                {user.role == 4 && <TopBar title="Notifications" baclLink='/admin' />}
                <ContentWrapper>
                    <ButtonBar>
                    </ButtonBar>
                    <div className='flex flex-wrap px-8 py-2 justify-center'>
                        <div className='flex flex-col'>
                            {
                                notifications.length > 0 ?
                                    notifications.map((item) =>
                                        <Thread
                                            key={item.notification_id}
                                            id={item.notification_id}
                                            title={item.title}
                                            description={item.message}
                                            time={item.createdAt}
                                            status={item.status}
                                            setNotifications={setNotifications}
                                        />
                                    )
                                    :
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className=" text-gray-500">No Notifications</h1>
                                    </div>
                            }
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Notifications