import api from ".";

export const getPlacesApi = async (userID) => {
    const response = await api.get(`/places/${userID}`);
    // console.log(response);
    return response;
};

export const getPlaceDataApi = async (placeID) => {
    const response = await api.get(`/places/place/${placeID}`);
    return response;
};
