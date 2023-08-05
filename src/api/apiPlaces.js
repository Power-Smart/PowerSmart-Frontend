import api from ".";

export const getPlacesApi = async (userID) => {
    const response = await api.get(`/places/${userID}`);
    return response;
};

export const getPlaceDataApi = async (placeID) => {
    const response = await api.get(`/places/place/${placeID}`);
    return response;
};

export const addPlaceApi = async (place) => {
    const response = await api.post("/places/add", place);
    return response;
};
