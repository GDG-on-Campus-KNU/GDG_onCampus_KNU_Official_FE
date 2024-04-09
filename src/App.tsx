import { RouterProvider } from 'react-router-dom';

import './App.css';
import { Router } from './Router';
import { GlobalStyle } from './styles/GlobalStyle';
import { Global } from '@emotion/react';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
