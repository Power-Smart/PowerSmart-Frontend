import api from ".";

export const getAllComplaintsApi = async (techSupportID) => {
    try {
        const response = await api.get(`/complaintHandling/${techSupportID}`);
        return response;
    } catch (error) {
        throw error;
    }
};