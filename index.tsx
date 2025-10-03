import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles.css';
import { ThemeProvider } from './hooks/useTheme.tsx';
import { LanguageProvider } from './hooks/useTranslations.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const queryClient = new QueryClient();

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
          <LanguageProvider>
              <App />
          </LanguageProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);