import React, { ReactNode, SyntheticEvent } from 'react';
import clsx from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  primary?: boolean;
  outline?: boolean;
  disabled?: boolean;
  fill?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({
  children,
  onClick,
  // primary = true,
  outline = false,
  disabled = false,
  fill = false,
  type = 'button',
  className,
}: ButtonProps) {
  const classNames = clsx(
    outline
      ? 'bg-transparent text-primary border-[2px] box-border border-solid border-primary hover:text-[#20d775] hover:border-[#20d775]'
      : 'bg-primary text-white hover:bg-[#20d775]',
    'text-base font-semibold font-sans leading-[24px]',
    'rounded-[8px] py-[8px] px-[22px] appearance-none',
    'transition-colors duration-150 ease-linear',
    fill ? 'w-full' : 'inline-block',
    { 'opacity-75 not-allowed': disabled },
    className,
  );

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames}
    >
      {children}
    </button>
  );
}
