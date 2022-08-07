import React, { useCallback, useMemo } from 'react';
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

  const handleConnect = useCallback(() => {
    connectWallet();
  }, [connectWallet]);

  const handleDisconnect = useCallback(() => {
    disconnect();
  }, [disconnect]);

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
      onConnectClick={handleConnect}
      onDisconnectClick={handleDisconnect}
      account={account}
    />
  );
}

export { ConnectButton as default };
