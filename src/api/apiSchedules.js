import api from ".";

export const getSchedulesApi = async (userID, deviceID) => {
    const response = await api.get(`/scheduling/get_schedules/${userID}/${deviceID}`);
    return response;
}

export const createScheduleApi = async (userID, scheduleData) => {
    const response = await api.post(`/scheduling/create/${userID}`, scheduleData);
    console.log(response)
    return response;
} 