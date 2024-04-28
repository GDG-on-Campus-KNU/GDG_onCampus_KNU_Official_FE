import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@gdsc/pages/ErrorPage';
import MainPage from '@gdsc/pages/MainPage';
import MyPage from '@gdsc/pages/MyPage';
import RootPage from '@gdsc/pages/RootPage';
import SignupPage from '@gdsc/pages/signup/SignupPage';
import ApplyPage from '@gdsc/pages/apply/ApplyPage';
import CommunityPage from '@gdsc/pages/community/CommunityPage';
import IntroducePage from '@gdsc/pages/introduce/IntroducePage';
import { action as logoutAction } from '@gdsc/pages/logout/Logout';
import AuthCallBackPage from '@gdsc/pages/signin/AuthCallBackPage';
import SigninPage from '@gdsc/pages/signin/SigninPage';
import TechBlogPage from '@gdsc/pages/tech_blog/TechBlogPage';

import { BASE_URI } from '@gdsc/constants/URI';

export const Router = createBrowserRouter([
  {
    path: '/gdscknu',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'signin', element: <SigninPage /> },
      { path: 'signup', element: <SignupPage /> },
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
