import React from 'react';
import { useOnboarding } from '../OnboardingContainer';
import { Button } from '../components/Button';
import { Heading, Text } from '../components/Typography';

export function MainPage() {
  const { connectWallet } = useOnboarding();

  return (
    <div className="flex flex-col space-y-14">
      <Heading level={1}>
        Shariah-compliant <br />
        digital money.
      </Heading>

      <Text color="light" className="leading-6 text-xl">
        The currency of the Haqq ecosystem.
        <br />
        Serves The Muslim Community.
        <br />
        Promotes Islamic values.
      </Text>

      <div>
        <Button onClick={connectWallet} className="px-10">
          Connect wallet
        </Button>
      </div>
    </div>
  );
}
