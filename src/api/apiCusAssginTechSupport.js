import api from ".";

export const getAssignedTechSupportForCustomerApi = async (customerID) => {
    try {
        const response = await api.get(`/chat/getAssignedTechSupport/${customerID}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};