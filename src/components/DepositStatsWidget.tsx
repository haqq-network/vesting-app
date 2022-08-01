import React from 'react';
import { Card } from './Card';
import { Heading, Text } from './Typography';

// ISLM unlocked and withdrawn
// ISLM unlocked but not withdrawn
// ISLM locked
// Date and time of next unlock
// should be user's local time zone, zone should be seen by a user so that he is not confused
// Date and time of when deposit have been made
export function DepositStatsWidget() {
  return (
    <Card className="overflow-hidden max-w-lg mx-auto w-full">
      <div className="p-6 flex flex-col space-y-4">
        <Heading level={3} className="uppercase">
          Deposit stats
        </Heading>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          adipisci commodi
        </div>
        <div className="flex flex-row space-x-6">
          <div className="flex-1">
            <div>Available to withdraw</div>
            <div>{Math.random().toLocaleString()}</div>
          </div>
          <div className="flex-1">
            <div>Withdrawn</div>
            <div>{Math.random().toLocaleString()}</div>
          </div>
          <div className="flex-1">
            <div>Locked</div>
            <div>{Math.random().toLocaleString()}</div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div>
              <Text bold>Deposit start date:</Text>
            </div>
            <div>{new Date().toLocaleString()}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <Text bold>Next widthdrawal:</Text>
            </div>
            <div>{new Date().toLocaleString()}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <Text bold>My timezone:</Text>
            </div>
            <div>{Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
