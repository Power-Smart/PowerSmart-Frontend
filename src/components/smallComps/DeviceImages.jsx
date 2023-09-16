import { GiCooler } from "react-icons/gi";
import { BsFillDeviceSsdFill } from "react-icons/bs";
import lightBulb from '../../assets/images/devices/light_bulb.jpg'
import ceil_fan from '../../assets/images/devices/ceil_fan.webp'

const DeviceImages = (type) => {
    switch (type) {
        case "FAN":
            return ceil_fan;
        case "BULB":
            return lightBulb;
        default:
            return ""
    }
}

export default DeviceImages