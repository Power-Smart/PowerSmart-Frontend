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

export const getSensorUnitOfRoom = async (user_id, place_id, room_id) => {
    const response = await api.get(`/assigns/sensorunit/${user_id}/${place_id}/${room_id}`);
    return response;
}

export const updateSensorUnit = async (room_id, sensor_unit_id, data) => {
    const response = await api.put(`/assigns/sensorunit/${room_id}/${sensor_unit_id}`, {
        sensorUnit: data
    });
    return response;
}

export const getSensorLogs = async (sensor_unit_id, no_of_rows) => {
    const response = await api.get(`/assigns/sensorunit/logs/${sensor_unit_id}/${no_of_rows}`);
    return response;
}

export const getAvailableUnitsCount = async (user_id, type) => {
    const response = await api.get(`/assigns/count/${user_id}/${type}`);
    return response;
}

export const sendAccessRequest = async (user_id, place_id, type) => {
    if (type === 'request') {
        const response = await api.get(`/assigns/access/request/${user_id}/${place_id}`);
        return response;
    } else {
        const response = await api.get(`/assigns/access/cancel/${user_id}/${place_id}`);
        return response;
    }
}