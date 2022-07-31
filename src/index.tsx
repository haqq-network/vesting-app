import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AppContainer } from './AppContainer';
// import { reportWebVitals } from './reportWebVitals';

if (process.env.NODE_ENV === 'production') {
  // TODO: integrate with sentry;
  // initSentry()
  // reportWebVitals(console.log);
}

function startApp() {
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

startApp();
