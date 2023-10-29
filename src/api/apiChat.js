import api from ".";

export const getChatHistoryofCustomerTechSupportSenderMsgApi = async (customerID, techSupportID) => {
    try {
        const response = await api.get(`/chat/getChatHistoryofCustomerTechSupportSenderMsg/${customerID}/${techSupportID}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getChatHistoryofCustomerTechSupportReceiverMsgApi = async (customerID, techSupportID) => {
    try {
        const response = await api.get(`/chat/getChatHistoryofCustomerTechSupportReceiverMsg/${customerID}/${techSupportID}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}


export const sendMsgToTechSupportApi = async (data) => {
    try {
        const response = await api.post(`/chat/sendMsgToTechSupport`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const sendMsgToCustomerApi = async (data) => {
    try {
        const response = await api.post(`/chat/sendMsgToCustomer`, data);
        // console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}