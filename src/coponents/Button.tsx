import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  block?: boolean;
  fill?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}

const StyledButton = styled.button`
  --ui-kit-button-color: #fff;
  --ui-kit-button-bg-color: rgb(33, 66, 158);

  color: var(--ui-kit-button-color);
  background-color: var(--ui-kit-button-bg-color);

  transition: 2s ease;

  &:hover {
    background-color: red;
  }

  @apply bg-yellow-200;
`;

export function Button({
  children,
  onClick,
  disabled = false,
  // block = false,
  // fill = false,
  type = 'button',
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="px-6 py-4"
    >
      {children}
    </StyledButton>
  );
}
