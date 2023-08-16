import api from ".";

export const getOrderCustomerApi = async (cusID) => {
    const response = await api.get(`/payment/customer/${cusID}`);
    return response;
};
