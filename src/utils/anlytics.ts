import ReactGA from 'react-ga4';

export const handleClickBtn = (label: string) => {
  ReactGA.event({
    category: 'Button',
    action: 'Click',
    label: label,
    value: 1,
  });
};

export const handleFormSubmit = (label: string) => {
  ReactGA.event({
    category: 'Form',
    action: 'Submit',
    label: label,
    value: 1,
  });
};

export const handleScroll = () => {
  ReactGA.event({
    category: 'Scroll',
    action: 'User Scrolled',
    label: 'Scrolled Down 50%',
    value: 50,
  });
};

export const trackPageView = (path: string) => {
  if (import.meta.env.VITE_ENV === 'production') {
    ReactGA.set({ page: path });
    ReactGA.send('pageview');
  }
};
