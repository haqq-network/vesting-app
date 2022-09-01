import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  BurgerButton as BurgerButtonComponent,
  BurgerButtonProps,
} from './BurgerButton';

export default {
  title: 'ui-kit/Button',
  component: BurgerButtonComponent,
} as ComponentMeta<typeof BurgerButtonComponent>;

const Template: ComponentStory<typeof BurgerButtonComponent> = (
  args: BurgerButtonProps,
) => {
  return <BurgerButtonComponent {...args} />;
};

export const BurgerButtonOpened = Template.bind({});
BurgerButtonOpened.args = {
  isOpen: true,
};
