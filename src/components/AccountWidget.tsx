import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { IdentIcon } from './IdentIcon';
import { getFormattedAddress } from '../utils/getFormattedAddress';
import accountWidgetBgSrc from '../assets/account-widget-bg.svg';

function AccountAddress({ address }: { address: string }) {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <div className="flex flex-row space-x-2 items-center h-[32px] flex-1 overflow-hidden">
        <IdentIcon
          address={address}
          size={32}
          className="rounded-full leading-none flex-none"
        />
        <div
          className="overflow-ellipsis text-base font-medium overflow-hidden text-white"
          title={address}
        >
          {getFormattedAddress(address, 6)}
        </div>
      </div>
    </div>
  );
}

function AccountSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-[14px] bg-[#0eb471] rounded-[4px] w-[60px] mb-2 mt-1"></div>
      <div className="flex space-x-2 flex-row items-center h-[32px] flex-1">
        <div className="rounded-full bg-[#0eb471] h-[32px] w-[32px] flex-none"></div>
        <div className="h-[16px] bg-[#0eb471] rounded-[4px] flex-1 max-w-[110px]"></div>
      </div>
    </div>
  );
}

function BalanceSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-[16px] bg-[#0eb471] rounded-[4px] w-[110px] mb-2"></div>
      <div className="flex flex-row space-x-4 items-center mb-2">
        <div className="h-[40px] bg-[#0eb471] rounded-[4px] w-[140px] "></div>
        <div className="h-[40px] bg-[#0eb471] rounded-[4px] w-[80px] "></div>
      </div>
    </div>
  );
}

const AccountWidgetBackground = styled.img`
  position: absolute;
  z-index: 0;
  right: -50px;
  bottom: -50px;
  pointer-events: none;
  user-select: none;
`;

export interface AccountWidgetProps {
  isConnected: boolean;
  address: string;
  balance: number;
  symbol: string;
}

export function AccountWidget({
  isConnected,
  address,
  balance,
  symbol,
}: AccountWidgetProps) {
  return (
    <div className="max-w-lg mx-auto bg-[#06BE77] rounded-[16px] relative overflow-clip h-[220px] w-full">
      <AccountWidgetBackground src={accountWidgetBgSrc} />

      <div className="p-6 flex h-full flex-col relative z-10 justify-between">
        {isConnected ? (
          <Fragment>
            <div>
              <div className="leading-normal text-sm md:text-base text-white/80 mb-1">
                Account
              </div>
              <AccountAddress address={address} />
            </div>
            <div>
              <div className="leading-normal text-sm md:text-base text-white/80">
                Current balance
              </div>
              <div className="leading-light text-4xl md:text-5xl font-serif font-medium md:mt-1 text-white">
                {balance.toLocaleString()} {symbol.toLocaleUpperCase()}
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <AccountSkeleton />
            <BalanceSkeleton />
          </Fragment>
        )}
      </div>
    </div>
  );
}
