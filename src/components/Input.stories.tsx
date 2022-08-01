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
  label: 'string',
  id: 'string',
  placeholder: 'string',
  value: 'InputValue',
  state: 'normal',
  hint: 'string',
  required: true,
};

// TODO: stories
