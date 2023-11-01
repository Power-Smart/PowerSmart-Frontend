import api from ".";

export const addReportApi = async (report) => {
    const response = await api.post("/reports/report", report);
    return response;
};

export const addFeedbackApi = async (feedback) => {
    const response = await api.post("/reports/feedback", feedback);
    return response;
};
