import React, { ReactNode, SyntheticEvent, useMemo } from 'react';
import styled from '@emotion/styled';
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

const StyledButton = styled.button<ButtonProps>``;

const OutlineButton = styled.button<ButtonProps>``;

export function Button({
  children,
  onClick,
  primary = true,
  outline = false,
  disabled = false,
  fill = false,
  type = 'button',
  className,
}: ButtonProps) {
  const memoizedProps = useMemo(() => {
    return {
      onClick,
      disabled,
      type,
      primary,
      fill,
      className: clsx('px-6 py-4', className),
    };
  }, [className, disabled, fill, onClick, primary, type]);
  const ButtonComponent = useMemo(() => {
    return outline ? OutlineButton : StyledButton;
  }, [outline]);

  return <ButtonComponent {...memoizedProps}>{children}</ButtonComponent>;
}
