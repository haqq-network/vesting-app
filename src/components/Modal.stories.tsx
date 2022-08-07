import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import { ConnectionErrorModal } from './ConnectionErrorModal';
import { IrreversibleAlertModal } from './IrreversibleAlertModal';
import { Card } from './Card';

export default {
  title: 'ui-kit/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Modal {...args} />
);

export const DefaultModal = Template.bind({});
DefaultModal.args = {
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

export const ErrorConnectionModal = Template.bind({});
ErrorConnectionModal.args = {
  isOpen: true,
  children: <ConnectionErrorModal />,
};

export const AlertIrreversibleModal = Template.bind({});
AlertIrreversibleModal.args = {
  isOpen: true,
  children: (
    <IrreversibleAlertModal
      currentOwnerAddress={'0xF2C9eEE63abd1e16ad1Fce8aEf4F868e88e94593'}
      newOwnerAddress={'0xe40be11F5e7C6bC390bC4caf0138229a82eF6664'}
    />
  ),
};
