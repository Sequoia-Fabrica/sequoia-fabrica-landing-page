import bookwhen from '@/public/calendars/bookwhen.ics';
import google from '@/public/calendars/google.ics';

const calendarMap: Map<string, string> = new Map([
    ['bookwhen', bookwhen],
    ['google', google],
]);

export function getCalendar(calendarName: string): string {
    return calendarMap.get(calendarName)!;
}