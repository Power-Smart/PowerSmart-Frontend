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

