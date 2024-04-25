import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import { Global } from '@emotion/react';

import ErrorPage from '@gdsc/pages/ErrorPage';
import MainPage from '@gdsc/pages/MainPage';
import MyPage from '@gdsc/pages/MyPage';
import RootPage from '@gdsc/pages/RootPage';
import SigninPage from '@gdsc/pages/SigninPage';
import SignupPage from '@gdsc/pages/signup/SignupPage';
import SignupPendingPage from '@gdsc/pages/signup/SignupPendingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'signin', element: <SigninPage /> },
      {
        path: 'signup',
        children: [
          { path: '', element: <SignupPage /> },
          { path: 'pending', element: <SignupPendingPage /> },
        ],
      },
      { path: 'mypage/:username', element: <MyPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
