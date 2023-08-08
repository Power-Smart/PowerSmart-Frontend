import api from ".";

export const getRoomsApi = async (userID, placeID) => {
    const response = await api.get(`/places/rooms/${userID}/${placeID}`);
    return response;
}

export const addRoomApi = async (room) => {
    const response = await api.post("/places/rooms/add", room)
    return response;
}