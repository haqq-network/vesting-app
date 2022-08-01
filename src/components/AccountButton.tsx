import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Button } from './Button';
import { IdentIcon } from './IdentIcon';

function AddressButton({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const classNames = clsx(
    'h-[36px] px-[8px] py-[6px] appearance-none outline-none',
    'rounded-[6px] font-sans',
    'flex flex-row space-x-[8px] justify-center items-center',
    'bg-white hover:bg-white/90',
    'transition-colors duration-[125ms] ease-linear',
    className,
  );

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

function BalanceButton({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const classNames = clsx(
    'font-serif text-base leading-[24px]',
    'px-[22px] py-[8px] rounded-none',
    'text-white bg-primary hover:bg-[#20d775]',
    'transition-colors duration-[125ms] ease-linear',
    className,
  );

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export interface AccountButtonProps {
  account?: {
    address: string;
    balance: string;
  };
  symbol?: string;
  onConnectClick?: () => void;
  onAddressClick?: () => void;
  onBalanceClick?: () => void;
}

export function AccountButton({
  account,
  symbol,
  onConnectClick,
  onAddressClick,
  onBalanceClick,
}: AccountButtonProps): ReactElement {
  if (!account) {
    return <Button onClick={onConnectClick}>Connect Wallet</Button>;
  }

  return (
    <div className="rounded-[8px] overflow-hidden bg-primary flex flex-row ">
      <BalanceButton onClick={onBalanceClick}>
        <div className="mb-[-4px]">
          {account.balance} {symbol?.toLocaleUpperCase()}
        </div>
      </BalanceButton>

      <AddressButton onClick={onAddressClick} className="m-[2px]">
        <div className="text-[14px]">{`0x...${account.address
          .toLocaleLowerCase()
          .slice(-4)}`}</div>
        <IdentIcon address={account.address} size={16} />
      </AddressButton>
    </div>
  );
}
