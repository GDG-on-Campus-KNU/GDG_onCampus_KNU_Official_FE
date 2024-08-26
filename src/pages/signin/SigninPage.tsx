import { useEffect } from 'react';

import SigninModal from '@gdsc/pages/signin/components/SigninModal';

import { detectUserAgent } from '@gdsc/utils/detectUserAgent';
import {
  openLinkInKakaoExternal,
  openLinkInSupportedBrowsers,
} from '@gdsc/utils/openLinkInExternalBrowser';

import { AuthWrapper } from '@gdsc/styles/AuthModalStyle';

import { SigninMetaData } from '@gdsc/router/components/MetaData';

const SigninPage = () => {
  useEffect(function RedirectByUserAgent() {
    const signInUrl = 'https://gdsc-knu.com/signin';
    if (detectUserAgent() === 'KAKAOTALK') {
      openLinkInKakaoExternal(signInUrl);
    } else if (detectUserAgent() !== 'DEFAULT') {
      openLinkInSupportedBrowsers(signInUrl);
    }
  }, []);

  return (
    <>
      <SigninMetaData />
      <AuthWrapper>
        <SigninModal />
      </AuthWrapper>
    </>
  );
};

export default SigninPage;
