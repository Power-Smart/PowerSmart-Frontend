import DashboardImage from '../../../assets/images/dashboardImage.jpeg'
import './dashboard.css'


const DashboardTopHeader = () => {
    return (
        <div className="top-header">
            <div className="content">
                <h1>Hi, Jone Doe !</h1>
                {/* <h1>241 Days Left</h1> */}
            </div>
            <div className="image">
                <img src={DashboardImage} alt="" />
            </div>
        </div>
    )
}

export default DashboardTopHeader