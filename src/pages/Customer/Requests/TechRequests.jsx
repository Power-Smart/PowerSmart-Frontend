import PageWrapper from "../../../components/Wrappers/PageWrapper"
import PageContent from "../../../components/Wrappers/PageContent"
import MainSidebar from "../../../components/Sidebar/Customer/MainSidebar"
import TopBar from "../../../components/smallComps/TopBar"
import ContentWrapper from "../../../components/Wrappers/ContentWrapper"
import ButtonBar from "../../../components/Wrappers/ButtonBar"
import { Link } from "react-router-dom"
import RequestThread from "../../../components/Notifications/RequestThread"
import { AiOutlineWarning } from "react-icons/ai"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { accessListApi } from "../../../api/ApiAccessControl"

const TechRequests = () => {
    const user = useSelector(state => state.user.user);
    const [techRequests, setTechRequests] = useState([]);

    useEffect(() => {
        let timeInterval;
        const getData = async () => {
            try {
                const data = await accessListApi(user.id);
                setTechRequests(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        if (user.id) {
            getData();
            timeInterval = setInterval(getData, 5000);
        }
        return () => {
            clearInterval(timeInterval);
        }
    }, [user]);
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent >
                <TopBar title="Access Control" baclLink='/' />
                <ContentWrapper>
                    <ButtonBar>
                    </ButtonBar>
                    <div className='flex flex-col px-20 py-2 justify-center items-center'>
                        <div className="m-2 flex text-xl items-center text-yellow-600/30">
                            <AiOutlineWarning className="mx-2" />
                            <h1 className='font-bold'>Give the Access Only If Necessory</h1>
                        </div>
                        {techRequests.length > 0 ?
                            <div className='flex flex-row flex-wrap'>
                                {techRequests.map((item) =>
                                    <RequestThread
                                        key={item.tech_support_id + item.place_id}
                                        user_id={user.id}
                                        tech_support_name={item.tech_support_name}
                                        tech_support_id={item.tech_support_id}
                                        place_id={item.place_id}
                                        place_name={item.place_name}
                                        time={item?.updated_at}
                                        type={item.access_type}
                                        techRequests={techRequests}
                                    />)
                                }
                            </div> :
                            <div className="m-2 flex text-xl items-center text-yellow-600/30">
                                No Requests
                            </div>}
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default TechRequests