import React from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Heading } from './Typography';

export function TransferWidget() {
  return (
    <Card className="overflow-hidden max-w-lg mx-auto w-full">
      <div className="p-6 flex flex-col space-y-4">
        <Heading level={3} className="uppercase">
          Transfer
        </Heading>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          adipisci commodi
        </div>
        <div>
          <Button fill>Transfer ownership</Button>
        </div>
      </div>
    </Card>
  );
}
