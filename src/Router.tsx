import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@gdsc/pages/ErrorPage';
import MainPage from '@gdsc/pages/MainPage';
import MyPage from '@gdsc/pages/MyPage';
import RootPage from '@gdsc/pages/RootPage';
import ApplyPage from '@gdsc/pages/apply/ApplyPage';
import CommunityPage from '@gdsc/pages/community/CommunityPage';
import IntroducePage from '@gdsc/pages/introduce/IntroducePage';
import { action as logoutAction } from '@gdsc/pages/logout/Logout';
import AuthCallBackPage from '@gdsc/pages/signin/AuthCallBackPage';
import SigninPage from '@gdsc/pages/signin/SigninPage';
import SignupPage from '@gdsc/pages/signup/SignupPage';
import TechBlogPage from '@gdsc/pages/tech_blog/TechBlogPage';

import { BASE_URI } from '@gdsc/constants/URI';

import SignupPendingPage from './pages/signup/SignupPendingPage';

export const Router = createBrowserRouter([
  {
    path: '/gdscknu',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'signin', element: <SigninPage /> },
      {
        path: 'signup',
        children: [
          { index: true, element: <SignupPage /> },
          { path: 'pending', element: <SignupPendingPage /> },
        ],
      },
      { path: 'apply', element: <ApplyPage /> },
      { path: 'introduce', element: <IntroducePage /> },
      { path: 'mypage/:username', element: <MyPage /> },
      { path: 'community', element: <CommunityPage /> },
      { path: 'techblog/:tech', element: <TechBlogPage /> },
    ],
  },
  {
    path: '/oauth/:provider/redirect',
    element: <AuthCallBackPage />,
  },
  {
    path: `${BASE_URI}/api/auth/logout`,
    action: logoutAction,
  },
]);
