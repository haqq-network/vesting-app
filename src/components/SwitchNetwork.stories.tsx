import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SwitchNetwork } from './SwitchNetwork';

export default {
  component: SwitchNetwork,
  title: 'ui-kit/SwitchNetwork',
  parameters: {
    // layout: 'centered',
  },
} as ComponentMeta<typeof SwitchNetwork>;

const Template: ComponentStory<typeof SwitchNetwork> = (args) => (
  <SwitchNetwork {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  // children: 'Primary AddNetwork',
};
