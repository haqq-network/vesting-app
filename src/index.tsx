import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AppContainer } from './AppContainer';

if (process.env.NODE_ENV === 'production') {
  const { initSentry } = await import('./initSentry');

  initSentry();
}

export function startApp() {
  const rootElement = document.getElementById('root') as HTMLElement;
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <AppContainer>
        <App />
      </AppContainer>
    </StrictMode>,
  );
}

window.addEventListener('DOMContentLoaded', () => {
  startApp();
});
