import { Meta, StoryObj } from "@storybook/react";
import Calendar from "./Calendar";
import meetup from '@/public/calendars/meetup.ics';

const meta: Meta<typeof Calendar> = {
    title: 'Components/Calendar',
    component: Calendar,
}
export default meta;

type Story = StoryObj<typeof Calendar>

export const DefaultCalendar: Story = {
    args: {
        url: meetup
    },
};