import React, { ReactElement } from 'react';
import { Button } from './Button';
import { Heading, Text } from './Typography';

export function AddNetwork(): ReactElement {
  const smallContainerClassNames = 'flex flex-col mb-[12px]';

  return (
    <div className="bg-transparent">
      <Heading level={2}>Allow to add a network</Heading>
      <div className="font-sans mb-[32px]">
        <Text color="light">
          This will allow this network to be used within MetaMask.
        </Text>
        <div className="bg-white rounded-[12px] p-[20px] mt-[24px]">
          <div className={smallContainerClassNames}>
            <Text bold> Network Name: </Text>
            <Text color="light"> Haqq Network Testnet </Text>
          </div>
          <div className={smallContainerClassNames}>
            <Text bold> Network Url: </Text>
            <Text color="light">https://rpc.eth.testedge.haqq.network</Text>
          </div>
          <div className={smallContainerClassNames}>
            <Text bold> Chain ID: </Text>
            <Text color="light"> 53211 </Text>
          </div>
          <Text bold color="primary">
            View all details
          </Text>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <Button type={'submit'}>Approve</Button>
      </div>
    </div>
  );
}
