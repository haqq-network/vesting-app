import React, { useMemo } from 'react';
import { ReactElement } from 'react';
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
// import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { getChain } from './config';

function WagmiContainer({ children }: { children: ReactElement }) {
  const chain = getChain();

  const { provider: rpcProvider, webSocketProvider } = useMemo(() => {
    return configureChains(
      [chain],
      [
        jsonRpcProvider({
          rpc: (chain: Chain) => {
            return {
              http: chain.rpcUrls.default,
              webSocket: chain.rpcUrls.ws,
            };
          },
        }),
      ],
    );
  }, [chain]);
  const client = useMemo(() => {
    return createClient({
      provider: rpcProvider,
      webSocketProvider,
      connectors: [
        // new InjectedConnector({ chains: [chain] }),
        new MetaMaskConnector({ chains: [chain] }),
      ],
      autoConnect: true,
    });
  }, [chain, rpcProvider, webSocketProvider]);

  return <WagmiConfig client={client}>{children}</WagmiConfig>;
}

export function AppContainer({ children }: { children: ReactElement }) {
  return <WagmiContainer>{children}</WagmiContainer>;
}
