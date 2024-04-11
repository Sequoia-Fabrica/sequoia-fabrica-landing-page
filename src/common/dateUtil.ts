export function formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();;

    let formattedTime: string;

    if (hours >= 12) {
        formattedTime = `${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' + minutes : minutes}PM`;
    } else {
        formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}AM`;
    }

    return formattedTime;
}