export const dayConvertor = (day) => {
    switch (day) {
        case "sun":
            return "Sunday";
        case "mon":
            return "Monday";
        case "tue":
            return "Tuesday";
        case "wed":
            return "Wednesday";
        case "thu":
            return "Thursday";
        case "fri":
            return "Friday";
        case "sat":
            return "Saturday";
        default:
            return "Sunday";
    }
}

export const transformRoomStatus = (roomStatus) => {
    const temp = [];
    if (roomStatus.temperature) {
        temp.push({ title: 'Temperature', value: roomStatus.temperature, measure: '°C' });
    }
    if (roomStatus.hummidity_level) {
        temp.push({ title: 'Humidity', value: roomStatus.hummidity_level, measure: '%' });
    }
    if (roomStatus.co2_level) {
        temp.push({ title: 'Air Quality', value: (roomStatus.co2_level / 300 * 100).toFixed(2), other: `CO2: ${roomStatus.co2_level} ppm` });
    }
    if (roomStatus.light_intensity) {
        temp.push({ title: 'Light', value: roomStatus.light_intensity, measure: 'lux' });
    }
    return temp;
}

export const getDeviceType = (deviceType) => {
    switch (deviceType) {
        case "FAN":
            return "Fan";
        case "BULB":
            return "Light Bulb";
        default:
            return "Other";
    }
}