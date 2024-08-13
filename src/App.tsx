import { RouterProvider } from 'react-router-dom';

import { GlobalStyle } from '@gdsc/styles/GlobalStyle';

import { Global } from '@emotion/react';
import { Router } from '@gdsc/router/Router';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
