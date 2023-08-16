import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import PlaceCard from '../../../components/Cards/PlaceCard'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import { AiFillRocket } from 'react-icons/ai'
import AdmninSidebar from '../../../components/Sidebar/Admin/AdminSidebar'

const dataSet = [
  {
    status: 'Online',
    placeID: '#1234',
    name: 'Home',
    roomCount: 3,
    devices: 5
  },
  {
    status: 'Offline',
    placeID: '#1234',
    name: 'Workplace',
    roomCount: 8,
    devices: 7
  },
  {
    status: 'Offline',
    placeID: '#1234',
    name: 'Workplace',
    roomCount: 8,
    devices: 7
  },
]

const CustomerInfo = () => {
  return (
    <PageWrapper >
      <AdmninSidebar />
      <PageContent >
        <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="View Customer" />

        {/* Content Area */}
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
                            <div className='w-26 h-26 rounded-lg bg-red-700 flex flex-col items-center justify-evenly p-3 '>
                            <h1 className='text-white text-xs '>Subscription</h1>
                            <h1 className='text-4xl my-2 font-semibold '>3</h1>
                                <h1 className='text-white text-xs '>Days Remaining</h1>
                            </div>
                        </div>
            </div>
          {/* <ButtonBar>
            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Place</button>
          </ButtonBar> */}
          <div className='flex flex-wrap px-8 py-2 justify-center'>
            {/* Cards */}
            {dataSet.map((data, index) => (<PlaceCard key={index} {...data} />))}
          </div>
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  )
}

export default CustomerInfo