import api from ".";

export const submitGuestUserSuggest = async (data) => {
    const response = await api.post(`/guestUser`,data);
    return response;
}