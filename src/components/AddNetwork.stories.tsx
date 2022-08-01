import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddNetwork } from './AddNetwork';

export default {
  component: AddNetwork,
  title: 'ui-kit/AddNetwork',
  parameters: {
    // layout: 'centered',
  },
} as ComponentMeta<typeof AddNetwork>;

const Template: ComponentStory<typeof AddNetwork> = (args) => (
  <AddNetwork {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  // children: 'Primary AddNetwork',
};
