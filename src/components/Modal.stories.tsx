import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Modal,
  ModalProps,
  AlertWithDetails as AlertWithDetailsComponent,
} from './Modal';
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
const AlertWithDetailsTemplate: ComponentStory<
  typeof AlertWithDetailsComponent
> = (args: ModalProps) => <AlertWithDetailsComponent {...args} />;

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

export const AlertWithDetails = AlertWithDetailsTemplate.bind({});
AlertWithDetails.args = {
  isOpen: true,
  title: 'Alert with details',
  message: 'someMessage',
  details:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perspiciatis pariatur praesentium possimus exercitationem blanditiis atque laborum, fuga dolorum ab odit aut minima, dolor doloribus delectus voluptas minus aspernatur cumque?',
};
