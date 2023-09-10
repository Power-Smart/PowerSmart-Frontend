import Carousel from 'better-react-carousel'
import { CiTempHigh } from 'react-icons/ci'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { FaUsers } from 'react-icons/fa'


const PlaceCarousel = ({ place_id, rooms = [], isActive }) => {
    console.log(place_id, rooms);
    return (
        <Carousel cols={rooms.length === 0 ? 1 : 2} rows={1} gap={10} showDots={rooms.length === 0 ? false : true}>
            {rooms.length > 0 ? rooms.map((room, index) => (
                room?.sensor_unit_id ? <Carousel.Item key={index}>
                    <div className="room">
                        <h1 className="text-xl">{room.room_name}</h1>
                        <div className="room-details">
                            <div className="status flex justify-between">
                                <div className="image flex items-center">
                                    <CiTempHigh className="text-2sm" />
                                    <h1 className="text-2sm ml-1">Temperature</h1>
                                </div>
                                <div className="text">
                                    <h1 className="text-2sm">{room.temperature}</h1>
                                </div>
                            </div>

                            <div className="status flex justify-between">
                                <div className="image flex items-center">
                                    <HiOutlineLightBulb className="text-2sm" />
                                    <h1 className="text-2sm ml-1">light_intensity</h1>
                                </div>
                                <div className="text">
                                    <h1 className="text-2sm">{room.light_intensity}%</h1>
                                </div>
                            </div>

                            <div className="status flex justify-between">
                                <div className="image flex items-center">
                                    <FaUsers className="text-2sm" />
                                    <h1 className="text-2sm ml-1">Room Status</h1>
                                </div>
                                <div className="text">
                                    <h1 className="text-2sm">{room.pir_reading ? "Occupied" : "Unoccupied"}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item> :
                    <Carousel.Item key={index}>
                        <div className="room">
                            <h1 className="text-xl">{room.room_name}</h1>
                            <div className="room-details">
                                <div className="status flex justify-between">
                                    <div className="image flex items-center">
                                        <FaUsers className="text-2sm" />
                                        <h1 className="text-2sm ml-1 text-center"> No sensors plugged yet ! </h1>
                                    </div>
                                </div>
                                <div className="status flex justify-between">
                                    <div className="text">
                                        <h1 className="text-2sm text-gray-500">Room : Activated</h1>
                                    </div>
                                </div>
                                <div className="status flex justify-between">
                                    <div className="text">
                                        <h1 className="text-2sm text-gray-500">Sensors : Not plugged</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
            )) :
                <Carousel.Item>
                    <div className="room text-center mx-5">
                        <h1>{isActive ? "No Rooms Available" : "Not an Active Place"}</h1>
                    </div>
                </Carousel.Item>

            }

            {/* <Carousel.Item>
                <div className="room">
                    <h1 className="text-xl">Room 01</h1>
                    <div className="room-details">
                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <CiTempHigh className="text-2sm" />
                                <h1 className="text-2sm ml-1">Temperature</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">30°C</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <HiOutlineLightBulb className="text-2sm" />
                                <h1 className="text-2sm ml-1"> Light Intensity</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">30%</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <FaUsers className="text-2sm" />
                                <h1 className="text-2sm ml-1">Room Status</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">Occupied</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item> */}


            {/* <Carousel.Item>
                <div className="room">
                    <h1 className="text-xl">Room 01</h1>
                    <div className="room-details">
                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <CiTempHigh className="text-2sm" />
                                <h1 className="text-2sm ml-1">Temperature</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">30°C</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <HiOutlineLightBulb className="text-2sm" />
                                <h1 className="text-2sm ml-1"> Light Intensity</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">30%</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <FaUsers className="text-2sm" />
                                <h1 className="text-2sm ml-1">Room Status</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">Occupied</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="room">
                    <h1 className="text-xl">Room 01</h1>
                    <div className="room-details">
                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <CiTempHigh className="text-2sm" />
                                <h1 className="text-2sm ml-1">Temperature</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">30°C</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <HiOutlineLightBulb className="text-2sm" />
                                <h1 className="text-2sm ml-1"> Light Intensity</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">30%</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <FaUsers className="text-2sm" />
                                <h1 className="text-2sm ml-1">Room Status</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">Occupied</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>


            <Carousel.Item>
                <div className="room">
                    <h1 className="text-xl">Room 01</h1>
                    <div className="room-details">
                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <CiTempHigh className="text-2sm" />
                                <h1 className="text-2sm ml-1">Temperature</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">30°C</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <HiOutlineLightBulb className="text-2sm" />
                                <h1 className="text-2sm ml-1"> Light Intensity</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">30%</h1>
                            </div>
                        </div>

                        <div className="status flex justify-between">
                            <div className="image flex items-center">
                                <FaUsers className="text-2sm" />
                                <h1 className="text-2sm ml-1">Room Status</h1>
                            </div>
                            <div className="text">
                                <h1 className="text-2sm">Occupied</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item> */}
        </Carousel>
    )
}

export default PlaceCarousel