import React, { ReactNode } from 'react';
import { Button, DangerButton } from '../Button';
import { Heading } from '../Typography';
import { Modal, ModalCloseButton } from './Modal';

export interface AlertProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  buttonTitle: string;
  onClose: () => void;
  onClick: () => void;
}

export function Alert({
  isOpen,
  title,
  children,
  onClose,
  buttonTitle,
  onClick,
}: AlertProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-2xl p-6 max-w-md mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <Heading level={3}>{title}</Heading>
            {onClose && <ModalCloseButton onClick={onClose} />}
          </div>

          <div>{children}</div>

          {onClick && (
            <div className="text-right">
              <Button onClick={onClick} className="min-w-[120px]">
                {buttonTitle}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
