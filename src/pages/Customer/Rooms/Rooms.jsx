import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import RoomCard from '../../../components/Cards/RoomCard'
import { Link } from 'react-router-dom'


const dataSet = [
    {
        status: 'Online',
        name: 'Living Room',
        devices: 5,
        measures: {
            temperature: 25,
            humidity: 50,
        }
    },
    {
        status: 'Offline',
        name: 'Bedroom',
        devices: 3,
        measures: {
            temperature: 25,
            humidity: 50,
        }
    },
];

const Rooms = () => {
    return (
        <PageWrapper >
            <MainSidebar />
            <PageContent >
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Rooms" baclLink='/places' />

                <div className='px-16 py-4 w-full flex flex-col flex-grow mx-auto'>

                    <Link to='/places/rooms/add'>
                        <ButtonBar>
                            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Room</button>
                        </ButtonBar>
                    </Link>

                    <div className='flex flex-wrap px-8 py-2 justify-center'>
                        {/* Cards */}
                        {dataSet.map((data, index) => (<RoomCard key={index} {...data} />))}
                    </div>
                </div>
            </PageContent>
        </PageWrapper>

    )
}

export default Rooms