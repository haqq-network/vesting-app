import React, { useMemo } from 'react';
import { useAccount, useBalance } from 'wagmi';
import { AccountWidget } from '../components/AccountWidget';
import { DepositStatsWidget } from '../components/DepositStatsWidget';
import { Container } from '../components/Layout';
import { config, getChain } from '../config';

export function AccountPage() {
  const { address, isConnected } = useAccount();
  const {
    data: balance,
    isError,
    isLoading,
    status,
    error,
  } = useBalance({
    addressOrName: address,
    watch: true,
  });
  const chain = getChain();

  const accountWidgetProps = useMemo(() => {
    return {
      isConnected,
      address: address ?? '',
      balance: balance ? Number.parseFloat(balance.formatted) : 0,
      symbol: chain.nativeCurrency.symbol,
    };
  }, [address, balance, chain.nativeCurrency.symbol, isConnected]);

  return (
    <Container className="flex flex-col space-y-12 py-8 sm:py-20">
      <AccountWidget {...accountWidgetProps} />

      {config.contractAddress && (
        <DepositStatsWidget contractAddress={config.contractAddress} />
      )}
    </Container>
  );
}

export { AccountPage as default };
