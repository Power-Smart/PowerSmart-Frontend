import api from ".";

// export const getDevices = async (userID, roomID) => {
//     try {
//         const response = await api.get(`/devices/${userID}/${roomID}`);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const getDevicesData = async (userID, roomID) => {
    try {
        const response = await api.get(`/devices/${userID}/${roomID}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const apiToggleDevice = async (deviceID, status) => {
    try {
        const response = await api.get(`/devices/toggle/${deviceID}/${status}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
