import api from ".";

export const insertGuestUser = async (data) => {
    const response = await api.post(`/guestUser`, data);
    return response;
}

export const addGuestUserSuggest = async (data) => {
    const response = await api.post(`/guestUser/addSuggest`, data);
    return response;
}

export const getGuestUserSuggest = async (customerID) => {
    const response = await api.get(`/guestUser/allSuggest/${customerID}`);
    return response;
}


export const getAllGuestUsers = async (customerID) => {
    const response = await api.get(`/guestUser/allGuestUser/${customerID}`);
    return response;
    // console.log(response);
}

export const banAndUnbanGuestUser = async (data) => {
    const response = await api.post(`/guestUser/banAndUnbanGuestUser`, data);
    return response;
}

export const takeActionAndNotWant = async (data) => {
    const response = await api.post(`/guestUser/takeActionAndNotWant`, data);
    return response;
}

export const acceptGuestUserSuggest = async (data) => {
    const response = await api.post(`/guestUser/sendSMSWhenAcceptGusetUserRequest`, data);
    return response;
}

export const rejectGuestUserSuggest = async (data) => {
    const response = await api.post(`/guestUser/sendSMSWhenRejectGusetUserRequest`, data);
    return response;
}