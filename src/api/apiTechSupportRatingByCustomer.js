import api from ".";

export const getTechSupportRatingByCustomerApi = async (techSupportId) => {
    try {
        const response = await api.get("/techSupportRatingByCustomers/" + techSupportId);
        return response;
    } catch (error) {
        console.log(error);
    }
}
