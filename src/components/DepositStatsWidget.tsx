import { config } from '../config';
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useAccount, useContract, useProvider, useToken } from 'wagmi';
import { Card } from './Card';
import { Heading, Text } from './Typography';
import HaqqVestingContract from '../../HaqqVesting.json';
import { Spinner } from './Playground';
import { formatEther } from 'ethers/lib/utils';
import { Button } from './Button';
import { DepositNavigation } from './DepositNavigation';

function mapSCResponseToJson(dep: any, available: any) {
  // console.log({
  //   one: dep[0].toString(),
  //   two: dep[1].toString(),
  //   three: dep[2].toString(),
  //   available: formatEther(available),
  //   deposited: formatEther(dep.sumInWeiDeposited),
  // });

  const deposited = dep.sumInWeiDeposited;
  const withdrawn = dep.sumPaidAlready;
  const unlocked = dep.sumPaidAlready.add(available);
  const locked = deposited.sub(unlocked);

  return {
    locked,
    unlocked,
    available,
    deposited,
    withdrawn,
    createdAt: new Date(dep.timestamp.toNumber() * 1000).toISOString(),
  };
}

function StatsRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Text>{label}</Text>
      </div>
      <div>
        <Text bold>{value}</Text>
      </div>
    </div>
  );
}

export function DepositStatsWidget() {
  const provider = useProvider();
  const { address, isConnected, isConnecting } = useAccount();
  const contract = useContract({
    addressOrName: config.contractAddress,
    contractInterface: HaqqVestingContract.abi,
    signerOrProvider: provider,
  });
  const [deposit, setDeposit] = useState<any>(null);
  const [depositsCount, setDepositsCount] = useState<number>(0);
  const [currentDeposit, setCurrentDeposit] = useState<number>(0);

  const requestDepositCount = useCallback(async () => {
    try {
      const depositsCount = await contract.depositsCounter(address);

      setDepositsCount(depositsCount.toNumber());
    } catch (error) {
      console.error(error);
    }
  }, [address, contract]);

  const requestDepStats = useCallback(
    async (address: string, depositNumber: number) => {
      if (depositNumber > 0) {
        try {
          const deposit = await contract.deposits(address, depositNumber);
          const amount = await contract.amountToWithdrawNow(
            address,
            depositNumber,
          );

          setDeposit(mapSCResponseToJson(deposit, amount));
        } catch (error) {
          console.error(error);
        }
      }
    },
    [contract],
  );

  useEffect(() => {
    requestDepositCount();
  }, [address, contract, requestDepositCount]);

  useEffect(() => {
    if (depositsCount > 0) {
      setCurrentDeposit(1);
    }
  }, [depositsCount]);

  useEffect(() => {
    if (depositsCount === 0) {
      setCurrentDeposit(0);
      setDeposit(null);
    } else if (depositsCount > 0 && currentDeposit > 0 && address) {
      requestDepStats(address, currentDeposit);
    }
  }, [address, currentDeposit, depositsCount, requestDepStats]);

  // TODO: get it right
  const symbol = 'ISLM';

  const isWithdrawAvailable = useMemo(() => {
    if (!deposit) {
      return false;
    }

    const available = parseInt(deposit?.available?.toString(), 10) ?? 0;

    return Boolean(available > 0);
  }, [deposit]);

  const handleWithdrawRequest = useCallback(() => {
    console.log('handleWithdrawRequest');
  }, []);

  return (
    <Card className="overflow-hidden max-w-lg mx-auto w-full">
      <div className="flex flex-col space-y-6">
        <div className="pt-6 px-6 flex flex-row space-x-6 justify-between">
          <Heading level={3} className="uppercase">
            Deposit stats
          </Heading>

          {isConnected && depositsCount > 0 && (
            <DepositNavigation
              total={depositsCount}
              current={currentDeposit}
              onChange={setCurrentDeposit}
            />
          )}
        </div>
        {config.contractAddress && (
          <Fragment>
            <div className="flex flex-col space-y-4">
              {!isConnected && (
                <div className="p-10 flex items-center justify-center min-h-[200px]">
                  <Spinner />
                </div>
              )}

              {isConnected && depositsCount === 0 && (
                <div className="text-center p-6">
                  <Heading level={4}>You have no deposits</Heading>
                </div>
              )}

              {isConnected && deposit !== null && (
                <Fragment>
                  <div className="flex flex-col space-y-2 px-6">
                    <StatsRow
                      label="Deposit start date"
                      value={new Date(deposit.createdAt).toLocaleString()}
                    />
                    <StatsRow
                      label="My timezone"
                      value={Intl.DateTimeFormat().resolvedOptions().timeZone}
                    />
                    <StatsRow
                      label="Deposited"
                      value={`${formatEther(deposit.deposited)} ${symbol}`}
                    />
                    <StatsRow
                      label="Locked"
                      value={`${formatEther(deposit.locked)} ${symbol}`}
                    />
                    <StatsRow
                      label="Unlocked"
                      value={`${formatEther(deposit.unlocked)} ${symbol}`}
                    />
                    <StatsRow
                      label="Withdrawn"
                      value={`${formatEther(deposit.withdrawn)} ${symbol}`}
                    />
                    <StatsRow
                      label="Available"
                      value={`${formatEther(deposit.available)} ${symbol}`}
                    />
                  </div>

                  <div className="flex flex-col space-y-2 px-6 pb-6">
                    <Button
                      fill
                      disabled={!isWithdrawAvailable}
                      onClick={handleWithdrawRequest}
                    >
                      Withdraw
                    </Button>
                  </div>
                </Fragment>
              )}
            </div>
          </Fragment>
        )}
      </div>
    </Card>
  );
}

export { DepositStatsWidget as default };
