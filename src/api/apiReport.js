import api from ".";

export const addReportApi = async (report) => {
    const response = await api.post("/report", report);
    return response;
};

export const addFeedbackApi = async (feedback) => {
    const response = await api.post("/feedback", feedback);
    console.log("hllo");
    return response;
};