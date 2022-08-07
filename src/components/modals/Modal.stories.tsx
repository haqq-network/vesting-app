import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal as ModalComponent, ModalProps } from './Modal';
import { Card } from '../Card';

export default {
  title: 'ui-kit/Modals',
  component: ModalComponent,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args: ModalProps) => (
  <Modal {...args} />
);

export const Modal = Template.bind({});
Modal.args = {
  isOpen: true,
  children: (
    <Card className="p-6 mx-auto max-w-md">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        error, qui odit adipisci quibusdam vero quam repellendus maiores,
        eveniet optio nesciunt veritatis deleniti aliquam quo! Ut nulla
        asperiores officia ducimus?
      </p>
    </Card>
  ),
};
