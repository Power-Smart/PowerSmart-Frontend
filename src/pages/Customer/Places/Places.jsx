import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import PlaceCard from '../../../components/Cards/PlaceCard'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import { selectCustomer } from '../../../redux/slices/customerSlice'
import { fetchPlaces, selectPlaces, selectPlacesStatus, selectPlacesError } from '../../../redux/slices/placesSlice'
import LoadingSpinner from '../../../components/smallComps/LoadingSpinner'
import { Link } from 'react-router-dom'



const Places = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const places = useSelector(selectPlaces);
  const placesStatus = useSelector(selectPlacesStatus);

  // console.log(places)

  useEffect(() => {
    if (user.id && placesStatus === 'idle') {
      dispatch(fetchPlaces(user.id));
    }
  }, [user, dispatch])


  return (
    <PageWrapper >
      <MainSidebar />
      <PageContent >
        <TopBar image="https://avatars.githubusercontent.com/u/7374455?v=4" title="Places" baclLink='/' />

        {/* Content Area */}
        <ContentWrapper>

          <ButtonBar>
            <Link to='/places/add'>
              <button className='mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black'>Add Place</button>
            </Link>
          </ButtonBar>

          <div className='flex flex-wrap px-8 py-2 justify-center'>
            {/* Cards */}
            {(placesStatus === 'loading' || placesStatus === 'idle') && <LoadingSpinner />}
            {placesStatus === 'succeeded' && places.map((data, index) => (<PlaceCard key={index} {...data} />))}
            {placesStatus === 'succeeded' && places.length === 0 && <div className='text-white'>No places found</div>}
          </div>

        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  )
}

export default Places