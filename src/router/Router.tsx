import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { AsyncBoundary } from '@gdsc/components/common/AsyncBoundary';
import { LoadingView } from '@gdsc/components/common/View/LoadingView';

import AdminRootPage from '@gdsc/pages/AdminRootPage';
// import { TeamPage } from '@gdsc/pages/team';
// import TechBlogPage from '@gdsc/pages/tech_blog/TechBlogPage';
import ErrorPage from '@gdsc/pages/ErrorPage';
import RootPage from '@gdsc/pages/RootPage';

// import CommunityPage from '@gdsc/pages/community/CommunityPage';
import { TeamUpdateProvider } from '@gdsc/provider/TeamUpdate';
import StatusRoute from '@gdsc/router/components/StatusRoute';

const MainPage = lazy(() => import('@gdsc/pages/main/MainPage'));
const SigninPage = lazy(() => import('@gdsc/pages/signin/SigninPage'));
const SignupPage = lazy(() => import('@gdsc/pages/signup/SignupPage'));
const ApplyPage = lazy(() => import('@gdsc/pages/apply/ApplyPage'));
const ApplyFormPage = lazy(() => import('@gdsc/pages/apply/ApplyFormPage'));
const ApplyExPage = lazy(() => import('@gdsc/pages/apply/ApplyExPage'));
const InquiryPage = lazy(() => import('@gdsc/pages/apply/InquiryPage'));
const IntroducePage = lazy(() => import('@gdsc/pages/introduce/IntroducePage'));
const MyPage = lazy(() => import('@gdsc/pages/mypage/MyPage'));
const AuthCallBackPage = lazy(
  () => import('@gdsc/pages/signin/AuthCallBackPage')
);
const AdminDocConfirmPage = lazy(
  () => import('@gdsc/pages/admin/AdminDocConfirmPage')
);
const AdminSetStatePage = lazy(
  () => import('@gdsc/pages/admin/AdminSetStatePage')
);
const AdminTeamArrangePage = lazy(
  () => import('@gdsc/pages/admin/AdminTeamArrangePage')
);

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <AsyncBoundary pendingFallback={<LoadingView />}>
            <MainPage />
          </AsyncBoundary>
        ),
      },
      {
        path: 'signin',
        element: (
          <AsyncBoundary pendingFallback={<LoadingView />}>
            <SigninPage />
          </AsyncBoundary>
        ),
      },
      {
        path: 'apply',
        element: <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />,
        children: [
          {
            path: '',
            element: (
              <AsyncBoundary pendingFallback={<LoadingView />}>
                <ApplyPage />
              </AsyncBoundary>
            ),
          },
          {
            path: ':tech',
            children: [
              {
                path: '',
                element: (
                  <AsyncBoundary pendingFallback={<LoadingView />}>
                    <ApplyExPage />
                  </AsyncBoundary>
                ),
              },
              {
                path: 'form',
                element: (
                  <AsyncBoundary pendingFallback={<LoadingView />}>
                    <ApplyFormPage />
                  </AsyncBoundary>
                ),
              },
            ],
          },
          {
            path: 'inquiry',
            element: (
              <AsyncBoundary pendingFallback={<LoadingView />}>
                <InquiryPage />
              </AsyncBoundary>
            ),
          },
        ],
      },
      {
        path: 'mypage',
        element: <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />,
        children: [
          {
            path: '',
            element: (
              <AsyncBoundary pendingFallback={<LoadingView />}>
                <MyPage />
              </AsyncBoundary>
            ),
          },
        ],
      },
      // {
      //   path: 'team',
      //   element: <StatusRoute allowedStatuses={['CORE', 'MEMBER']} />,
      //   children: [{ path: '', element: <TeamPage /> }],
      // },
      {
        path: 'introduce',
        element: (
          <AsyncBoundary pendingFallback={<LoadingView />}>
            <IntroducePage />
          </AsyncBoundary>
        ),
      },
      // { path: 'community', element: <CommunityPage /> },
      // { path: 'techblog', element: <TechBlogPage /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminRootPage />,
    id: 'adminRoot',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <StatusRoute allowedStatuses={['CORE']} />,
        children: [
          {
            path: '',
            element: (
              <AsyncBoundary pendingFallback={<LoadingView />}>
                <AdminSetStatePage />
              </AsyncBoundary>
            ),
          },
        ],
      },
      {
        path: 'team',
        element: <StatusRoute allowedStatuses={['CORE']} />,
        children: [
          {
            path: '',
            element: (
              <AsyncBoundary pendingFallback={<LoadingView />}>
                <TeamUpdateProvider>
                  <AdminTeamArrangePage />
                </TeamUpdateProvider>
              </AsyncBoundary>
            ),
          },
        ],
      },
      {
        path: 'document',
        element: <StatusRoute allowedStatuses={['CORE']} />,
        children: [
          {
            path: '',
            element: (
              <AsyncBoundary pendingFallback={<LoadingView />}>
                <AdminDocConfirmPage />
              </AsyncBoundary>
            ),
          },
        ],
      },
    ],
  },
  {
    path: '/oauth/:provider/redirect',
    element: (
      <AsyncBoundary pendingFallback={<LoadingView />}>
        <AuthCallBackPage />
      </AsyncBoundary>
    ),
  },
  {
    path: 'signup',
    element: (
      <AsyncBoundary pendingFallback={<LoadingView />}>
        <SignupPage />
      </AsyncBoundary>
    ),
  },
]);
