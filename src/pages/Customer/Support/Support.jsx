import './support.css';
import { useState } from 'react';
import { Card } from 'antd';
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import PageContent from '../../../components/Wrappers/PageContent';
import TopBar from '../../../components/smallComps/TopBar';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar';
import Report from './Report';
import Feedback from './Feedback';

const tabListNoTitle = [
    {
        key: 'Report',
        label: 'Report a Problem',
    },
    {
        key: 'Feedback',
        label: 'Feedback',
    },
    {
        key: 'Contact',
        label: 'Contact us',
    },
];

const contentListNoTitle = {
    Report: <p><Report /></p>,
    Feedback: <p><Feedback/></p>,
    Contact: <p>Contact us content</p>,
};

const Support = () => {
    const [activeTabKey2, setActiveTabKey2] = useState('Feedback');

    const onTab2Change = (key) => {
        setActiveTabKey2(key);
    };

    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Dashboard" />
                <ContentWrapper>
                    <Card
                        style={{ width: '100%' }}
                        tabList={tabListNoTitle}
                        activeTabKey={activeTabKey2}
                        onTabChange={onTab2Change}
                        color='#0856CD'
                        className='bg-[#1F2937] border-none custom-card'
                        headStyle={{ backgroundColor: '#83BCFF', color: 'white', fontSize: '2.5rem' }}
                        defaultActiveTabKey='Report'
                    >
                        {contentListNoTitle[activeTabKey2]}
                    </Card>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    );
}

export default Support;
