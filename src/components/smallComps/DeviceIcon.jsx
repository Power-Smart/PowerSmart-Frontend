import { FaFan, FaLightbulb } from "react-icons/fa";
import { GiCooler } from "react-icons/gi";
import { BsFillDeviceSsdFill } from "react-icons/bs";

const DeviceIcon = ({ type }) => {
    switch (type) {
        case "FAN":
            return <FaFan className='text-2xl' />
        case "BULB":
            return <FaLightbulb className='text-2xl' />
        case "AC":
            return <GiCooler className='text-2xl' />
        default:
            return <BsFillDeviceSsdFill className='text-2xl' />
    }
}

export default DeviceIcon