import React, { Fragment, useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { IdentIcon } from './IdentIcon';
import { Modal } from './Modal';
import { Heading, Text } from './Typography';

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 hover:text-primary"
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
      className="h-6 w-6 hover:text-primary"
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
      className="h-6 w-6 hover:text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
      />
    </svg>
  );
}

function LogoBackIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary opacity-20"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 0C38.2838 0 45.7843 3.35808 51.2131 8.78689C56.5777 14.1515 59.9198 21.5387 59.9981 29.7055V29.7225L59.9991 29.8339L60 29.9991L59.9981 30.2756V30.2935C59.9198 38.4603 56.5777 45.8466 51.2131 51.2112C45.7843 56.64 38.2848 59.9981 30 59.9981C21.7162 59.9981 14.2157 56.64 8.78689 51.2112C3.35808 45.7824 0 38.2819 0 29.9981C0 21.7143 3.35808 14.2147 8.78689 8.78594C14.2157 3.35714 21.7162 0 30 0ZM47.2425 17.2416C48.3798 17.2416 49.4831 17.3916 50.5336 17.67C47.4398 14.6678 43.2209 12.8189 38.5689 12.8189C33.8243 12.8189 29.529 14.7414 26.4211 17.8503C23.3121 20.9592 21.3896 25.2545 21.3896 29.9991C21.3896 34.7436 23.3121 39.0389 26.4211 42.1469C29.53 45.2558 33.8253 47.1783 38.5689 47.1783C43.2209 47.1783 47.4407 45.3294 50.5336 42.3271C49.484 42.6065 48.3807 42.7556 47.2434 42.7556C43.7211 42.7556 40.5311 41.3276 38.2234 39.0191C35.9149 36.7105 34.4869 33.5204 34.4869 29.9981C34.4869 26.4758 35.9149 23.2857 38.2234 20.9772C40.5301 18.6705 43.7192 17.2416 47.2425 17.2416ZM53.2565 23.9851C51.7171 22.4467 49.5907 21.4944 47.2416 21.4944C44.8924 21.4944 42.766 22.4467 41.2266 23.9851C39.6873 25.5244 38.7359 27.6509 38.7359 30C38.7359 32.3491 39.6882 34.4756 41.2266 36.0149C42.766 37.5533 44.8924 38.5056 47.2416 38.5056C49.5907 38.5056 51.7171 37.5533 53.2565 36.0149C54.7949 34.4756 55.7472 32.3491 55.7472 30L55.7462 29.8905C55.7179 27.5838 54.7713 25.4999 53.2565 23.9851ZM38.5679 8.56698C41.2399 8.56698 43.7966 9.05587 46.1562 9.94966C41.7382 6.38583 36.1178 4.25187 30 4.25187C22.8903 4.25187 16.4525 7.13427 11.7929 11.7929C7.13427 16.4516 4.25187 22.8893 4.25187 29.9991C4.25187 37.1097 7.13333 43.5465 11.7929 48.2061C16.4525 52.8648 22.8893 55.7472 30 55.7472C36.1187 55.7472 41.7382 53.6132 46.1562 50.0484C43.7966 50.9422 41.2399 51.4311 38.5679 51.4311C32.6502 51.4311 27.2913 49.032 23.4141 45.1538C19.536 41.2757 17.1368 35.9177 17.1368 30C17.1368 24.0823 19.536 18.7233 23.4141 14.8452C27.2913 10.9661 32.6502 8.56698 38.5679 8.56698Z"
        fill="currentColor"
      />
    </svg>
  );
}

// TODO: Copy address button
// TODO: Etherscan link
export function AccountWidget() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
      <Card className="overflow-hidden max-w-lg mx-auto w-full">
        <div className="p-6 flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <Heading level={3} className="uppercase inline-flex">
              Account info
            </Heading>
            <div className="flex flex-row space-x-2 mt-[-4px]">
              <CopyIcon />
              <ScanIcon />
              <DisconnectIcon />
            </div>
          </div>

          <div className="rounded-[12px] bg-light-green border border-[#f3f3f3]">
            <div className="p-4  flex flex-col space-y-8">
              <AccountAddress address="0xD090340493b9A23D2E695d2745BA7D7a4e8f836b" />
              <div className="flex flex-row items-center mt-8">
                <div className="flex-1">
                  <div className="mb-2 block">
                    <Text color="light" className="text-sm">
                      Current balance:
                    </Text>
                  </div>
                  <div className="text-4xl font-bold font-serif leading-[36px]">
                    123123 ISML
                  </div>
                </div>
                <LogoBackIcon />
              </div>
            </div>
          </div>

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
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <Card className="p-6 overflow-hidden">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            ducimus vero vitae consequatur voluptas nesciunt, perferendis sint
            ut soluta modi, commodi magnam aperiam error vel repellendus
            molestias eaque inventore id?
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={handleModalClose}
            >
              Got it, thanks!
            </button>
          </div>
        </Card>
      </Modal>
    </Fragment>
  );
}

function AccountAddress({ address }: { address: string }) {
  return (
    <div className="account flex flex-row space-x-2 items-center rounded-md">
      <IdentIcon
        address={address}
        size={24}
        className="rounded-full leading-none flex-none"
      />
      <div className="overflow-ellipsis overflow-hidden text-sm font-medium">
        {address}
      </div>
    </div>
  );
}
