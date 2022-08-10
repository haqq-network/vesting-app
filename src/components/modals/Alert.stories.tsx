import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert as AlertComponent, AlertProps } from './Alert';
import { Confirm as ConfirmComponent, ConfirmProps } from './Alert';

export default {
  title: 'ui-kit/Modals',
  component: AlertComponent,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof AlertComponent>;

const Template: ComponentStory<typeof AlertComponent> = (args: AlertProps) => (
  <AlertComponent {...args} />
);

const ConfirmTemplate: ComponentStory<typeof ConfirmComponent> = (
  args: ConfirmProps,
) => <ConfirmComponent {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  isOpen: true,
  title: 'Example alert',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perspiciatis pariatur praesentium possimus exercitationem blanditiis atque laborum, fuga dolorum ab odit aut minima, dolor doloribus delectus voluptas minus aspernatur cumque?',
};

export const Confirm = ConfirmTemplate.bind({});
Confirm.args = {
  isOpen: true,
  title: 'Example alert',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perspiciatis pariatur praesentium possimus exercitationem blanditiis atque laborum, fuga dolorum ab odit aut minima, dolor doloribus delectus voluptas minus aspernatur cumque?',
  buttonTitle: 'Confirm',
};
