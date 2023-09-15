import api from ".";


export const getCustomerDetailsApi = async (customerID) => {
    const response = await api.get(`/customer/${customerID}`);
    return response;
};
