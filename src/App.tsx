import { RouterProvider } from 'react-router-dom';

import { GlobalStyle } from '@gdsc/styles/GlobalStyle';

import { Global } from '@emotion/react';
import { AuthProvider } from '@gdsc/provider/auth';
import { Router } from '@gdsc/router/Router';

function App() {
  return (
    <AuthProvider>
      <Global styles={GlobalStyle} />
      <RouterProvider router={Router} />
    </AuthProvider>
  );
}

export default App;
