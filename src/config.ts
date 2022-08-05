import type { Chain } from 'wagmi';

export interface AppConfig {
  contractAddress: string | undefined;
  sentryDsn: string | undefined;
  network: string;
}

export const config: AppConfig = {
  contractAddress: process.env.CONTRACT_ADDRESS,
  sentryDsn: process.env.SENTRY_DSN,
  network: process.env.NETWORK ?? 'dev',
};

console.log({ config });

const currency = {
  name: 'Islamic Coin',
  symbol: 'ISLM',
  decimals: 18,
};

// Networks
export const chains: Record<string, Chain> = {
  dev: {
    id: 1337,
    name: 'Haqq devnet',
    network: 'haqq-devnet',
    rpcUrls: {
      default: 'http://127.0.0.1:7545',
      ws: 'ws://127.0.0.1:7545',
    },
    testnet: true,
    nativeCurrency: currency,
  },
  test: {
    id: 53211,
    name: 'Haqq testnet',
    network: 'haqq-testnet',
    rpcUrls: {
      default: 'https://rpc.eth.testedge.haqq.network',
      // ws: 'wss://rpc.eth.testedge.haqq.network',
    },
    testnet: true,
    blockExplorers: {
      default: {
        name: 'Blockscout',
        url: 'https://explorer.testedge.haqq.network',
      },
    },
    nativeCurrency: currency,
  },
  main: {
    id: 11235,
    name: 'Haqq mainnet',
    network: 'haqq-mainnet',
    rpcUrls: {
      default: 'https://rpc.eth.haqq.network',
      // ws: 'wss://rpc.eth.haqq.network',
    },
    testnet: false,
    blockExplorers: {
      default: {
        name: 'Blockscout',
        url: 'https://explorer.haqq.network',
      },
    },
    nativeCurrency: currency,
  },
};

export function getChain() {
  const currentChain = chains[config.network];

  if (!currentChain) {
    throw new Error(`No configuration for ${config.network}`);
  }

  return currentChain;
}
