import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

import { trackPageView } from '@gdg/utils/anlytics';

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (import.meta.env.VITE_ENV === 'production') {
      ReactGA.initialize(import.meta.env.VITE_APP_GA_TRACKING_ID as string);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      trackPageView(location.pathname);
    }
  }, [initialized, location]);

  return null;
};

export default RouteChangeTracker;
