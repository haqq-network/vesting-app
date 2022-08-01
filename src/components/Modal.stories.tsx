import React, { Fragment, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import { Button } from './Button';
import { Card } from './Card';

export default {
  title: 'ui-kit/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Modal>;

// const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
//   <Modal {...args} />
// );

export const BasicModal = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setOpen(true);
        }}
      >
        <Card className="p-6">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            error, qui odit adipisci quibusdam vero quam repellendus maiores,
            eveniet optio nesciunt veritatis deleniti aliquam quo! Ut nulla
            asperiores officia ducimus?
          </p>
          <br />
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Close modal
          </Button>
        </Card>
      </Modal>
    </Fragment>
  );
};
