import api from ".";

export const getMarketPlaceItemsApi = async () => {
    const response = await api.get(`/marketplace`);
    return response;
}

export const sendCustomerPaymentSummaryApi = async (data) => {
    const response = await api.post(`/marketplace/paymentSummary`, data);
    return response;
}