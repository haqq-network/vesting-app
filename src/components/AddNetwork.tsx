import React, { ReactElement } from 'react';
import { Button } from './Button';

export function AddNetwork(): ReactElement {
  const boldSpanClassNames =
    'font-[700] font-size-[16px] leading-[24px] text-black mb-[4px]';
  const lightSpanClassNames =
    'font-[400] font-size-[16px] leading-[24px] text-dark-gray';
  const smallContainerClassNames = 'flex flex-col mb-[12px]';

  return (
    <div className="bg-transparent">
      <div className="font-serif font-[700] font-size-[38px] leading-[48px] text-black mb-[20px] ">
        Allow to add a network
      </div>
      <div className="font-sans mb-[32px]">
        <span className={lightSpanClassNames}>
          This will allow this network to be used within MetaMask.
        </span>
        <div className="bg-white rounded-[12px] p-[20px] mt-[24px]">
          <div className={smallContainerClassNames}>
            <span className={boldSpanClassNames}> Network Name: </span>
            <span className={lightSpanClassNames}> Haqq Network Testnet </span>
          </div>
          <div className={smallContainerClassNames}>
            <span className={boldSpanClassNames}> Network Url: </span>
            <span className={lightSpanClassNames}>
              https://rpc.eth.testedge.haqq.network
            </span>
          </div>
          <div className={smallContainerClassNames}>
            <span className={boldSpanClassNames}> Chain ID: </span>
            <span className={lightSpanClassNames}> 53211 </span>
          </div>
          <span className="text-primary font-bold"> View all details </span>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        {/* How to correctly pass `Children` properties in this case?  */}
        <Button children={'Approve'} type={'submit'} />
      </div>
    </div>
  );
}
