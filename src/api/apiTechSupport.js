import api from ".";

export const getTechSupportApi = async (techSupportID) => {
    const response = await api.get(`/techSupport/${techSupportID}`);
    return response;
}

export const updateTechSupportProfileApi = async (values) => {
    const response = await api.patch(`/techSupport/techSupport_profile/${values.id}`, {
        first_name: values.first_name,
        last_name: values.last_name,
        tel_no: values.tel_no,
    });
    return response;
};