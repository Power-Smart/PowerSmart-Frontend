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
                        </nav>   {/*End of the nav section */}

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
                                                    <input placeholder='Search' name='search' className='focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-100 rounded-full p-2 border' />
                                                </div>
                                            </div>      {/*End of search box*/}

                                            {/*user 1*/}
                                            <div className='relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover: bg-gray-200'>
                                                <div className='flex-shrink-0'>
                                                    <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' />
                                                </div>
                                                <div className='flex-1 min-w-0'>
                                                    <a href='#' className='focus:outline-none'>
                                                        <div className='flex items-center justify-between'>
                                                            <p className='text-sm font-bold text-blue-800'>
                                                                Dia Gomes
                                                            </p>
                                                            <div className='text-gray-400 text-xs'>
                                                                12.40 AM
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center justify-between'>
                                                            <p className='text-sm text-gray-500 truncate'>Hi</p>
                                                            <div className='text-white text-xs bg-red-400 rounded-full px-1 py-0'>
                                                                2
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                            {/*user 2*/}
                                            <div className='relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover: bg-gray-200'>
                                                <div className='flex-shrink-0'>
                                                    <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' />
                                                </div>
                                                <div className='flex-1 min-w-0'>
                                                    <a href='#' className='focus:outline-none'>
                                                        <div className='flex items-center justify-between'>
                                                            <p className='text-sm font-bold text-blue-800'>
                                                                Michael James
                                                            </p>
                                                            <div className='text-gray-400 text-xs'>
                                                                12.30 AM
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center justify-between'>
                                                            <p className='text-sm text-gray-500 truncate'>What's going on?</p>
                                                            <div className='text-white text-xs bg-red-400 rounded-full px-1 py-0'>
                                                                3
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            {/*user 3*/}
                                            <div className='relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover: bg-gray-200'>
                                                <div className='flex-shrink-0'>
                                                    <img className='h-10 w-10 rounded-full' src='https://plus.unsplash.com/premium_photo-1668896123988-b1566bb54579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' />
                                                </div>
                                                <div className='flex-1 min-w-0'>
                                                    <a href='#' className='focus:outline-none'>
                                                        <div className='flex items-center justify-between'>
                                                            <p className='text-sm font-bold text-blue-800'>
                                                                Anne Georgia
                                                            </p>
                                                            <div className='text-gray-400 text-xs'>
                                                                5.30 PM
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center justify-between'>
                                                            <p className='text-sm text-gray-500 truncate'>Hey what's up</p>
                                                            <div className='text-white text-xs bg-red-400 rounded-full px-1 py-0'>
                                                                5
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            {/*user 4*/}
                                            <div className='relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover: bg-gray-200'>
                                                <div className='flex-shrink-0'>
                                                    <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80' />
                                                </div>
                                                <div className='flex-1 min-w-0'>
                                                    <a href='#' className='focus:outline-none'>
                                                        <div className='flex items-center justify-between'>
                                                            <p className='text-sm font-bold text-blue-800'>
                                                                Kina Mayer
                                                            </p>
                                                            <div className='text-gray-400 text-xs'>
                                                                8.30 PM
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center justify-between'>
                                                            <p className='text-sm text-gray-500 truncate'>Hello!</p>
                                                            <div className='text-white text-xs bg-red-400 rounded-full px-1 py-0'>
                                                                1
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            {/*user 5*/}
                                            <div className='relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover: bg-gray-200'>
                                                <div className='flex-shrink-0'>
                                                    <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1584043720379-b56cd9199c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' />
                                                </div>
                                                <div className='flex-1 min-w-0'>
                                                    <a href='#' className='focus:outline-none'>
                                                        <div className='flex items-center justify-between'>
                                                            <p className='text-sm font-bold text-blue-800'>
                                                                James Smith
                                                            </p>
                                                            <div className='text-gray-400 text-xs'>
                                                                10.20 PM
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center justify-between'>
                                                            <p className='text-sm text-gray-500 truncate'>Hey what's up</p>
                                                            <div className='text-white text-xs bg-red-400 rounded-full px-1 py-0'>
                                                                4
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Body*/}
                                <div className='flex-1 p:2 sm:pb-6 justify-between  flex-col h-screen hidden xl:flex'>
                                    <div className="flex sm:items-center justify-between py-3 border-b border-gray-200 p-3">
                                        <div className="flex items-center space-x-4">
                                            <img src='https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80' className='w-10 sm:w-12 h-10 sm:h-12 rounded-full cursor-pointer' />
                                            <div className='flex flex-col leading-tight'>
                                                <div className='text-1xl mt-1 flex items-center'>
                                                    <span className='text-gray-700 mr-3'>Kina Mayer</span>
                                                    <span className='text-green-500'>
                                                        <svg width={10} height={10}>
                                                            <circle cx={5} cy={5} r={5} fill='currentColor' />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <button className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'>
                                                <svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                                    <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
                                                </svg>
                                            </button>
                                            <button className='inline-flex flex-col items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'>
                                                <svg className='h-6 w-6 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                                                    <circle cx='12' cy='6' r='2' />
                                                    <circle cx='12' cy='12' r='2' />
                                                    <circle cx='12' cy='18' r='2' />
                                                </svg>
                                            </button>

                                        </div>
                                    </div>

                                    {/*Messages*/}
                                    <div id='messages' className='flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>

                                        {/*first message*/}
                                        <div className="chat-message">
                                            <div className="flex items-end">
                                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                    <div>
                                                        <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600'>
                                                            Lorem ipsum
                                                        </span>
                                                    </div>
                                                </div>
                                                <img src='https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80' className='w-6 h-6 rounded-full order-1' />
                                            </div>
                                        </div>

                                        {/*second message*/}
                                        <div className="chat-message">
                                            <div className="flex items-end justify-end">
                                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-end">
                                                    <div>
                                                        <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-600 text-white'>
                                                            Lorem ipsum 2
                                                        </span>
                                                    </div>
                                                </div>
                                                <img src='https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80' className='w-6 h-6 rounded-full order-1' />
                                            </div>
                                        </div>

                                        {/*third message*/}
                                        <div className="chat-message">
                                            <div className="flex items-end justify-end">
                                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-end">
                                                    <div>
                                                        <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-600 text-white'>
                                                            Lorem ipsum 3
                                                        </span>
                                                    </div>
                                                </div>
                                                <img src='https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80' className='w-6 h-6 rounded-full order-1' />
                                            </div>
                                        </div>

                                        {/*fourth message*/}
                                        <div className="chat-message">
                                            <div className="flex items-end justify-end">
                                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-end">
                                                    <div>
                                                        <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-600 text-white'>
                                                            Lorem ipsum 4
                                                        </span>
                                                    </div>
                                                </div>
                                                <img src='https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80' className='w-6 h-6 rounded-full order-1' />
                                            </div>
                                        </div>

                                        {/*fifth message*/}
                                        <div className="chat-message">
                                            <div className="flex items-end">
                                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                    <div>
                                                        <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600'>
                                                            Lorem ipsum
                                                        </span>
                                                    </div>
                                                </div>
                                                <img src='https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80' className='w-6 h-6 rounded-full order-1' />
                                            </div>
                                        </div>

                                        {/*messages end here*/}
                                        <div className='border-t-2 border-gray-200 px-4 pt-4 mb-16'>
                                            <div className="relative flex">
                                                <span className='absolute inset-y-0 flex items-center'>
                                                    <button className='inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300'>
                                                        <svg className='h-6 w-6 text-gray-600' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' aria-hidden='true' stroke='currentColor'>
                                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' />
                                                        </svg>
                                                    </button>
                                                </span>
                                                <input placeholder='Type Something' className='focus:ring-red-500 focus:border-red-500 w-full focus:placeholder-gray-400 text-gray-600 placeholder-gray-300 pl-12 bg-gray-100 rounded-full py-3 border-gray-200' />
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
