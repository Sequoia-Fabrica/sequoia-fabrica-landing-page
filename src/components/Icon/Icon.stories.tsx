// Button.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon, { IconProps } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  // Here you can add argTypes to control the props
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // Define the props for your Primary button variant
};

export const Secondary = Template.bind({});
Secondary.args = {
  // Define the props for your Secondary button variant
};

// Add more variants as needed
