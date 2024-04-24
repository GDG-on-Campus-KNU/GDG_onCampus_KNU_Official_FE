import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './hooks/queries/Http';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
