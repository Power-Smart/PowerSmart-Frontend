import api from ".";

export const getSchedulesApi = async (userID, deviceID) => {
    const response = await api.get(`/scheduling/get_schedules/${userID}/${deviceID}`);
    return response;
}