// Button.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Header from '@/src/components/Header/Header';

export default {
  title: 'Components/Header',
  component: Header,
  // Here you can add argTypes to control the props
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // Define the props for your Primary button variant
};

export const Secondary = Template.bind({});
Secondary.args = {
  // Define the props for your Secondary button variant
};

// Add more variants as needed
