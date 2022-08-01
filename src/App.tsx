import React from 'react';
// import clsx from 'clsx';
import { BrowserRouter } from 'react-router-dom';
import { AccountWidget } from './components/AccountWidget';
import { Button } from './components/Button';
// import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
// import { IdentIcon } from './components/IdentIcon';
import { Container, Page } from './components/Layout';
import { Tab, Tabs } from './components/Tabs';
import { Heading } from './components/Typography';
import { DepositStatsWidget } from './components/DepositStatsWidget';
import { WithdrawWidget } from './components/WithdrawWidget';
import { TransferWidget } from './components/TransferWidget';

function ConnectWalletPage() {
  return (
    <Container className="py-20">
      <div className="text-center">
        <Heading level={2} className="mb-12 uppercase">
          Connect with MetaMask
        </Heading>

        <Button fill className="max-w-xs">
          Connect Wallet
        </Button>
      </div>
    </Container>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Page header={<Header />} footer={<Footer />}>
        <section className="flex-1 bg-light-green">
          <Container className="py-10">
            <div className="flex flex-col space-y-10">
              <AccountWidget />
              <div className="max-w-xl mx-auto">
                <Tabs>
                  <Tab isActive>Stats</Tab>
                  <Tab>Withdraw</Tab>
                  <Tab>Transfer</Tab>
                </Tabs>
              </div>
              <DepositStatsWidget />
              <WithdrawWidget />
              <TransferWidget />
            </div>
          </Container>
        </section>
      </Page>
    </BrowserRouter>
  );
}
