import React from 'react';
import { Alert, Space, Spin } from 'antd';
const LoadingSpinner = () => (
    <Space>
        <Spin size='large'>
        </Spin>
    </Space>
);
export default LoadingSpinner;