import React, { useCallback, useMemo } from 'react';
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi';
import { AccountButton } from './AccountButton';
// import { JSONPre } from './Playground';

export function ConnectButton() {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { data: balance, isLoading } = useBalance({
    addressOrName: address,
    watch: true,
  });
  const { disconnect } = useDisconnect();

  // console.log({
  //   useAccount: { connector, isConnected, address },
  //   useConnect: { connectors, error, isLoading, pendingConnector },
  // });

  const handleConnect = useCallback(() => {
    // console.log('onConnectClick', { connector });
    connect({ connector: connectors[0] });
  }, [connect, connectors]);

  const handleDisconnect = useCallback(() => {
    // console.log('handleDisconnect');
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
      onAddressClick={() => {
        console.log('onAddressClick');
      }}
      onBalanceClick={() => {
        console.log('onBalanceClick');
      }}
      account={account}
    />
  );
}
