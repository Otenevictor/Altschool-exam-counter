import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './AltExams/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </StrictMode>
    </BrowserRouter>
  </ErrorBoundary>
);
