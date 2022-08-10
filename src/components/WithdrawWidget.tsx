import React, { Fragment, useCallback, useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Heading, Text } from './Typography';

export function WithdrawWidget() {
  const [isWithdrawSuccess, setWithdrawSuccess] = useState<boolean>(false);
  const [isTranferPending, setTranferPending] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const handleSuccessState = useCallback(() => {
    setTranferPending(true);
    setTimeout(() => {
      setTranferPending(false);
    }, 5000);
    setWithdrawSuccess(true);
  }, []);

  const handleErrorState = useCallback(() => {
    setTranferPending(true);
    setTimeout(() => {
      setTranferPending(false);
    }, 5000);
    setWithdrawSuccess(false);
    setError(true);
  }, []);

  return (
    <Card className="overflow-hidden max-w-lg mx-auto w-full">
      <div className="p-6 flex flex-col space-y-4">
        {isTranferPending ? (
          <Fragment>
            <Heading level={3} className="uppercase text-light-gray">
              Withdraw 2nd state processing...
            </Heading>
            <div className="text-light-gray">
              Please wait while your request is being processed...
            </div>
            <div className="flex-1 text-light-gray">
              <div>
                <Text bold className="text-light-gray">
                  Available to withdraw
                </Text>
              </div>
              <div>
                <Text bold className="text-light-gray">
                  {Math.random().toLocaleString()}
                </Text>
              </div>
            </div>
            <div>
              <Button disabled fill>
                {isTranferPending ? (
                  <div className="flex justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="1" y="6" width="2.8" height="12">
                        <animate
                          begin="a.begin+0.4s"
                          attributeName="y"
                          calcMode="spline"
                          dur="0.6s"
                          values="6;1;6"
                          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        />
                        <animate
                          begin="a.begin+0.4s"
                          attributeName="height"
                          calcMode="spline"
                          dur="0.6s"
                          values="12;22;12"
                          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        />
                      </rect>
                      <rect x="5.8" y="6" width="2.8" height="12">
                        <animate
                          begin="a.begin+0.2s"
                          attributeName="y"
                          calcMode="spline"
                          dur="0.6s"
                          values="6;1;6"
                          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        />
                        <animate
                          begin="a.begin+0.2s"
                          attributeName="height"
                          calcMode="spline"
                          dur="0.6s"
                          values="12;22;12"
                          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        />
                      </rect>
                      <rect x="10.6" y="6" width="2.8" height="12">
                        <animate
                          id="a"
                          begin="0;b.end-0.1s"
                          attributeName="y"
                          calcMode="spline"
                          dur="0.6s"
                          values="6;1;6"
                          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        />
                        <animate
                          begin="0;b.end-0.1s"
                          attributeName="height"
                          calcMode="spline"
                          dur="0.6s"
                          values="12;22;12"
                          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        />
                      </rect>
                      <rect x="15.4" y="6" width="2.8" height="12">
                        <animate
                          begin="a.begin+0.2s"
                          attributeName="y"
                          calcMode="spline"
                          dur="0.6s"
                          values="6;1;6"
                          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        />
                        <animate
                          begin="a.begin+0.2s"
                          attributeName="height"
                          calcMode="spline"
                          dur="0.6s"
                          values="12;22;12"
                          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        />
                      </rect>
                      <rect x="20.2" y="6" width="2.8" height="12">
                        <animate
                          id="b"
                          begin="a.begin+0.4s"
                          attributeName="y"
                          calcMode="spline"
                          dur="0.6s"
                          values="6;1;6"
                          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        />
                        <animate
                          begin="a.begin+0.4s"
                          attributeName="height"
                          calcMode="spline"
                          dur="0.6s"
                          values="12;22;12"
                          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        />
                      </rect>
                    </svg>
                  </div>
                ) : (
                  'Request withdrawal'
                )}
              </Button>
            </div>
          </Fragment>
        ) : isWithdrawSuccess ? (
          <Fragment>
            <Heading level={3} className="uppercase text-primary">
              Withdraw 3rd state (success)
            </Heading>
            <div className="text-primary">Funds received successfully</div>
            <div className="flex-1 text-primary">
              <div>Amount succefully withdrawn</div>
              <div>{Math.random().toLocaleString()}</div>
            </div>
            <div>
              <Button fill onClick={handleSuccessState}>
                Request withdrawal
              </Button>
            </div>
          </Fragment>
        ) : isError ? (
          <Fragment>
            <Heading level={3} className="uppercase text-danger">
              Withdraw 4th state (error)
            </Heading>
            <div className="text-danger">Something went wrong...</div>
            <div className="flex-1 text-danger">
              <div> Failed withdraw amount </div>
              <div>{Math.random().toLocaleString()}</div>
            </div>
            <div>
              <Button fill onClick={handleSuccessState}>
                Request withdrawal
              </Button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <Heading level={3} className="uppercase">
              Withdraw 1st state (default)
            </Heading>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias adipisci commodi
            </div>
            <div className="flex-1">
              <div>Available to withdraw</div>
              <div>{Math.random().toLocaleString()}</div>
            </div>
            <div>
              <Button fill onClick={handleErrorState}>
                Request withdrawal
              </Button>
            </div>
          </Fragment>
        )}
      </div>
    </Card>
  );
}
