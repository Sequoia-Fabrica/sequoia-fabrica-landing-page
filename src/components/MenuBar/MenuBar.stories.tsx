// Button.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import MenuBar from './MenuBar';

export default {
  title: 'Components/MenuBar',
  component: MenuBar,
  // Here you can add argTypes to control the props
} as Meta;

const Template: Story = (args) => <MenuBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // Define the props for your Primary button variant
};

export const Secondary = Template.bind({});
Secondary.args = {
  // Define the props for your Secondary button variant
};

// Add more variants as needed
