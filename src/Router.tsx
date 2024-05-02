import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import RootPage from './pages/RootPage';
import ApplyPage from './pages/apply/ApplyPage';
import CommunityPage from './pages/community/CommunityPage';
import IntroducePage from './pages/introduce/IntroducePage';
import { action as logoutAction } from './pages/logout/Logout';
import AuthCallBackPage from './pages/signin/AuthCallBackPage';
import SigninPage from './pages/signin/SigninPage';
import SignupPage from './pages/signup/SignupPage';
import TechBlogPage from './pages/tech_blog/TechBlogPage';

import { BASE_URI } from './constants/URI';

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
