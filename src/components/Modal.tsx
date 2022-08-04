import React, { Fragment, ReactNode, SyntheticEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: ReactNode;
}

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
          <div
            role="none"
            className="fixed inset-0 backdrop-filter backdrop-blur transform-gpu bg-[rgba(12, 12, 12, 0.4)]"
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
