import React, { ReactNode } from 'react';
import { Button, DangerButton } from '../Button';
import { Heading } from '../Typography';
import { Modal, ModalCloseButton } from './Modal';

export interface ConfirmProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  buttonTitle: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function Confirm({
  isOpen,
  title,
  children,
  onClose,
  buttonTitle,
  onConfirm,
}: ConfirmProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-2xl p-6 max-w-md mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <Heading level={3}>{title}</Heading>
            {onClose && <ModalCloseButton onClick={onClose} />}
          </div>

          <div>{children}</div>

          <div className="flex flex-row justify-between">
            <div className="min-w-[120px]">
              <Button onClick={onClose} fill>
                Abort
              </Button>
            </div>
            <div className="min-w-[120px]">
              <DangerButton onClick={onConfirm} fill>
                {buttonTitle}
              </DangerButton>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}