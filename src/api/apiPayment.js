import api from ".";

export const getOrderCustomerApi = async (cusID) => {
    const response = await api.get(`/payment/customer/${cusID}`);
    return response;
};
export const getOrderCustomerDetailApi = async (cusID) => {
    const response = await api.get(`/payment/customer/bill_details/${cusID}`);
    return response;
};

export const getOrderTotalApi = async (cusID, checkedList) => {
    const response = await api.post(`/payment/customer/total/${cusID}`, { checkedList });
    return response;
}