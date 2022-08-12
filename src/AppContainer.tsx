import React, { useMemo } from 'react';
import { ReactElement } from 'react';
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
// import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { getChain } from './config';
import { OnboardingContainer } from './OnboardingContainer';
import { BrowserRouter } from 'react-router-dom';

export function WagmiContainer({ children }: { children: ReactElement }) {
  const chain = getChain();

  const {
    provider,
    // webSocketProvider,
    chains,
  } = useMemo(() => {
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
      provider,
      // webSocketProvider,
      connectors: [
        new MetaMaskConnector({ chains }),
        // new InjectedConnector({ chains }),
      ],
      autoConnect: true,
    });
  }, [chains, provider]);

  return <WagmiConfig client={client}>{children}</WagmiConfig>;
}

export function AppContainer({ children }: { children: ReactElement }) {
  return (
    <BrowserRouter>
      <WagmiContainer>
        <OnboardingContainer>{children}</OnboardingContainer>
      </WagmiContainer>
    </BrowserRouter>
  );
}
