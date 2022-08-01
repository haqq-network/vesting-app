import React, { ReactElement } from 'react';

export function AddNetwork(): ReactElement {
  const boldSpanClassNames = 'font-bold mb-[4px] text-base text-black';
  const lightSpanClassNames = 'font-normal text-dark-grey';
  const smallContainerClassNames = 'flex flex-col mb-[12px]';

  return (
    <div className="bg-white rounded-[12px] p-[20px] font-sans">
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
  );
}
