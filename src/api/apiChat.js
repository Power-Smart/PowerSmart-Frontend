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
