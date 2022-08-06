import React, { Fragment, ReactNode, SyntheticEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Card } from './Card';
import { Heading, Text } from './Typography';
import { Button } from './Button';
import { useToggle } from '../hooks/useToggle';
import styled from '@emotion/styled';

export interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalOverlay = styled.div`
  --modal-overlay-bg-color: rgba(12, 12, 12, 0.4);

  background-color: var(--modal-overlay-bg-color);
`;

export function Modal({ children, onClose, isOpen = false }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ModalOverlay
            role="none"
            className="fixed inset-0 backdrop-filter backdrop-blur transform-gpu"
            onClick={onClose}
            onKeyDown={(
              event: SyntheticEvent<HTMLDivElement, KeyboardEvent>,
            ) => {
              event.preventDefault();
              event.stopPropagation();

              if (event.nativeEvent.code === 'Escape') {
                onClose();
              }
            }}
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto pointer-events-none">
          <div className="flex min-h-full items-center justify-center p-4 pointer-events-none">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-full transform transition-all pointer-events-auto">
                {children}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

function ModalCloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="cursor-pointer w-[24px] h-[24px] text-dark-gray hover:text-primary"
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 6L18.7742 18.7742"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 18.7734L18.7742 5.99924"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
export interface AlertProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export function Alert({ isOpen, title, children, onClose }: AlertProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-2xl p-6 max-w-md mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <Heading level={3}>{title}</Heading>
            {onClose && <ModalCloseButton onClick={onClose} />}
          </div>

          <div>{children}</div>

          {onClose && (
            <div className="text-right">
              <Button onClick={onClose} className="min-w-[120px]">
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export function AlertWithDetails({
  onClose,
  isOpen,
  title,
  message,
  details,
}: any) {
  const [isDetailsOpen, toggleDetailsOpen] = useToggle(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-2xl p-6 max-w-md mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <Heading level={3}>{title}</Heading>
            {onClose && <ModalCloseButton onClick={onClose} />}
          </div>

          <div>
            <Text>{message}</Text>
          </div>

          {details && isDetailsOpen && (
            <div className="bg-white rounded-lg shadow-lg p-4">
              <code className="overflow-auto max-w-full block text-xs text-gray-500">
                {details}
              </code>
            </div>
          )}

          {onClose && (
            <div className="flex flex-row items-center justify-between">
              {details && (
                <button
                  onClick={toggleDetailsOpen}
                  className="text-xs leading-6 text-gray-700 underline hover:text-primary transition-colors duration-150"
                >
                  {isDetailsOpen ? 'Hide details' : 'Show details'}
                </button>
              )}
              <Button onClick={onClose} className="min-w-[120px]">
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
