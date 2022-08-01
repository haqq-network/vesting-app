import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { Container } from './Layout';

const FooterContainer = styled('footer')``;

export function Footer(): ReactElement {
  return (
    <FooterContainer className="">
      <Container className="border-t border-light-gray py-4">
        <nav className="text-center text-sm text-dark-gray">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://haqq.network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HAQQ Network.
          </a>{' '}
          All rights reserved
        </nav>
      </Container>
    </FooterContainer>
  );
}
