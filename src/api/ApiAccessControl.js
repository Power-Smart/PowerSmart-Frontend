import api from ".";

export const accessListApi = async (user_id) => {
    try {
        const response = await api.get(`/access/requests/${user_id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const restrictAccessApi = async (user_id, place_id, tech_support_id) => {
    try {
        const response = await api.post(`/access/restrict_access/${user_id}`, {
            place_id,
            tech_support_id,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const controlAccessApi = async (user_id, place_id, tech_support_id, access_type) => {
    const response = await api.post(`/access/control_access/${user_id}`, {
        place_id,
        tech_support_id,
        access_type,
    });
    return response;
};