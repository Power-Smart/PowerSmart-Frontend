import React from 'react'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import PlaceCard from '../../../components/Cards/PlaceCard'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'

const dataSet = [
  {
    status: 'Online',
    name: 'Home',
    roomCount: 3,
    devices: 5
  },
  {
    status: 'Offline',
    name: 'Workplace',
    roomCount: 8,
    devices: 7
  },
]

const Places = () => {
  return (
    <PageWrapper >
      <MainSidebar />
      <PageContent >
        <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Places" />

        {/* Content Area */}
        <ContentWrapper>

          <ButtonBar>
            <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Place</button>
          </ButtonBar>

          <div className='flex flex-wrap px-8 py-2 justify-center'>
            {/* Cards */}
            {dataSet.map((data, index) => (<PlaceCard key={index} {...data} />))}
          </div>

        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  )
}

export default Places