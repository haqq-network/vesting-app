import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  component: Input,
  title: 'ui-kit/Input',
  parameters: {
    // layout: 'centered',
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['normal', 'success', 'error'],
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'required',
  id: '1',
  placeholder: 'type here...',
  value: '0xF2C9eEE63abd1e16ad1Fce8aEf4F868e88e94593',
  state: 'normal',
  hint: '',
  type: 'text',
  required: true,
  disabled: false,
};

export const WithErrorHint = Template.bind({});
WithErrorHint.args = {
  label: 'required',
  id: '2',
  placeholder: 'type here...',
  value: '0xF2C9eEE63abd1e16ad1Fce8aEf4F868e88e94593',
  state: 'error',
  hint: 'something went wrong',
  type: 'text',
  required: true,
  disabled: false,
};

export const WithoutErrorHint = Template.bind({});
WithoutErrorHint.args = {
  label: 'required',
  id: '3',
  placeholder: 'type here...',
  value: '0xF2C9eEE63abd1e16ad1Fce8aEf4F868e88e94593',
  state: 'normal',
  hint: '',
  type: 'text',
  required: true,
  disabled: false,
};

export const Success = Template.bind({});
Success.args = {
  label: 'required',
  id: '4',
  placeholder: 'type here...',
  value: '0xF2C9eEE63abd1e16ad1Fce8aEf4F868e88e94593',
  state: 'success',
  hint: '',
  type: 'text',
  required: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'required',
  id: '5',
  placeholder: 'disabled',
  value: '0xF2C9eEE63abd1e16ad1Fce8aEf4F868e88e94593',
  state: 'normal',
  hint: '',
  type: 'text',
  required: true,
  disabled: true,
};

// TODO: stories
export const Number = Template.bind({});
Number.args = {
  label: 'required',
  id: '5',
  placeholder: 'disabled',
  value: 1234567890,
  state: 'normal',
  hint: '',
  type: 'number',
  required: true,
  disabled: true,
};
