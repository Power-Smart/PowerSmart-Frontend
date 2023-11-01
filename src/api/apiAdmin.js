
import api from ".";

export const getAllCustomersApi = async () => {
    try {
        const response = await api.get("/admin/customerView");
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getAllTechSupportApi = async () => {
    try {
        const response = await api.get("/admin/techSupportView");
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getAllItemsApi = async () => {
    try {
        const response = await api.get("/admin/itemsView");
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getAllPaymentsApi = async () => {
    try {
        const response = await api.get("/admin/paymentsView");
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getAllComplaintsApi = async () => {
    try {
        const response = await api.get("/admin/complaintView");
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getComplaintInfoApi = async (complaintId) => {
    try {
        const response = await api.get(`/admin/complaintInfo/${complaintId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateComplaintApi = async (complaintId, editedComplaint) => {
    try {
        const response = await api.put(`/admin/complaintEdit/${complaintId}`, editedComplaint);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPaymentInfoApi = async (paymentId) => {
    try {
        const response = await api.get(`/admin/paymentInfo/${paymentId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addTechSupport = async (techSupportData) => {
    try {
        const response = await api.post("/techSupportAdd", techSupportData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
