import React, { useState } from 'react';
import { Button, DangerButton } from './Button';
import { Card } from './Card';
import { Heading, Text } from './Typography';
import { Alert } from './modals/Alert';
import { Input } from './Input';
import { ModalCloseButton } from './modals/Modal';

enum TransferWidgetStates {
  initialTransfer,
  isAlertWindowOpen,
  isIrreversibleWindowOpen,
  isFirstInputWindowOpen,
  isSecondInputWindowOpen,
}

export function TransferWidget() {
  const [state, setState] = useState<TransferWidgetStates>(
    TransferWidgetStates.initialTransfer,
  );

  return (
    <Card className="overflow-hidden max-w-lg mx-auto w-full">
      <div className="p-6 flex flex-col space-y-4">
        {state === TransferWidgetStates.initialTransfer && (
          <>
            <Heading level={3} className="uppercase">
              Transfer Start
            </Heading>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias adipisci commodi
            </div>
            <div>
              <Button
                fill
                onClick={() => setState(TransferWidgetStates.isAlertWindowOpen)}
              >
                Transfer ownership
              </Button>
            </div>
          </>
        )}
        {state === TransferWidgetStates.isAlertWindowOpen && (
          <Alert
            isOpen={true}
            title={'First Alert Modal'}
            onClose={() => setState(TransferWidgetStates.initialTransfer)}
            buttonTitle={'Proceed'}
            onClick={() =>
              setState(TransferWidgetStates.isFirstInputWindowOpen)
            }
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            adipisci commodi
          </Alert>
        )}
        {state === TransferWidgetStates.isFirstInputWindowOpen && (
          <>
            <div className="flex justify-between">
              <Heading level={3} className="uppercase">
                Transfer With Input
              </Heading>
              <ModalCloseButton
                onClick={() => setState(TransferWidgetStates.initialTransfer)}
              />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias adipisci commodi
            </div>
            <Input
              required
              type="text"
              label="address required"
              placeholder="Insert your metamask wallet address..."
              state="normal"
            />
            <Button
              fill
              onClick={() =>
                setState(TransferWidgetStates.isIrreversibleWindowOpen)
              }
            >
              Transfer ownership
            </Button>
          </>
        )}
        {state === TransferWidgetStates.isIrreversibleWindowOpen && (
          <div className="flex flex-col">
            <div className="mb-[10px] break-words">
              <div className="mb-[2px]">
                <div>
                  <Text>
                    Are you sure you want to transfer deposit ownership from
                    address&nbsp;
                  </Text>
                  <Text bold>&apos;{'currentOwnerAddress'}&apos;</Text>
                </div>
                <div>
                  to&nbsp;
                  <Text bold>&apos;{'newOwnerAddress'}&apos;</Text>
                  &nbsp;?
                </div>
              </div>
              <Text bold>THIS OPERATION IS IRREVERSIBLE</Text>
            </div>
            <div className="flex justify-between">
              <Button
                type="submit"
                className="w-[45%]"
                onClick={() =>
                  setState(TransferWidgetStates.isSecondInputWindowOpen)
                }
              >
                Proceed
              </Button>
              <DangerButton
                className="w-[45%]"
                onClick={() => setState(TransferWidgetStates.initialTransfer)}
              >
                Cancel
              </DangerButton>
            </div>
          </div>
        )}
        {state === TransferWidgetStates.isSecondInputWindowOpen && (
          <>
            <Heading level={3} className="uppercase">
              Transfer With Input
            </Heading>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias adipisci commodi
            </div>
            <Input disabled />
            <div>
              <Button
                fill
                disabled
                onClick={() =>
                  setState(TransferWidgetStates.isIrreversibleWindowOpen)
                }
              >
                Transfer ownership
              </Button>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
