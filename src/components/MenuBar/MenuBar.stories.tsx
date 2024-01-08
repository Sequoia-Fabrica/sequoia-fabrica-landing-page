// Button.stories.tsx
import React from 'react';
import MenuBar from './MenuBar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuBar> = {
  component: MenuBar,
};

export default meta;
type Story = StoryObj<typeof MenuBar>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    isMenuOpen: false,
  },
};
