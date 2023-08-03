import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import TopBar from '../../../components/smallComps/TopBar'
import PageContent from '../../../components/Wrappers/PageContent'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ButtonBar from '../../../components/Wrappers/ButtonBar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import ItemCard from '../../../components/Cards/ItemCard'
import {useNavigate  } from 'react-router-dom'


const builtIn = [
  {
    description: "hello world, here you can see the description about your stock",
    name: 'Co2 Sensor',
    quantity: 3,
    price:"300.00",
    image: "/images/file-20201116-23-18wlnv.avif"
  },
  {
    description: "hello world, here you can see the description about your stock",
    name: 'Workplace',
    quantity: 8,
    price:"300.00",
    image: "/images/file-20201116-23-18wlnv.avif"
  },
  {
    description: "hello world, here you can see the description about your stock",
    name: 'Workplace',
    quantity: 8,
    price:"300.00",
    image: "/images/file-20201116-23-18wlnv.avif"
  },
]

const sensor = [
  {
    quantity: 5,
    name: 'Co2 Sensor',
    price:"300.00",
    description: "hello world, here you can see the description about your stock",
    image: "/images/P1050087_7fd47a8c-b46f-444f-8ba3-6e5f22cee38b.webp"
  },
  {
    quantity: 6,
    name: 'Workplace',
    price:"300.00",
    description: "hello world, here you can see the description about your stock",
    image: "/images/P1050087_7fd47a8c-b46f-444f-8ba3-6e5f22cee38b.webp"
  },
  {
    description: "hello world, here you can see the description about your stock",
    name: 'Home',
    price:"300.00",
    quantity: 3,
    image: "/images/P1050087_7fd47a8c-b46f-444f-8ba3-6e5f22cee38b.webp"
  },
  {
    description: "hello world, here you can see the description about your stock",
    name: 'Workplace',
    quantity: 8,
    price:"300.00",
    image: "/images/P1050087_7fd47a8c-b46f-444f-8ba3-6e5f22cee38b.webp"
  },
  {
    description: "hello world, here you can see the description about your stock",
    name: 'Co2 Sensor',
    quantity: 3,
    price:"300.00",
    image: "/images/P1050087_7fd47a8c-b46f-444f-8ba3-6e5f22cee38b.webp"
  },
  {
    description: "hello world, here you can see the description about your stock",
    name: 'Sensor',
    quantity: 8,
    price:"300.00",
    image: "/images/file-20201116-23-18wlnv.avif"
  },
]

const StockItem = () => {

  const navigateTo = useNavigate ();

  const handleAddItem = () => {
    navigateTo('/stockholder/add-stock');
  };

  return (
    <PageWrapper >
      <Sidebar />
      <PageContent >
        <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Stock" />

        {/* Content Area */}
        <ContentWrapper>
          <ButtonBar>
            <button onClick={handleAddItem} className='mx-2 px-4 py-2 font-bold bg-[#83BCFF] rounded-md text-black'>Add Item</button>
          </ButtonBar>

          <div className="built-in py-3 ">
          <h1 className='text-xl'>Built In Packages</h1>
          <div className='flex flex-wrap px-8 py-2 justify-start'>
            {/* Cards */}
            {builtIn.map((data, index) => (<ItemCard key={index} {...data} />))}
          </div>
          </div>

          <div className="built-in py-3 ">
          <h2>Sensors and Relays</h2>
          <div className='flex flex-wrap px-8 py-2 justify-start'>
            {/* Cards */}
            {sensor.map((data, index) => (<ItemCard key={index} {...data} />))}
          </div>
          </div>

        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  )
}

export default StockItem