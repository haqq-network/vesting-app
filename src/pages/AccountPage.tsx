import React from 'react';
import AccountWidget from '../components/AccountWidget';
import Deposit from '../components/DepositStatsWidget';
import { Container } from '../components/Layout';
import { config } from '../config';

export function AccountPage() {
  return (
    <section className="py-20">
      <Container className="flex flex-col space-y-12">
        <AccountWidget />

        {config.contractAddress && (
          <Deposit contractAddress={config.contractAddress} />
        )}
      </Container>
    </section>
  );
}

export { AccountPage as default };
