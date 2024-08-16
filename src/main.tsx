import { createRoot } from 'react-dom/client';

import { queryClient } from '@gdsc/apis/instance/Http';

import App from '@gdsc/App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
