import React, { Fragment, ReactNode, SyntheticEvent } from 'react';
import clsx from 'clsx';
import { Heading, Text } from './Typography';
import { Button } from './Button';
import { Loader } from './Loader';

interface WithdrawMarkupProps {
  children?: ReactNode;
  className?: string;
  isTransferPending?: boolean;
  isWithdrawSuccess?: boolean;
  isError?: boolean;
  fill?: boolean;
  disabled?: boolean;
  onClick?: (event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void;
  headingText?: string;
  mainText?: string;
}

export function WithdrawMarkup({
  children = 'Request Withdrawal',
  className,
  isTransferPending = false,
  isWithdrawSuccess = false,
  isError = false,
  fill,
  onClick,
  headingText,
  mainText,
  disabled,
}: WithdrawMarkupProps) {
  const classNames = clsx(
    {
      'text-light-gray': isTransferPending,
      'text-primary': isWithdrawSuccess,
      'text-danger': isError,
    },
    className,
  );

  return (
    <Fragment>
      <Heading level={3} className={`uppercase ${classNames}`}>
        {headingText}
      </Heading>
      <div className={classNames}>{mainText}</div>
      <div className="flex-1">
        <div>
          <Text bold className={classNames}>
            Available to withdraw
          </Text>
        </div>
        <div>
          <Text bold className={classNames}>
            {Math.random().toLocaleString()}
          </Text>
        </div>
      </div>
      <div>
        <Button fill={fill} onClick={onClick} disabled={disabled}>
          {isTransferPending ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <Fragment>{children}</Fragment>
          )}
        </Button>
      </div>
    </Fragment>
  );
}
