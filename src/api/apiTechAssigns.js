import api from ".";

export const getCustomersApi = async (user_id) => {
    const response = await api.get(`/assigns/customers/${user_id}`);
    return response;
};

export const getPlacesByCustomer = async (user_id, customer_id) => {
    const response = await api.get(`/assigns/places/${user_id}/${customer_id}`);
    return response;
}

export const getRoomsByPlace = async (user_id, place_id) => {
    const response = await api.get(`/assigns/rooms/${user_id}/${place_id}`);
    return response;
}

export const getRelayUnitsByPlace = async (user_id, place_id) => {
    const response = await api.get(`/assigns/relayunits/${user_id}/${place_id}`);
    return response;
}

export const addRelayUnitToPlace = async (user_id, place_id, data) => {
    const response = await api.post(`/assigns/relayunits/${user_id}/${place_id}`, {
        relayUnit: data
    });
    return response;
}

export const updateRelayUnit = async (user_id, place_id, relay_unit_id, data) => {
    const response = await api.put(`/assigns/relayunits/${user_id}/${place_id}/${relay_unit_id}`, {
        relayUnit: data
    });
    return response;
}

export const deleteRelayUnit = async (user_id, place_id, relay_unit_id) => {
    const response = await api.delete(`/assigns/relayunits/${user_id}/${place_id}/${relay_unit_id}`);
    return response;
}

export const getDevicesByRoom = async (user_id, place_id, room_id) => {
    const response = await api.get(`/assigns/devices/${user_id}/${place_id}/${room_id}`);
    return response;
}

export const addDeviceToRoom = async (user_id, place_id, room_id, data) => {
    const response = await api.post(`/assigns/devices/${user_id}/${place_id}/${room_id}`, {
        device: data
    });
    return response;
}

export const updateDeviceToRoom = async (user_id, place_id, room_id, device_id, data) => {
    const response = await api.put(`/assigns/devices/${user_id}/${place_id}/${room_id}/${device_id}`, {
        device: data
    });
    return response;
}

export const deleteDeviceFromRoom = async (user_id, place_id, room_id, device_id) => {
    const response = await api.delete(`/assigns/devices/${user_id}/${place_id}/${room_id}/${device_id}`);
    return response;
}