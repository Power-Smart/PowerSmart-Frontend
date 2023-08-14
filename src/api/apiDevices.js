import api from ".";

export const getDevices = async (userID, roomID) => {
    try {
        const response = await api.get(`/devices/${userID}/${roomID}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
