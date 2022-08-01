import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccountButton, AccountButtonProps } from './AccountButton';

export default {
  title: 'ui-kit-web3/AccountButton',
  component: AccountButton,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof AccountButton>;

const Template: ComponentStory<typeof AccountButton> = (
  args: AccountButtonProps,
) => <AccountButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  // address: '0xD090340493b9A23D2E695d2745BA7D7a4e8f836b',
  // size: 128,
};

export const Connected = Template.bind({});
Connected.args = {
  account: {
    address: '0xD090340493b9A23D2E695d2745BA7D7a4e8f836b',
    balance: '987.00',
  },
  symbol: 'islm',
};
