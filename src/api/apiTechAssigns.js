import api from ".";

export const getCustomersApi = async (user_id) => {
    const response = await api.get(`/assigns/customers/${user_id}`);
    return response;
};

export const getPlacesByCustomer = async (user_id, customer_id) => {
    const response = await api.get(`/assigns/places/${user_id}/${customer_id}`);
    return response;
}