import React from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Heading } from './Typography';

export function WithdrawWidget() {
  return (
    <Card className="overflow-hidden max-w-lg mx-auto w-full">
      <div className="p-6 flex flex-col space-y-4">
        <Heading level={3} className="uppercase">
          Withdraw
        </Heading>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          adipisci commodi
        </div>
        <div className="flex-1">
          <div>Available to withdraw</div>
          <div>{Math.random().toLocaleString()}</div>
        </div>
        <div>
          <Button fill>Request withdrawal</Button>
        </div>
      </div>
    </Card>
  );
}
