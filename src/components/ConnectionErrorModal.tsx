import React from 'react';
import { Button } from './Button';
import { Heading, Text } from './Typography';

interface ConnectionErrorModalProps {
  onClose: () => void;
}

export function ConnectionErrorModal({ onClose }: ConnectionErrorModalProps) {
  return (
    <div className="bg-white rounded-[32px] p-[40px]">
      <div className="pb-[20px] flex justify-between">
        <Heading level={2}> Connection error </Heading>
        <svg
          cursor="pointer"
          onClick={onClose}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L18.7742 18.7742"
            stroke="#04D484"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 18.7734L18.7742 5.99924"
            stroke="#04D484"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <div className=" bg-white rounded-[12px] pl-[20px] pr-[52px] py-[16px] mb-[32px]">
          <Text color="light">
            Website network
            <Text bold={true}> Haqq network </Text>
            doesn&apos;t match to network selected in the wallet network with
            id: 53211
          </Text>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span> How to </span>
          <a
            href="https://islamiccoin.net/metamask-instruction"
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            change the network in your wallet?
          </a>
        </div>
        <Button type={'submit'}> Change network </Button>
      </div>
    </div>
  );
}
