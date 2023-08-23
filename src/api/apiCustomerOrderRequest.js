import api from ".";

export const getAllCustomerOrderRequestsApi = async () => {
    try {
        const response = await api.get("/customerOrderRequests");
        return response;
    } catch (error) {
        console.log(error);
    }
};

