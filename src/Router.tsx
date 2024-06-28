import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@gdsc/pages/ErrorPage';
import RootPage from '@gdsc/pages/RootPage';
import ApplyExPage from '@gdsc/pages/apply/ApplyExPage';
import ApplyPage from '@gdsc/pages/apply/ApplyPage';
import CommunityPage from '@gdsc/pages/community/CommunityPage';
import IntroducePage from '@gdsc/pages/introduce/IntroducePage';
import { action as logoutAction } from '@gdsc/pages/logout/Logout';
import MainPage from '@gdsc/pages/main/MainPage';
import MyPage from '@gdsc/pages/mypage/MyPage';
import AuthCallBackPage from '@gdsc/pages/signin/AuthCallBackPage';
import SigninPage from '@gdsc/pages/signin/SigninPage';
import SignupPage from '@gdsc/pages/signup/SignupPage';
import TechBlogPage from '@gdsc/pages/tech_blog/TechBlogPage';

import { BASE_URI } from '@gdsc/constants/URI';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'signin', element: <SigninPage /> },
      { path: 'signup', element: <SignupPage /> },
      {
        path: 'apply',
        children: [
          { path: '', element: <ApplyPage /> },
          { path: ':tech', element: <ApplyExPage /> },
        ],
      },
      { path: 'introduce', element: <IntroducePage /> },
      { path: 'mypage/:username', element: <MyPage /> },
      { path: 'community', element: <CommunityPage /> },
      { path: 'techblog', element: <TechBlogPage /> },
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
