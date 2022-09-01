import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  DepositStatsWidget as DepositStatsWidgetComponent,
  DepositStatsWidgetArgs,
} from './DepositStatsWidget';

export default {
  title: 'ui-kit/Widgets',
  component: DepositStatsWidgetComponent,
  // parameters: {
  //   layout: 'fullscreen',
  // },
} as ComponentMeta<typeof DepositStatsWidgetComponent>;

const Template: ComponentStory<typeof DepositStatsWidgetComponent> = (
  args: DepositStatsWidgetArgs,
) => {
  return <DepositStatsWidgetComponent {...args} />;
};

export const DepositStatsWidget = Template.bind({});
DepositStatsWidget.args = {};
