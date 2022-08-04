import React from 'react';
// import React, { useCallback, useEffect } from 'react';
// import clsx from 'clsx';
import { BrowserRouter } from 'react-router-dom';
import { AccountWidget } from './components/AccountWidget';
// import { Button } from './components/Button';
// import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
// import { IdentIcon } from './components/IdentIcon';
import { Container, Page } from './components/Layout';
// import { Tab, Tabs } from './components/Tabs';
// import { Heading } from './components/Typography';
// import { DepositStatsWidget } from './components/DepositStatsWidget';
// import { WithdrawWidget } from './components/WithdrawWidget';
// import { TransferWidget } from './components/TransferWidget';
// import { Spinner } from './components/Playground';
// import { useAccount, useConnect, useDisconnect } from 'wagmi';
// import { Card } from './components/Card';

// function ConnectWalletPage() {
//   return (
//     <Container className="py-20">
//       <div className="text-center">
//         <Heading level={2} className="mb-12 uppercase">
//           Connect with MetaMask
//         </Heading>

//         <Button fill className="max-w-xs">
//           Connect Wallet
//         </Button>
//       </div>
//     </Container>
//   );
// }

// export function Connect() {
//   const { connector, isConnected } = useAccount();
//   const { connect, connectors, error, isLoading, pendingConnector } =
//     useConnect();
//   const { disconnect } = useDisconnect();

//   console.log({
//     useAccount: { connector, isConnected },
//     useConnect: { connectors, error, isLoading },
//   });

//   useEffect(() => {
//     console.log('====');
//     console.log(connectors);
//     console.log(connectors.filter((x) => x.ready && x.id !== connector?.id));
//     console.log('====');
//   }, []);

//   const handleConnect = useCallback(() => {
//     connect({ connector: connectors[0] });
//   }, [connect, connectors]);

//   const handleDisconnect = useCallback(() => {
//     disconnect();
//   }, [disconnect]);

//   return (
//     <div className="flex flex-row justify-center items-center">
//       <div>
//         {connectors
//           .filter((x) => x.ready && x.id !== connector?.id)
//           .map((x) => {
//             if (isLoading) {
//               return <Spinner />;
//             }
//             return (
//               <button key={x.id} onClick={() => connect({ connector: x })}>
//                 {x.name}
//                 {isLoading && x.id === pendingConnector?.id && ' (connecting)'}
//               </button>
//             );
//           })}
//       </div>
//       <div>
//         {isConnected && (
//           <Button onClick={handleDisconnect}>
//             Disconnect from {connector?.name}
//           </Button>
//         )}

//         {isLoading && <Spinner />}
//         <Button onClick={handleConnect}>Connect</Button>
//       </div>

//       {error && <div>{error.message}</div>}
//     </div>
//   );
// }

export function App() {
  return (
    <BrowserRouter>
      <Page header={<Header />} footer={<Footer />}>
        <section className="flex-1 bg-light-green">
          <Container className="py-10">
            <div className="flex flex-col space-y-10">
              {/* <Card withShadow className="mt-6 p-4">
                <Connect />
              </Card> */}
              <AccountWidget />
              {/* <DepositStatsWidget />
              <WithdrawWidget />
              <TransferWidget /> */}
            </div>
          </Container>
        </section>
      </Page>
    </BrowserRouter>
  );
}
