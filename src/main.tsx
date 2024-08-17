import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { queryClient } from '@gdsc/apis/instance/Http';

import App from '@gdsc/App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </HelmetProvider>
);
