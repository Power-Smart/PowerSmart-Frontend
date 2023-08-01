import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import { AiFillRocket } from 'react-icons/ai'

const Profile = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Profile" baclLink='/' />
                <ContentWrapper>
                    <div className='flex justify-between items-center p-4'>
                        <div className='flex justify-start items-center'>
                            <div className='relative  select-none'>
                                <img src="https://avatars.githubusercontent.com/u/73744585?v=4" alt="" className='w-36 h-36 rounded-full' />
                                <span className='shadow-md absolute right-0 bottom-0 text-xs font-semibold bg-[#83BCFF] text-black py-1 px-4 rounded-full'>Active</span>
                            </div>
                            <div className='flex flex-col ml-10'>
                                <h1 className='text-4xl my-2 font-semibold'>Kavishka Sulakshana</h1>
                                <h2 className='text-lg my-2'># 245363553</h2>
                            </div>
                        </div>
                        <div>
                            <div className='w-24 h-24 rounded-lg bg-slate-900 flex flex-col items-center justify-evenly'>
                                <AiFillRocket className='text-white text-4xl' />
                                <h1 className='text-white text-xs '>SUBSCRIBED</h1>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Profile