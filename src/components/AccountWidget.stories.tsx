import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccountWidget as AccountWidgetComponent } from './AccountWidget';

export default {
  title: 'ui-kit/Widgets',
  component: AccountWidgetComponent,
  // parameters: {
  //   layout: 'centered',
  // },
} as ComponentMeta<typeof AccountWidgetComponent>;

const Template: ComponentStory<typeof AccountWidgetComponent> = (args: any) => {
  return <AccountWidgetComponent {...args} />;
};

export const AccountWidget = Template.bind({});
AccountWidget.args = {};
