import React, { ReactElement, ReactNode } from 'react';
import { getChain } from '../config';
import { Button } from './Button';
import { AlertWithDetails } from './modals/AlertWithDetails';
import { Heading, Text } from './Typography';
import { useOnboarding } from '../OnboardingContainer';

function AddNetworkDetailsItem({
  title,
  value,
}: {
  title: string;
  value: ReactNode;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <Text bold>{title}</Text>
      <Text color="light">{value}</Text>
    </div>
  );
}

export function AddNetworkScreen(): ReactElement {
  const chain = getChain();
  const {
    errors: { addNetworkError },
    clearError,
    addNetwork,
  } = useOnboarding();

  return (
    <div className="flex flex-col space-y-8">
      <Heading level={2}>Add a network</Heading>

      <div>
        <Text color="light">
          Seems like you haven&apos;t add our network to MetaMask. <br />
          You can do it by pressing &quot;Add network&quot; button bellow.
        </Text>
      </div>

      <div className="bg-white rounded-[12px] p-[20px] shadow-lg flex flex-col space-y-6">
        <AddNetworkDetailsItem title="Network name" value={chain.name} />
        <AddNetworkDetailsItem
          title="Network url"
          value={chain.rpcUrls.default}
        />
        <AddNetworkDetailsItem title="Chain ID" value={chain.id} />
      </div>

      <div className="md:text-right">
        <Button onClick={addNetwork} className="min-w-[180px]">
          Add network
        </Button>
      </div>

      <AlertWithDetails
        isOpen={addNetworkError !== undefined}
        title="Add new network error"
        message="Something went wrong and we can't add new network to your wallet"
        details={addNetworkError?.message}
        onClose={() => clearError('addNetworkError')}
      />
    </div>
  );
}
