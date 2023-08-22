import api from ".";

export const getMarketPlaceItemsApi = async () => {
    const response = await api.get(`/marketplace`);
    return response;
}