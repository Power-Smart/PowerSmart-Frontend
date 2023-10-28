
export const antIconNotification = (api, placement, message, description, type = "info") => { //  "success" | "warning" | 'error'
    try {
        api[type]({
            placement,
            message,
            description: description ? description : "",
            duration: 3,
        });
    } catch (e) {
        api.info({
            placement,
            message,
            description: description ? description : "",
        });
    }
}