import api from ".";

export const getAllCustomerOrderRequestsApi = async () => {
    try {
        const response = await api.get("/customerOrderRequests");
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const addCustomerOrderRequestApi = async (order) => {
    try {
        const response = await api.post("/customerOrderRequests/addOrder", order);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCustomerOrderRequestApi = async (orderID) => {
    try {
        const response = await api.delete(`/customerOrderRequests/deleteOrder/${orderID}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};

