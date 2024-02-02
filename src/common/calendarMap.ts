import meetup from '@/public/calendars/meetup.ics';

const calendarMap: Map<string, string> = new Map([
    ['meetup', meetup]    
]);

export function getCalendar(calendarName: string): string {
    return calendarMap.get(calendarName)!;
}