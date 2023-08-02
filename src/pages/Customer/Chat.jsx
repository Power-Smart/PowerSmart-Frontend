import React from 'react'
import PageWrapper from '../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../components/Wrappers/ContentWrapper'
import Sidebar from '../../components/Sidebar/Sidebar'
import PageContent from '../../components/Wrappers/PageContent'


const Chat = () => {


    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <ContentWrapper>
                    <div className='relative min-h-screen flex flex-col bg-gray-50'>
                        <nav className='flex-shrink-0 bg-slate-600'>
                            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                                <div className='relative flex items-center justify-between h-16'>
                                    <div></div>
                                    <div className='flex lg:hidden'>
                                        <button className='bg-red-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white'>
                                            <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h8m-8 6h16' />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='hidden lg:block lg:w-80'>
                                        <div className='flex items-center justify-end'>
                                            <div className='flex'>
                                                <a href='#' className='px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white'>Chat</a>
                                            </div>

                                            <div className='ml-4 relative flex-shrink-0'>
                                                <div>
                                                    <button className='bg-red-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white'>
                                                        <img className='h-8 w-8 rounded-full' src='https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' />

                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        <div className='flex-grow w-full max-w-7xl  mx-auto lg:flex'>
                            <div className='flex-1 min-w-0 bg-white xl:flex'>
                                <div className='border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-gray-50'>
                                    <div className='h-full pl-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0'>
                                        <div className='h-full relative'>
                                            <div className='relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500 mb-4'>

                                                <div className='flex-shrink-0'>
                                                    <img className='h-12 w-12 rounded-full' src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' />
                                                </div>

                                                <div className='flex-1 min-w-0'>
                                                    <a href='#' className='focus:outline-none'>
                                                        <span className='absolute inset-0' />
                                                        <p className='text-sm font-bold text-black'>Sidharth Malhotra</p>
                                                        <p className='text-sm text-gray-500 truncate'>TechSupporter</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='mb-4'>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                                            <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
                                                        </svg>
                                                    </div>
                                                    <input name='search' className='focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-100 rounded-full p-2 border' />
                                                </div>
                                            </div>
                                            <div className='relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover: bg-gray-200'>
                                                <div className='flex-shrink-0'>
                                                    <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default Chat
