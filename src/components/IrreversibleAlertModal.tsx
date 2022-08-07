import React, { ReactElement } from 'react';
import { Button, DangerButton } from './Button';
import { Card } from './Card';
import { Text } from './Typography';

interface IrreversibleAlertModalProps {
  currentOwnerAddress: string;
  newOwnerAddress: string;
  onClose?: () => void;
}

export function IrreversibleAlertModal({
  currentOwnerAddress,
  newOwnerAddress,
  onClose,
}: IrreversibleAlertModalProps): ReactElement {
  return (
    <Card className=" p-6 mx-auto max-w-lg">
      <div className="flex flex-col ">
        <div className="mb-[10px] break-words">
          <div className="mb-[2px]">
            <div>
              <Text>
                Are you sure you want to transfer deposit ownership from
                address&nbsp;
              </Text>
              <Text bold>&apos;{currentOwnerAddress}&apos;</Text>
            </div>
            <div>
              to&nbsp;
              <Text bold>&apos;{newOwnerAddress}&apos;</Text>
              &nbsp;?
            </div>
          </div>
          <Text bold>THIS OPERATION IS IRREVERSIBLE</Text>
        </div>
        <div className="flex justify-between">
          <Button type="submit" className="w-[45%]">
            Proceed
          </Button>
          <DangerButton onClick={onClose} className="w-[45%]">
            Cancel
          </DangerButton>
        </div>
      </div>
    </Card>
  );
}
