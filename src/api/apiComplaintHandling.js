import api from ".";

export const getAllComplaintsApi = async (techSupportID) => {
    try {
        const response = await api.get(`/complaintHandling/${techSupportID}`);
        return response;
    } catch (error) {
        throw error;
    }
};


export const accpetOrRejectComplaintApi = async (updateData) => {
    try {
        const response = await api.patch(`/complaintHandling/accpetOrRejectComplaint`, updateData);
        return response;
    } catch (error) {
        throw error;
    }
};