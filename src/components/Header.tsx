import React, { lazy, ReactElement, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BurgerButton } from './BurgerButton';
import { HeaderLink } from './HeaderLink';
import { Container } from './Layout';
import { Logo, LogoSmall } from './Logo';

const ConnectButton = lazy(() => import('./ConnectButton'));
const NetworkStatus = lazy(() => import('./NetworkStatus'));

export function Header(): ReactElement {
  return (
    <header className="hidden lg:inline backdrop-filter backdrop-blur transform-gpu bg-white/70 border-light-gray border-b">
      <Container>
        <div className="relative flex items-center justify-between h-[64px]">
          <div className="flex-1 flex items-center justify-start">
            <NavLink to="/">
              <Logo className="h-8 w-auto hidden sm:block" />
              <LogoSmall className="h-10 w-auto block sm:hidden" />
            </NavLink>
            <div className="flex-shrink-0 flex items-center"></div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex flex-row space-x-2">
              <NetworkStatus />
              <ConnectButton />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
