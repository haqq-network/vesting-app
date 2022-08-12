import React, { ReactElement } from 'react';
import { Container } from './Layout';
import { config } from '../config';
import { Text } from './Typography';

export function Footer(): ReactElement {
  return (
    <footer className="bg-light-green">
      <Container className="border-t border-light-gray py-4">
        <nav className="flex flex-row justify-between">
          <div>
            <Text color="light" className="text-sm">
              © {new Date().getFullYear()}{' '}
              <a
                href="https://haqq.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HAQQ Network.
              </a>{' '}
              All rights reserved
            </Text>
          </div>
          <div>
            <div className="text-sm text-gray-300">
              version: {config.version}
            </div>
          </div>
        </nav>
      </Container>
    </footer>
  );
}
