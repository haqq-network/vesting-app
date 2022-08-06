import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Text } from './Typography';

export interface TooltipProps {
  text: string;
  children: ReactNode;
}

export function Tooltip({ text, children }: TooltipProps): ReactElement {
  return (
    <span className="relative leading-none group">
      {children}
      <div
        className={clsx(
          'invisible absolute w-max mb-1 opacity-0',
          'left-1/2 -translate-x-1/2 -translate-y-2 bottom-full',
          'transition ease-out duration-100',
          'group-hover:visible group-hover:z-50 group-hover:opacity-100 group-hover:translate-y-0',
          'py-[4px] px-[10px] rounded-md bg-primary shadow-xl',
        )}
      >
        <Text className="text-sm leading-[20px] font-medium" color="white">
          {text}
        </Text>
      </div>
    </span>
  );
}
