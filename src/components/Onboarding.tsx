import React from 'react';
import { Container } from './Layout';
import { MainPage } from '../pages/MainPage';
import { AddNetworkPage } from '../pages/AddNetworkPage';
import { SwitchNetworkPage } from '../pages/SwitchNetworkPage';
import { useOnboarding } from '../OnboardingContainer';
// import { hexValue } from 'ethers/lib/utils';

export function Onboarding() {
  const { step } = useOnboarding();

  return (
    <Container>
      {/* TODO: Render as index page */}
      {step === 'start' && (
        <div className="py-20 mx-auto max-w-5xl">
          <MainPage />
        </div>
      )}

      {step === 'switch-network' && (
        <div className="py-20 mx-auto max-w-[600px]">
          <SwitchNetworkPage />
        </div>
      )}

      {step === 'add-network' && (
        <div className="py-20 mx-auto max-w-[600px]">
          <AddNetworkPage />
        </div>
      )}
    </Container>
  );
}
