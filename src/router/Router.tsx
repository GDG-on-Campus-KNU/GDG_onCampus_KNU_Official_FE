import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@gdsc/pages/ErrorPage';
import AdminRootPage from '@gdsc/pages/AdminRootPage';
import RootPage from '@gdsc/pages/RootPage';
import { AdminPage } from '@gdsc/pages/admin';
import ApplyExPage from '@gdsc/pages/apply/ApplyExPage';
import ApplyFormPage from '@gdsc/pages/apply/ApplyFormPage';
import ApplyPage from '@gdsc/pages/apply/ApplyPage';
import InquiryPage from '@gdsc/pages/apply/InquiryPage';
import CommunityPage from '@gdsc/pages/community/CommunityPage';
import IntroducePage from '@gdsc/pages/introduce/IntroducePage';
import MainPage from '@gdsc/pages/main/MainPage';
import MyPage from '@gdsc/pages/mypage/MyPage';
import AuthCallBackPage from '@gdsc/pages/signin/AuthCallBackPage';
import SigninPage from '@gdsc/pages/signin/SigninPage';
import SignupPage from '@gdsc/pages/signup/SignupPage';
import { TeamPage } from '@gdsc/pages/team';
import TechBlogPage from '@gdsc/pages/tech_blog/TechBlogPage';

import PrivateRoute from './components/PrivateRoute';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'signin', element: <SigninPage /> },
      {
        path: 'apply',
        element: <PrivateRoute />,
        children: [
          { path: '', element: <ApplyPage /> },
          {
            path: ':tech',
            children: [
              { path: '', element: <ApplyExPage /> },
              { path: 'form', element: <ApplyFormPage /> },
            ],
          },
          { path: 'inquiry', element: <InquiryPage /> },
        ],
      },
      {
        path: 'mypage',
        element: <PrivateRoute />,
        children: [{ path: '', element: <MyPage /> }],
      },
      {
        path: 'team',
        element: <PrivateRoute />,
        children: [{ path: '', element: <TeamPage /> }],
      },
      { path: 'introduce', element: <IntroducePage /> },
      { path: 'community', element: <CommunityPage /> },
      { path: 'techblog', element: <TechBlogPage /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminRootPage />,
    id: 'adminRoot',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AdminPage />},
    ],
  },
  {
    path: '/oauth/:provider/redirect',
    element: <AuthCallBackPage />,
  },
  {
    path: 'signup',
    element: <SignupPage />,
  },
]);
