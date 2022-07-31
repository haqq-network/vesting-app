import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'ui-kit/Button',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  outline: true,
  children: 'Outline Disabled Button',
  disabled: true,
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  children: 'Outline Button',
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
  outline: true,
  children: 'Outline Disabled Button',
  disabled: true,
};
