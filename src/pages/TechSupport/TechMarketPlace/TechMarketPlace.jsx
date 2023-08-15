import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Title from 'antd/es/typography/Title'
import ItemCard from '../../../components/Cards/ItemCard'
import TechSupportTopBar from '../TechSupportTopBar/TechSupportTopBar'
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';


const buildPackages = [
    {
        id: 1,
        name: 'Sensor Kit (Small)',
        price: 8000,
        description: 'Package 1 description',
        quantity: 10,
        image: 'https://microchip.lk/wp-content/uploads/2019/05/37-sensor-in-kit.jpg'
    },
    {
        id: 2,
        name: 'Sensor Kit (Large)',
        price: 20000,
        description: 'Package 2 description',
        quantity: 8,
        image: 'https://microchip.lk/wp-content/uploads/2019/05/37-sensor-in-kit.jpg'
    },
    {
        id: 3,
        name: 'Relay Kit (Small)',
        price: 2500,
        description: '5 Relay Pack',
        quantity: 15,
        image: 'https://www.plusquip.com.au/wp-content/uploads/2013/07/REL-000-relay-replacement-kit.jpg'
    },
    {
        id: 4,
        name: 'Relay Kit (Large)',
        price: 5000,
        description: '10 Relay Pack',
        quantity: 5,
        image: 'https://www.plusquip.com.au/wp-content/uploads/2013/07/REL-000-relay-replacement-kit.jpg'
    },

];



const Packages = [
    {
        id: 1,
        name: 'Carbon dioxide Sensor',
        price: 8000,
        description: 'Package 1 description',
        quantity: 10,
        image: 'https://www.faranux.com/wp-content/uploads/2019/08/8b7139db-6616-4079-91d3-cbc1f0e48fb9.jpg'
    },
    {
        id: 2,
        name: 'PIR Sensor',
        price: 20000,
        description: 'Package 2 description',
        quantity: 8,
        image: 'https://i0.wp.com/lk-tronics.com/wp-content/uploads/2019/02/pir_sensor.jpg?ssl=1'
    },
    {
        id: 3,
        name: 'Node MCU Board',
        price: 2500,
        description: '5 Relay Pack',
        quantity: 15,
        image: 'https://www.heelectronicslk.com/wp-content/uploads/2021/06/nodemcu-esp8266-cp2102.jpg'
    },
    {
        id: 4,
        name: 'Relay(single)',
        price: 5000,
        description: '10 Relay Pack',
        quantity: 5,
        image: 'https://static-01.daraz.lk/p/1e82dbf5a3a7028ff75b5575988d4635.jpg'
    },
    {
        id: 4,
        name: 'Humidity Sensor',
        price: 5000,
        description: '10 Relay Pack',
        quantity: 5,
        image: 'https://nilambaraelectronics.com/wp-content/uploads/2019/09/dht-11-humidity-sensor-500x500.jpg'
    }

];

const TechMarketPlace = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TechSupportTopBar title={'Market Place'} />
                <ContentWrapper>
                    <div className='flex flex-col justify-center text-left '>
                        <h1 className='text-2xl font-bold'>Built in packages</h1>
                        <div className='grid grid-cols-4'>
                            {buildPackages.map((data, index) => <ItemCard key={index} {...data} addDel={false} />)}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center my-8'>
                        <h1 className='text-2xl font-bold'>Sensors and Relays</h1>
                        <div className='grid grid-cols-4'>
                            {Packages.map((data, index) => <ItemCard key={index} {...data} addDel={false} />)}
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default TechMarketPlace