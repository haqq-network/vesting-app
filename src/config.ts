import type { Chain } from 'wagmi';
import { version } from '../package.json';

const buildHash = process.env.BUILD_HASH ?? 'dev';

export interface AppConfig {
  contractAddress: string | undefined;
  sentryDsn: string | undefined;
  network: string;
  version: string;
}

export const config: AppConfig = {
  contractAddress: process.env.CONTRACT_ADDRESS,
  sentryDsn: process.env.SENTRY_DSN,
  network: process.env.NETWORK ?? 'dev',
  version: `${version}-${buildHash}`,
};

const currency: Chain['nativeCurrency'] = {
  name: 'Islamic Coin',
  symbol: 'ISLM',
  decimals: 18,
};

export const chains: Record<string, Chain> = {
  local: {
    id: 1337,
    name: 'Haqq Localnet',
    network: 'haqq-localnet',
    rpcUrls: {
      default: 'http://127.0.0.1:7545',
      ws: 'ws://127.0.0.1:7545',
    },
    nativeCurrency: currency,
    testnet: true,
  },
  dev: {
    id: 121799,
    name: 'Haqq Devnet',
    network: 'haqq-devnet',
    rpcUrls: {
      default: 'http://159.69.6.222:8545',
    },
    testnet: true,
    nativeCurrency: currency,
  },
  test: {
    id: 53211,
    name: 'Haqq Testnet',
    network: 'haqq-testnet',
    rpcUrls: {
      default: 'https://rpc.eth.testedge.haqq.network',
    },
    testnet: true,
    nativeCurrency: currency,
  },
  main: {
    id: 11235,
    name: 'Haqq Mainnet',
    network: 'haqq-mainnet',
    rpcUrls: {
      default: 'https://rpc.eth.haqq.network',
    },
    testnet: false,
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
