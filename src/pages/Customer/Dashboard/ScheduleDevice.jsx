import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
import "./dashboard.css"


const ScheduleDevice = () => {
    return (
        <div className="one-schedule">
            <div className="time-details text-center">
                <h1 className="text-3xl mb-3">10:00 AM</h1>
                <h3 className='text-2ml'>Remain: 2h 30m</h3>
            </div>
            <div className="place-room-device">
                <h1 className='text-ml'>Place: Home</h1>
                <h1 className='text-ml'>Room: Kitchen</h1>
                <h1 className='text-ml'>Device: Light</h1>
            </div>
            <div className="toggle-btn">
                <Space direction="vertical">
                    <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
                </Space>
            </div>
        </div>
    )
}

export default ScheduleDevice