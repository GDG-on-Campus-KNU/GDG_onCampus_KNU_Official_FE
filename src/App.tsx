import { Global } from '@emotion/react';
import { Router } from '@gdg/router/Router';
import { GlobalStyle } from '@gdg/styles/GlobalStyle';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
