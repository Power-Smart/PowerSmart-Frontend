import api from ".";

export const getRoomsApi = async (userID,placeID) => {
    const response = await api.get(`/places/rooms/${userID}/${placeID}`);
    return response;
}