import PageWrapper from '../../../components/Wrappers/PageWrapper'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import { AiFillRocket } from 'react-icons/ai'
import { MdDoNotDisturbAlt } from 'react-icons/md'
import ProfileForm from './Info'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { fetchCustomer, selectCustomer } from '../../../redux/slices/customerSlice'
import { subValidation } from '../../../utils/validators'
import { Link } from 'react-router-dom'

const Profile = () => {
    const user = useSelector((state) => state.user.user);
    const customer = useSelector(selectCustomer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(fetchCustomer(user.id));
        }
    }, [])

    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                {/* <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Profile" baclLink='/' /> */}
                <ContentWrapper>
                    <div className='flex justify-between items-center p-4'>
                        <div className='flex justify-start items-center'>
                            <div className='relative  select-none'>
                                <img src="https://avatars.githubusercontent.com/u/73744585?v=4" alt="" className='w-36 h-36 rounded-full' />
                                <span className='shadow-md absolute right-0 bottom-0 text-xs font-semibold bg-[#83BCFF] text-black py-1 px-4 rounded-full'>Active</span>
                            </div>
                            <div className='flex flex-col ml-10'>
                                <h1 className='text-4xl my-2 font-semibold'>{user.first_name + " " + user.last_name}</h1>
                                <h2 className='text-lg my-2'>ID : #{user.id} </h2>
                            </div>
                        </div>
                        <div>
                            {subValidation(customer.year_subscription) ? <div className='w-24 h-24 rounded-lg bg-slate-900 flex flex-col items-center justify-evenly'>
                                <AiFillRocket className='text-white text-4xl' />
                                <h1 className='text-white text-xs '>SUBSCRIBED</h1>
                            </div> :
                                <Link to='/subscribe'>
                                    <div className='w-24 h-24 rounded-lg bg-slate-900 flex flex-col items-center justify-evenly hover:scale-110 transition-all '>
                                        <h1 className='text-white text-xs'>NOT</h1>
                                        <MdDoNotDisturbAlt className='text-white text-3xl' />
                                        <h1 className='text-white text-xs'>SUBSCRIBED</h1>
                                    </div>
                                </Link>}
                        </div>
                    </div>
                    <div>
                        <ProfileForm />
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Profile