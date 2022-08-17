import React, { useMemo } from 'react';
import { useAccount, useBalance, useDisconnect } from 'wagmi';
import { useOnboarding } from '../OnboardingContainer';
import { AccountButton } from './AccountButton';

export function ConnectButton() {
  const { isConnected, address } = useAccount();
  const { data: balance } = useBalance({
    addressOrName: address,
    watch: true,
  });
  const { disconnect } = useDisconnect();
  const { connectWallet } = useOnboarding();

  const account = useMemo(() => {
    if (!isConnected || !address) {
      return undefined;
    }

    return {
      address,
      balance,
    };
  }, [address, balance, isConnected]);

  return (
    <AccountButton
      onConnectClick={connectWallet}
      onDisconnectClick={disconnect}
      account={account}
    />
  );
}

export { ConnectButton as default };
