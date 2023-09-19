export const dayConvertor = (day) => {
    switch (day) {
        case "sun":
            return "Sunday";
        case "mon":
            return "Monday";
        case "tue":
            return "Tuesday";
        case "wed":
            return "Wednesday";
        case "thu":
            return "Thursday";
        case "fri":
            return "Friday";
        case "sat":
            return "Saturday";
        default:
            return "Sunday";
    }
}