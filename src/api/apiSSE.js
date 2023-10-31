import api from ".";

const URL = `${import.meta.env.VITE_APP_API_URL}:${import.meta.env.VITE_APP_API_PORT}`;

export const getPlaceEvent = (user_id) => {
    const source = new EventSource(`${URL}/sensor_data/places/data/${user_id}`)
    console.log(source)
    return source
}

export const getRoomStatus = async (room_id) => {
    const data = await api.get(`/sensor_data/rooms/data/${room_id}`)
    return data;
}