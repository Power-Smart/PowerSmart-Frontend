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
import LoadingSpinner from '../../../components/smallComps/LoadingSpinner'
import { Link } from 'react-router-dom'
import { fetchData, selectTechPlaces, selectTechPlacesStatus } from '../../../redux/slices/techsupport/techPlaceSlice'


const Places = () => {
  const { customerID } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const places = useSelector(selectTechPlaces);
  const techPlacesStatus = useSelector(selectTechPlacesStatus);

  useEffect(() => {
    if (user.id && techPlacesStatus === 'idle') {
      dispatch(fetchData({ user_id: user.id, customer_id: customerID }));
    }
  }, [user, dispatch]);

  return (
    <PageWrapper >
      <PlaceSidebar customerID={customerID} />
      <PageContent >
        <TopBar image="https://avatars.githubusercontent.com/u/7374455?v=4" title="Assigned Places" baclLink='/tech/accessCusAccount' />

        {/* Content Area */}
        <ContentWrapper>

          <div className='flex flex-wrap px-8 py-2 justify-center'>
            {/* Cards */}
            {(techPlacesStatus === 'loading') && <LoadingSpinner />}
            {(places.length > 0) && places.map((data, index) => (<PlaceCardTech key={index} {...data} customerID={customerID} />))}
            {!(places.length) && "No places to access"}
          </div>

        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  )
}

export default Places