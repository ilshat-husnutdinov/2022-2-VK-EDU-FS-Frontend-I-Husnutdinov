// парсит время на часы и минут HH:MM
export function parseTime(dateTime) {
    if (dateTime === undefined) {
        return;
    }

    dateTime = new Date(dateTime);
    return [dateTime.getHours(), dateTime.getMinutes()].map(function (x) {
                return x < 10 ? "0" + x : x
            }).join(":");
}