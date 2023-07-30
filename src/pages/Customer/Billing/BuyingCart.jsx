import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import Sidebar from '../../../components/Sidebar/Sidebar'
import TopBar from '../../../components/smallComps/TopBar'
import CheckoutBox from '../../../components/Cards/CheckoutBox'

const dataSet = [
    {
        place: 'Home',
        room: 'Living Room',
        total: '22000'
    },
    {
        place: 'Workplace',
        room: 'Meeting Room',
        total: '12000'
    },
    {
        place: 'Home',
        room: 'Living Room',
        total: '22000'
    },
    {
        place: 'Workplace',
        room: 'Meeting Room',
        total: '12000'
    },
];

const BuyingCart = () => {
    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Buying Cart" />
                <ContentWrapper>
                    <div className='flex flex-col items-center justify-center w-full h-full'>
                        {dataSet.map((data, index) => (<CheckoutBox key={index} {...data} />))}
                        <hr className='border-gray-800 w-4/5 m-4' />
                        <div className="text-lg leading-6 text-slate-900 dark:text-white font-semibold select-none mx-2 my-3 w-4/5 flex justify-between items-center">
                            <div className='flex items-center'>
                                <h1 className='px-2'>{"Total"}</h1>
                            </div>
                            <div className='px-2'>Rs. {2000}</div>
                        </div>
                        <div className='flex flex-end w-4/5 justify-end my-4'>
                            <button className='px-8 py-1 bg-[#83BCFF] rounded-md text-black'>Pay</button>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default BuyingCart