import ReactGA from 'react-ga4';

type GAEventParams = {
  category: string;
  action: string;
  label: string;
  value: number;
};

const sendGAEvent = (eventParams: GAEventParams) => {
  if (import.meta.env.VITE_ENV === 'production') {
    ReactGA.event(eventParams);
  }
};

export const handleCarouselClick = (label: string) => {
  sendGAEvent({
    category: 'Button',
    action: 'Custom_Carousel_Click',
    label: label,
    value: 1,
  });
};

export const handleFinalFormSubmit = (label: string) => {
  sendGAEvent({
    category: 'Form',
    action: 'Custom_Final_Submit',
    label: label,
    value: 1,
  });
};

export const handleTemperalFormSave = (label: string) => {
  sendGAEvent({
    category: 'Form',
    action: 'Custom_Temporal_Save',
    label: label,
    value: 1,
  });
};

export const handleTemperalAgainFormSave = (label: string) => {
  sendGAEvent({
    category: 'Form',
    action: 'Custom_Temporal_Save_Again',
    label: label,
    value: 1,
  });
};

export const handleTemperalFinalFormSubmit = (label: string) => {
  sendGAEvent({
    category: 'Form',
    action: 'Custom_Temporal_Final_Submit',
    label: label,
    value: 1,
  });
};

export const handleIntroduceScroll = () => {
  sendGAEvent({
    category: 'Scroll',
    action: 'Custom_Introduce Page Scrolled',
    label: 'Scrolled Down 50%',
    value: 50,
  });
};

export const trackPageView = (path: string) => {
  if (import.meta.env.VITE_ENV === 'production') {
    ReactGA.set({
      page: path,
    });
    ReactGA.send({
      hitType: 'page_view',
      action: 'Custom_Page_View',
      page: path,
    });
  }
};
