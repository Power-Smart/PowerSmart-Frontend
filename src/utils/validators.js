export const subValidation = (timestamp) => {
    if (!timestamp) return false;
    const subscriptionStartDate = new Date(timestamp).getTime();
    return isSubscriptionValid(subscriptionStartDate);
}

function isSubscriptionValid(subscriptionStartDate) {
    const currentTimestamp = Date.now();
    const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;
    const subscriptionEndDate = subscriptionStartDate + oneYearInMilliseconds;
    return currentTimestamp <= subscriptionEndDate;
}