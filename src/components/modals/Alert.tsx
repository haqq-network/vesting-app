import React, { ReactNode } from 'react';
import { Button } from '../Button';
import { Heading } from '../Typography';
import { Modal, ModalCloseButton } from './Modal';

export interface AlertProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export function Alert({ isOpen, title, children, onClose }: AlertProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-2xl p-6 max-w-max mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <Heading level={3}>{title}</Heading>
            <ModalCloseButton onClick={onClose} />
          </div>

          <div>{children}</div>

          <div className="text-right">
            <Button onClick={onClose} className="min-w-[120px]">
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
