import React, { useState } from 'react';
import { Button, DangerButton } from './Button';
import { Card } from './Card';
import { Heading, Text } from './Typography';
import { Alert } from './modals/Alert';
import { Input } from './Input';
import { ModalCloseButton } from './modals/Modal';

enum kek {
  initialTransfer,
  isAlertOpen,
  isIrreversibleOpen,
  isInputOpenFirst,
  isInputOpenSecond,
}

export function TransferWidget() {
  const [state, setState] = useState<kek>(kek.initialTransfer);

  return (
    <Card className="overflow-hidden max-w-lg mx-auto w-full">
      <div className="p-6 flex flex-col space-y-4">
        {state === kek.initialTransfer && (
          <>
            <Heading level={3} className="uppercase">
              Transfer Start
            </Heading>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias adipisci commodi
            </div>
            <div>
              <Button fill onClick={() => setState(kek.isAlertOpen)}>
                Transfer ownership 1
              </Button>
            </div>
          </>
        )}
        {state === kek.isAlertOpen && (
          <Alert
            isOpen={true}
            title={'First Alert Modal'}
            onClose={() => setState(kek.initialTransfer)}
            buttonTitle={'Proceed'}
            onClick={() => setState(kek.isInputOpenFirst)}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            adipisci commodi
          </Alert>
        )}
        {state === kek.isInputOpenFirst && (
          <>
            <div className="flex justify-between">
              <Heading level={3} className="uppercase">
                Transfer With Input
              </Heading>
              <ModalCloseButton onClick={() => setState(kek.initialTransfer)} />
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
            <Button fill onClick={() => setState(kek.isIrreversibleOpen)}>
              Transfer ownership
            </Button>
          </>
        )}
        {state === kek.isIrreversibleOpen && (
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
                onClick={() => setState(kek.isInputOpenSecond)}
              >
                Proceed
              </Button>
              <DangerButton
                className="w-[45%]"
                onClick={() => setState(kek.initialTransfer)}
              >
                Cancel
              </DangerButton>
            </div>
          </div>
        )}
        {state === kek.isInputOpenSecond && (
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
                onClick={() => setState(kek.isIrreversibleOpen)}
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
