// Footer.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
// Here you can pass props to your Footer if it had any
// DefaultFooter.args = { ... };

