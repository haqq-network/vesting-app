import React, { lazy, ReactElement, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BurgerButton } from './BurgerButton';
import { HeaderLink } from './HeaderLink';
import { Container } from './Layout';
import { Logo } from './Logo';

export interface HeaderProps {
  links?: Array<{ to: string; title: string }>;
}

const ConnectButton = lazy(() => import('./ConnectButton'));
const NetworkStatus = lazy(() => import('./NetworkStatus'));

export function Header({ links }: HeaderProps): ReactElement {
  const [isOpen, setOpen] = useState<boolean>(false);
  const headerLinks = useMemo(() => {
    if (!links || links.length === 0) {
      return null;
    }

    return links.map(({ to, title }, index) => (
      <HeaderLink to={to} key={`header-link-${index}`}>
        {title}
      </HeaderLink>
    ));
  }, [links]);

  return (
    <header className="backdrop-filter backdrop-blur transform-gpu bg-white/70 border-light-gray border-b">
      <Container>
        <div className="relative flex items-center justify-between h-[64px]">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <BurgerButton
              onClick={() => {
                setOpen(!isOpen);
              }}
              isOpen={isOpen}
            />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/">
                <Logo className="hidden sm:block h-8 w-auto" />
              </NavLink>
            </div>
            {headerLinks && (
              <div className="hidden sm:flex sm:ml-6 md:ml-12 space-x-4 items-center">
                {headerLinks}
              </div>
            )}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex flex-row space-x-2">
              <NetworkStatus />
              <ConnectButton />
            </div>
            {/* <ThemeButton /> */}
            {/*
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              </div> */}
          </div>
        </div>
      </Container>
      {/*
      <nav className="">

        {isDropdownOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">{headerLinks}</div>
          </div>
        )}
      </nav>
         */}
    </header>
  );
}
