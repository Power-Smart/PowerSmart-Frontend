import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import PlaceCard from '../../../components/Cards/PlaceCard'

const Places = () => {
  return (
    <section className='flex w-full'>
      <Sidebar />

      {/* Page Content */}
      <div className='flex flex-col flex-grow bg-[#0E0E1A] text-white'>
        {/* Top Bar */}
        <div className='px-16 py-5 flex justify-between items-center'>
          <div className='flex items-center justify-center'>
            <h2 className='text-3xl font-bold'>Places</h2>
          </div>
          <div className='flex items-center justify-center'>
            {/* Profile Pic */}
            <div>
              Profile
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className='px-16 py-4 flex flex-col flex-grow mx-auto'>
          {/* Button Bar */}
          <div className='flex items-center justify-end my-4 text-sm'>
            <button className='px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Place</button>
          </div>

          {/* Card Section */}
          <div className='flex flex-wrap px-8 py-2 mx-auto'>
            {/* Cards */}
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Places