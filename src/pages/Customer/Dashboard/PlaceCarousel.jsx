import Carousel from 'better-react-carousel'
import {CiTempHigh} from 'react-icons/ci'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {FaUsers} from 'react-icons/fa'


const PlaceCarousel = () => {
    return (
        <Carousel cols={2} rows={1} gap={10}  showDots>
            <Carousel.Item>
                <div className="room">
                    <h1 className="text-2xl">Room 01</h1>
                    <div className="room-details">
                        <div className="status flex justify-between">
                            <div className="image flex align-baseline">
                                <CiTempHigh className="text-3xl" />
                                <h1 className="text-xl">Temperature</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-xl">30°C</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex align-baseline">
                                <HiOutlineLightBulb className="text-3xl" />
                                <h1 className="text-xl">Light Intensity</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-xl">30%</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex align-baseline">
                                <FaUsers className="text-2xl" />
                                <h1 className="text-xl ml-1.5">Room Status</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-xl">Occupied</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="room">
                    <h1 className="text-2xl">Room 01</h1>
                    <div className="room-details">
                        <div className="status flex justify-between">
                            <div className="image flex align-baseline">
                                <CiTempHigh className="text-3xl" />
                                <h1 className="text-xl">Temperature</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-xl">30°C</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex align-baseline">
                                <HiOutlineLightBulb className="text-3xl" />
                                <h1 className="text-xl">Light Intensity</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-xl">30%</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex align-baseline">
                                <FaUsers className="text-2xl" />
                                <h1 className="text-xl ml-1.5">Room Status</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-xl">Occupied</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>


            <Carousel.Item>
                <div className="room">
                    <h1 className="text-2xl">Room 01</h1>
                    <div className="room-details">
                        <div className="status flex justify-between">
                            <div className="image flex align-baseline">
                                <CiTempHigh className="text-3xl" />
                                <h1 className="text-xl">Temperature</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-xl">30°C</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex align-baseline">
                                <HiOutlineLightBulb className="text-3xl" />
                                <h1 className="text-xl">Light Intensity</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-xl">30%</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex align-baseline">
                                <FaUsers className="text-2xl" />
                                <h1 className="text-xl ml-1.5">Room Status</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-xl">Occupied</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default PlaceCarousel