import { Global } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';

import { Router } from '@gdg/router/Router';
import { GlobalStyle } from '@gdg/styles/GlobalStyle';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
