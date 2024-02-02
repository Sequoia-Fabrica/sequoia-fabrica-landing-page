import iCalendarPlugin from '@fullcalendar/icalendar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Component } from 'react';
import { EventContentArg } from '@fullcalendar/core';

export interface CalendarProps {
  url: string;
}

class Calendar extends Component<CalendarProps> {
  renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  render() {
    const events = {
      url: this.props.url,
      format: 'ics',
    };

    return (
      <>
        <FullCalendar
          plugins={[dayGridPlugin, iCalendarPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventContent={this.renderEventContent}
        />
      </>
    );
  }
}

export default Calendar;
