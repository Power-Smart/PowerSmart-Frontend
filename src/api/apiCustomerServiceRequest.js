import api from ".";

export const getAllCustomerServiceRequestsApi = async (techSupportID) => {
    try {
        const response = await api.get(`/customerServiceRequest/${techSupportID}`);
        return response.data;
    } catch (error) {
        console.log(error); 
    }
};