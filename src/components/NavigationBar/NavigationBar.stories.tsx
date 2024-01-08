// Button.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import NavigationBar from './NavigationBar';

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  // Here you can add argTypes to control the props
} as Meta;

const Template: Story = (args) => <NavigationBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // Define the props for your Primary button variant
};