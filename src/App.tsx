import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Container, Page } from './components/Layout';
import { Spinner } from './components/Playground';

const AccountWidget = lazy(() => import('./components/AccountWidget'));

export function WidgetsLoading() {
  return (
    <div className="min-h-[400px] py-16 flex items-center justify-center content-center">
      <Spinner />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Page header={<Header />} footer={<Footer />}>
        <section className="flex-1 bg-light-green">
          <Container className="py-10">
            <div className="flex flex-col space-y-10">
              <Suspense fallback={<WidgetsLoading />}>
                <AccountWidget />
                {/* <DepositStatsWidget /> */}
                {/* <WithdrawWidget /> */}
                {/* <TransferWidget /> */}
              </Suspense>
            </div>
          </Container>
        </section>
      </Page>
    </BrowserRouter>
  );
}
