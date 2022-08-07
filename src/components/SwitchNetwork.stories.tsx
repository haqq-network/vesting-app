import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SwitchNetworkPage } from '../pages/SwitchNetworkPage';

export default {
  component: SwitchNetworkPage,
  title: 'vesting/SwitchNetwork',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof SwitchNetworkPage>;

const Template: ComponentStory<typeof SwitchNetworkPage> = (args) => (
  <SwitchNetworkPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  // children: 'Primary AddNetwork',
};
