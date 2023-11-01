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

export const deleteScheduleApi = async (userID, scheduleID) => {
    const response = await api.delete(`/scheduling/delete/${userID}/${scheduleID}`);
    return response;
}

export const updateScheduleApi = async (userID, scheduleID, scheduleData) => {
    const response = await api.put(`/scheduling/update/${userID}/${scheduleID}`, scheduleData);
    return response;
}

export const updateScheduleStatusApi = async (scheduleID, status) => {
    const data = { status };
    const response = await api.put(`/scheduling/update_status/${scheduleID}`, data);
    return response;
}

export const userSchedulesApi = async (userID) => {
    const response = await api.get(`/scheduling/user_schedules/${userID}`);
    return response;
}