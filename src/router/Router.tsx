import { lazy } from 'react';
import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
  Outlet,
} from 'react-router-dom';

import { AsyncBoundary } from '@gdsc/components/common/AsyncBoundary';
import { LoadingView } from '@gdsc/components/common/View/LoadingView';

import { TeamUpdateProvider } from '@gdsc/provider/TeamUpdate';
import RouteChangeTracker from '@gdsc/router/components/RouteChangeTracker';
import StatusRoute from '@gdsc/router/components/StatusRoute';

const TechBlogPage = lazy(() => import('@gdsc/pages/tech_blog/TechBlogPage'));
const ErrorPage = lazy(() => import('@gdsc/pages/ErrorPage'));
const CommunityPage = lazy(() => import('@gdsc/pages/community/CommunityPage'));
const TeamPage = lazy(() => import('@gdsc/pages/team'));
const RootPage = lazy(() => import('@gdsc/pages/RootPage'));
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
const AdminRootPage = lazy(() => import('@gdsc/pages/AdminRootPage'));
const AdminDocConfirmPage = lazy(
  () => import('@gdsc/pages/admin/AdminDocConfirmPage')
);
const AdminSetStatePage = lazy(
  () => import('@gdsc/pages/admin/AdminSetStatePage')
);
const AdminTeamArrangePage = lazy(
  () => import('@gdsc/pages/admin/AdminTeamArrangePage')
);

type AppRouteObject = (IndexRouteObject | NonIndexRouteObject) & {
  children?: AppRouteObject[];
};

const routesConfig: AppRouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'signin',
        element: <SigninPage />,
      },
      {
        path: 'apply',
        element: <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />,
        children: [
          {
            path: '',
            element: <ApplyPage />,
          },
          {
            path: ':tech',
            element: <Outlet />,
            children: [
              {
                path: '',
                element: <ApplyExPage />,
              },
              {
                path: 'form',
                element: <ApplyFormPage />,
              },
            ],
          },
          {
            path: 'inquiry',
            element: <InquiryPage />,
          },
        ],
      },
      {
        path: 'mypage',
        element: <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />,
        children: [
          {
            path: '',
            element: <MyPage />,
          },
        ],
      },
      {
        path: 'team',
        element: <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />,
        children: [
          {
            path: '',
            element: <TeamPage />,
          },
        ],
      },
      {
        path: 'introduce',
        element: <IntroducePage />,
      },
      {
        path: 'community',
        element: <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />,
        children: [
          {
            path: '',
            element: <CommunityPage />,
          },
        ],
      },
      {
        path: 'techblog',
        element: <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />,
        children: [
          {
            path: '',
            element: <TechBlogPage />,
          },
        ],
      },
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
            element: <AdminSetStatePage />,
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
              <TeamUpdateProvider>
                <AdminTeamArrangePage />
              </TeamUpdateProvider>
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
            element: <AdminDocConfirmPage />,
          },
        ],
      },
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
];

const createRoutesWithAsyncBoundary = (
  routes: AppRouteObject[]
): AppRouteObject[] => {
  return routes.map((route) => {
    const { element, children, ...rest } = route;

    if ('index' in route) {
      return {
        ...rest,
        element: (
          <AsyncBoundary pendingFallback={<LoadingView />}>
            <RouteChangeTracker />
            {element}
          </AsyncBoundary>
        ),
      } as AppRouteObject;
    } else {
      return {
        ...rest,
        element: (
          <AsyncBoundary pendingFallback={<LoadingView />}>
            <RouteChangeTracker />
            {element}
          </AsyncBoundary>
        ),
        children: children
          ? createRoutesWithAsyncBoundary(children)
          : undefined,
      } as AppRouteObject;
    }
  });
};

export const Router = createBrowserRouter(
  createRoutesWithAsyncBoundary(routesConfig)
);
