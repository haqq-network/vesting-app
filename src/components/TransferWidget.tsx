import React, { Fragment, useCallback, useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Heading } from './Typography';
import { Alert } from './modals/Alert';
import { Confirm } from './modals/Confirm';
import { Input } from './Input';
import { TransferOwnershipConfirmation } from './modals/TransferOwnershipConfirmation';

export function TransferWidget() {
  const [isWarningModalOpen, setWarningModalOpen] = useState<boolean>(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [isWarned, setWarned] = useState<boolean>(false);
  const [isTranferPending, setTranferPending] = useState<boolean>(false);

  const handleResetState = useCallback(() => {
    setWarningModalOpen(false);
    setConfirmModalOpen(false);
    setWarned(false);
  }, []);

  const handleDepositTransfer = useCallback(() => {
    setConfirmModalOpen(false);
    setTranferPending(true);
  }, []);

  return (
    <Card className="overflow-hidden max-w-lg mx-auto w-full">
      <div className="p-6 flex flex-col space-y-4">
        {!isWarned ? (
          <Fragment>
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
                onClick={() => {
                  setWarningModalOpen(true);
                }}
              >
                Transfer ownership
              </Button>
            </div>
          </Fragment>
        ) : (
          <>
            <Heading level={3} className="uppercase">
              Transfer With Input
            </Heading>
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
              disabled={isTranferPending}
            />
            <Button
              fill
              onClick={() => {
                setConfirmModalOpen(true);
              }}
              disabled={isTranferPending}
            >
              Transfer ownership
            </Button>
          </>
        )}
        <Alert
          isOpen={isWarningModalOpen}
          title={'FIRST Alert Modal'}
          onClose={() => {
            setWarningModalOpen(false);
          }}
          buttonTitle={'Proceed'}
          onClick={() => {
            setWarningModalOpen(false);
            setWarned(true);
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          adipisci commodi
        </Alert>
        <Confirm
          isOpen={isConfirmModalOpen}
          title={'SECOND Alert Modal'}
          onClose={handleResetState}
          buttonTitle={'Proceed'}
          onConfirm={handleDepositTransfer}
        >
          <TransferOwnershipConfirmation
            currentOwnerAddress={'0xe40be11F5e7C6bC390bC4caf0138229a82eF6664'}
            newOwnerAddress={'0x9a1FAb7FEd0b06045aAbEA2D1da73611F6DA2B07'}
          />
        </Confirm>
      </div>
    </Card>
  );
}
