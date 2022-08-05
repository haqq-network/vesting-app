import React, {
  useEffect,
  useState,
  useCallback,
  ReactNode,
  ReactElement,
} from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { useAccount, useBalance, useDisconnect } from 'wagmi';
// import { Button } from './Button';
import { Card } from './Card';
import { IdentIcon } from './IdentIcon';
import { Modal } from './Modal';
import { Heading, Text } from './Typography';
import { useClipboard } from '../hooks/useClipboard';

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[24px] w-[24px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function DisconnectIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[24px] w-[24px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="h-[24px] w-[24px]"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  );
}

function CardIconButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-dark-gray hover:text-primary cursor-pointer transition-colors duration-150"
    >
      {children}
    </button>
  );
}

function DisconnectButton() {
  const { disconnect } = useDisconnect();

  return (
    <CardIconButton
      onClick={() => {
        disconnect();
      }}
    >
      <DisconnectIcon />
    </CardIconButton>
  );
}

function CopyButton({ text }: { text: string }) {
  const { copyText } = useClipboard();
  const handleTextCopy = useCallback(() => {
    copyText(text);
  }, [copyText, text]);

  return (
    <CardIconButton onClick={handleTextCopy}>
      <CopyIcon />
    </CardIconButton>
  );
}

export function Tooltip({
  text,
  children,
}: {
  text: string;
  children: ReactNode;
}): ReactElement {
  return (
    <span className="relative leading-none group">
      <div
        className={clsx(
          'invisible absolute w-max mb-1 opacity-0',
          'left-1/2 -translate-x-1/2 -translate-y-2 bottom-full',
          'transition ease-out duration-100',
          'group-hover:visible group-hover:z-50 group-hover:opacity-100 group-hover:translate-y-0',
          'py-[4px] px-[10px] rounded-sm bg-primary shadow-xl',
        )}
      >
        <Text className="text-sm leading-[20px] font-medium" color="white">
          {text}
        </Text>
      </div>
      {children}
    </span>
  );
}

// TODO: Etherscan link
export function AccountWidget() {
  const { address, isConnected } = useAccount();

  return (
    <Card className="max-w-lg mx-auto w-full">
      <div className="p-6 flex flex-col space-y-4">
        <div className="flex flex-row items-center justify-between">
          <Heading level={3} className="uppercase inline-flex">
            Account info
          </Heading>
          {isConnected && (
            <div className="flex flex-row space-x-3 mt-[-4px]">
              {address && (
                <Tooltip text="Copy address">
                  <CopyButton text={address} />
                </Tooltip>
              )}

              <Tooltip text="Go to scanner">
                <a
                  href="http://haqq.network"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardIconButton>
                    <ScanIcon />
                  </CardIconButton>
                </a>
              </Tooltip>
              <Tooltip text="Disconnect">
                <DisconnectButton />
              </Tooltip>
            </div>
          )}
        </div>

        <AccountCard />

        {/* <div className="flex flex-row justify-between">
            <Button outline className="min-w-[140px]" onClick={handleModalOpen}>
              Swap
            </Button>
            <Button outline className="min-w-[140px]">
              Send
            </Button>
          </div> */}
      </div>
    </Card>
  );
}

function ConnectionErrorModal({
  isOpen,
  error,
  onClose,
}: {
  isOpen: boolean;
  error: Error | null;
  onClose: () => void;
}) {
  if (error === null) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Card className="p-6 overflow-hidden">
        <p>{error.message}</p>
        <div className="mt-4">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </Card>
    </Modal>
  );
}

function AccountAddress({ address }: { address: string | undefined }) {
  if (address === undefined) {
    return (
      <div className="animate-pulse opacity-30 flex flex-row space-x-10">
        <div className="flex space-x-2 flex-row items-center h-[32px] flex-1">
          <div className="rounded-full bg-primary h-[32px] w-[32px] flex-none opacity-30"></div>
          <div className="h-[12px] bg-primary rounded-full flex-1 max-w-[240px] opacity-30"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row space-x-2 items-center">
      <div className="flex flex-row space-x-2 items-center h-[32px] flex-1 overflow-hidden">
        <IdentIcon
          address={address}
          size={32}
          className="rounded-full leading-none flex-none"
        />
        <div className="overflow-ellipsis text-lg font-medium overflow-hidden">
          {/* {`${address?.slice(0, 6)}...${address?.slice(-4)}`} */}
          {address}
        </div>
      </div>

      {/* <Tooltip text="Copy address">
        <CopyButton text={address} />
      </Tooltip>

      <Tooltip text="Go to scanner">
        <a href="http://haqq.network" target="_blank" rel="noopener noreferrer">
          <CardIconButton>
            <ScanIcon />
          </CardIconButton>
        </a>
      </Tooltip> */}
    </div>
  );
}

const AccountCardBgImage = styled.svg`
  position: absolute;
  width: 100px;
  height: 100px;
  right: 15px;
  bottom: 15px;
  /* top: 50%; */
  /* transform: translateY(-50%); */
`;

function AccountCard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { address } = useAccount();
  const {
    data: balance,
    isError,
    isLoading,
    status,
    error,
  } = useBalance({
    addressOrName: address,
    watch: true,
  });

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    if (isError || status === 'error') {
      setModalOpen(true);
    }
  }, [isError, status]);

  return (
    <div className="rounded-[12px] bg-light-green border border-[#04d484] border-opacity-20 h-[200px] relative">
      <div className="p-4 flex flex-col space-y-4 justify-between content-between h-full">
        <AccountAddress address={address} />
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <Text color="light" className="leading-[32px]" block>
              Current balance:
            </Text>
            {isLoading || balance === undefined ? (
              <div className="animate-pulse opacity-30 flex flex-row space-x-4 items-center">
                <div className="h-[48px] bg-primary rounded-md w-[140px] opacity-30"></div>
                <div className="h-[48px] bg-primary rounded-md w-[80px] opacity-30"></div>
              </div>
            ) : (
              <div className="text-5xl font-bold font-serif leading-[48px]">
                {Number.parseFloat(balance.formatted).toLocaleString()}{' '}
                {balance.symbol.toLocaleUpperCase()}
              </div>
            )}
          </div>
        </div>
      </div>

      <AccountCardBgImage
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary opacity-10"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 0C38.2838 0 45.7843 3.35808 51.2131 8.78689C56.5777 14.1515 59.9198 21.5387 59.9981 29.7055V29.7225L59.9991 29.8339L60 29.9991L59.9981 30.2756V30.2935C59.9198 38.4603 56.5777 45.8466 51.2131 51.2112C45.7843 56.64 38.2848 59.9981 30 59.9981C21.7162 59.9981 14.2157 56.64 8.78689 51.2112C3.35808 45.7824 0 38.2819 0 29.9981C0 21.7143 3.35808 14.2147 8.78689 8.78594C14.2157 3.35714 21.7162 0 30 0ZM47.2425 17.2416C48.3798 17.2416 49.4831 17.3916 50.5336 17.67C47.4398 14.6678 43.2209 12.8189 38.5689 12.8189C33.8243 12.8189 29.529 14.7414 26.4211 17.8503C23.3121 20.9592 21.3896 25.2545 21.3896 29.9991C21.3896 34.7436 23.3121 39.0389 26.4211 42.1469C29.53 45.2558 33.8253 47.1783 38.5689 47.1783C43.2209 47.1783 47.4407 45.3294 50.5336 42.3271C49.484 42.6065 48.3807 42.7556 47.2434 42.7556C43.7211 42.7556 40.5311 41.3276 38.2234 39.0191C35.9149 36.7105 34.4869 33.5204 34.4869 29.9981C34.4869 26.4758 35.9149 23.2857 38.2234 20.9772C40.5301 18.6705 43.7192 17.2416 47.2425 17.2416ZM53.2565 23.9851C51.7171 22.4467 49.5907 21.4944 47.2416 21.4944C44.8924 21.4944 42.766 22.4467 41.2266 23.9851C39.6873 25.5244 38.7359 27.6509 38.7359 30C38.7359 32.3491 39.6882 34.4756 41.2266 36.0149C42.766 37.5533 44.8924 38.5056 47.2416 38.5056C49.5907 38.5056 51.7171 37.5533 53.2565 36.0149C54.7949 34.4756 55.7472 32.3491 55.7472 30L55.7462 29.8905C55.7179 27.5838 54.7713 25.4999 53.2565 23.9851ZM38.5679 8.56698C41.2399 8.56698 43.7966 9.05587 46.1562 9.94966C41.7382 6.38583 36.1178 4.25187 30 4.25187C22.8903 4.25187 16.4525 7.13427 11.7929 11.7929C7.13427 16.4516 4.25187 22.8893 4.25187 29.9991C4.25187 37.1097 7.13333 43.5465 11.7929 48.2061C16.4525 52.8648 22.8893 55.7472 30 55.7472C36.1187 55.7472 41.7382 53.6132 46.1562 50.0484C43.7966 50.9422 41.2399 51.4311 38.5679 51.4311C32.6502 51.4311 27.2913 49.032 23.4141 45.1538C19.536 41.2757 17.1368 35.9177 17.1368 30C17.1368 24.0823 19.536 18.7233 23.4141 14.8452C27.2913 10.9661 32.6502 8.56698 38.5679 8.56698Z"
          fill="currentColor"
        />
      </AccountCardBgImage>

      <ConnectionErrorModal
        isOpen={isModalOpen}
        error={error}
        onClose={handleModalClose}
      />
    </div>
  );
}

export { AccountWidget as default };