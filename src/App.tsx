import { RouterProvider } from 'react-router-dom';

import { GlobalStyle } from '@gdsc/styles/GlobalStyle';

import RouterChangeTracker from './utils/RouterChangeTracker';
import { Global } from '@emotion/react';
import { Router } from '@gdsc/router/Router';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterChangeTracker />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
