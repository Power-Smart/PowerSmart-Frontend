import React from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Title from 'antd/es/typography/Title'
import ItemCard from '../../../components/Cards/ItemCard'
import TechSupportTopBar from '../TechSupportTopBar/TechSupportTopBar'
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';


const packages = [
    {
        id: 1,
        name: 'Package 1',
        price: 100,
        description: 'Package 1 description',
        quantity: 10,
        image: 'https://avatars.githubusercontent.com/u/7374455?v=4'
    },
    {
        id: 2,
        name: 'Package 2',
        price: 150,
        description: 'Package 2 description',
        quantity: 8,
        image: 'https://example.com/package2-image.jpg'
    },
    {
        id: 3,
        name: 'Package 3',
        price: 75,
        description: 'Package 3 description',
        quantity: 15,
        image: 'https://example.com/package3-image.jpg'
    },
    {
        id: 4,
        name: 'Package 4',
        price: 200,
        description: 'Package 4 description',
        quantity: 5,
        image: 'https://example.com/package4-image.jpg'
    },
    {
        id: 5,
        name: 'Package 5',
        price: 120,
        description: 'Package 5 description',
        quantity: 12,
        image: 'https://example.com/package5-image.jpg'
    },
];

const TechMarketPlace = () => {
    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TechSupportTopBar title={'Market Place'} />
                <ContentWrapper>
                    <div className='flex flex-col justify-center my-4 text-left'>
                        <h1 className='text-2xl font-bold'>Built in packages</h1>
                        <div className='flex flex-wrap p-4'>
                            {packages.map((data, index) => <ItemCard key={index} {...data} addDel={false} />)}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center my-4'>
                        <h1 className='text-2xl font-bold'>Sensors and Relays</h1>
                        <div className='flex flex-wrap p-4'>
                            {packages.map((data, index) => <ItemCard key={index} {...data} addDel={false} />)}
                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default TechMarketPlace