import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import PlaceCardTech from '../../../components/Cards/PlaceCardTech'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import { selectCustomer } from '../../../redux/slices/customerSlice'
import { fetchPlaces, selectPlaces, selectPlacesStatus, selectPlacesError } from '../../../redux/slices/placesSlice'
import LoadingSpinner from '../../../components/smallComps/LoadingSpinner'
import { Link } from 'react-router-dom'

const places = [
  {
    place_id: 1,
    name: 'Place 1',
    is_active: true,
    room_count: 3,
    location: 'Location 1'

  },
  {
    place_id: 2,
    name: 'Place 2',
    is_active: false,
    room_count: 3,
    location: 'Location 2'
  },
];

const Places = () => {


  return (
    <PageWrapper >
      <MainSidebar />
      <PageContent >
        <TopBar image="https://avatars.githubusercontent.com/u/7374455?v=4" title="Places" baclLink='/' />

        {/* Content Area */}
        <ContentWrapper>

          <div className='flex flex-wrap px-8 py-2 justify-center'>
            {/* Cards */}
            {places.map((data, index) => (<PlaceCardTech key={index} {...data} />))}
          </div>

        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  )
}

export default Places