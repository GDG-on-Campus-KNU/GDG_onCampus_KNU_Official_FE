import { createRoot } from 'react-dom/client';

import App from '@gdsc/App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@gdsc/hooks/queries/Http';

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
