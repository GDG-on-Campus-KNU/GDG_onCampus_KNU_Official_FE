import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import { Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';

import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import RootPage from './pages/RootPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/signup/SignupPage';
import SignupPendingPage from './pages/signup/SignupPendingPage';

import { queryClient } from './hooks/queries/Http';

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
      <QueryClientProvider client={queryClient}>
        <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
