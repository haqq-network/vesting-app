import React, { ReactElement, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderLinkProps {
  to: string;
  children: ReactNode;
}

export function HeaderLink({ children, to }: HeaderLinkProps): ReactElement {
  return (
    <NavLink
      to={to}
      className="text-black text-base text-center font-normal hover:text-primary underline-offset-0 hover:underline active:text-primary"
    >
      {children}
    </NavLink>
  );
}
