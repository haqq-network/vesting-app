import React, { ReactElement } from 'react';
import { Button, DangerButton } from './Button';
import { Card } from './Card';
import { Text } from './Typography';

interface IrreversibleAlertModalProps {
  onClose?: () => void;
}

export function IrreversibleAlertModal({
  onClose,
}: IrreversibleAlertModalProps): ReactElement {
  return (
    <Card className=" p-6 mx-auto max-w-lg">
      <div className="flex flex-col ">
        <div className="mb-[10px]">
          <div className="mb-[2px]">
            <div>
              <Text>
                Are you sure you want to transfer deposit ownership from address
              </Text>
              <Text bold>
                {/* current_owner_address */}
                &apos;0xF2C9eEE63abd1e16ad1Fce8aEf4F868e88e94593&apos;
              </Text>
            </div>
            <div>
              to&nbsp;
              <Text bold>
                {/* new_owner_address */}
                &apos;0xF2C9eEE63abd1e16ad1Fce8aEf4F868e88e94593&apos;
              </Text>
              &nbsp;?
            </div>
          </div>
          <Text bold>THIS OPERATION IS IRREVERSIBLE</Text>
        </div>
        <div className="flex justify-between">
          <Button type="submit"> Proceed </Button>
          <DangerButton onClick={onClose}> Cancel </DangerButton>
        </div>
      </div>
    </Card>
  );
}
