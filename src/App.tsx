import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';
import { Global } from '@emotion/react';

import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import RootPage from './pages/RootPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'signin', element: <SigninPage /> },
      { path: 'signup', element: <SignupPage /> },
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
