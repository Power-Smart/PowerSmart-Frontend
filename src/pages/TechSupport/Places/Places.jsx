import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PlaceSidebar from '../../../components/Sidebar/TechSupport/PlaceSidebar'
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
import { getPlacesByCustomer } from '../../../api/apiTechAssigns'


const Places = () => {
  const { customerID } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    const placeData = await getPlacesByCustomer(user.id, customerID);
    setPlaces(placeData.data);
  }

  useEffect(() => {
    fetchPlaces();
  }, [user, dispatch]);

  return (
    <PageWrapper >
      <PlaceSidebar />
      <PageContent >
        <TopBar image="https://avatars.githubusercontent.com/u/7374455?v=4" title="Assigned Places" baclLink='/tech/accessCusAccount' />

        {/* Content Area */}
        <ContentWrapper>

          <div className='flex flex-wrap px-8 py-2 justify-center'>
            {/* Cards */}
            {(places.length > 0) && places.map((data, index) => (<PlaceCardTech key={index} {...data} />))}
            {!(places.length) && "No places to access"}
          </div>

        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  )
}

export default Places