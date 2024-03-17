import bookwhen from '@/public/calendars/bookwhen.ics';

const calendarMap: Map<string, string> = new Map([
    ['bookwhen', bookwhen]    
]);

export function getCalendar(calendarName: string): string {
    return calendarMap.get(calendarName)!;
}