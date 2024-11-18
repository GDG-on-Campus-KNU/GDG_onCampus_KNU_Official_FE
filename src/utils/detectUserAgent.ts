import { USER_AGENT_REGEX } from '@gdg/constants/regex';

export const detectUserAgent = () => {
  const detectedUserAgent = navigator.userAgent;

  for (const [userAgent, regex] of Object.entries(USER_AGENT_REGEX)) {
    if (regex.test(detectedUserAgent)) return userAgent;
  }
  return 'DEFAULT';
};
