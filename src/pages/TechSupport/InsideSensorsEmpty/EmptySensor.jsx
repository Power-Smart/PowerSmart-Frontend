import { FaPlus } from 'react-icons/fa'
import './EmptySensor.css'


const EmptySensor = () => {
    return (
        <section className="page__body">
            <div className="not__available_sensor__kit">
                <div className="plus__icon cursor-pointer">
                    <FaPlus className='w-12 h-12' />
                </div>
                <div className="description">
                    <h3>No sensor kit configured.</h3>
                    <h3>Click to add a sensor kit.</h3>
                </div>
            </div>
        </section>
    )
}

export default EmptySensor