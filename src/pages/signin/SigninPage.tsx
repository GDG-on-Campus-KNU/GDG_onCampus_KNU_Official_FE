import SigninModal from '@gdg/pages/signin/components/SigninModal';
import { SigninMetaData } from '@gdg/router/components/MetaData';
import { AuthWrapper } from '@gdg/styles/AuthModalStyle';
import { detectUserAgent } from '@gdg/utils/detectUserAgent';
import {
  openLinkInKakaoExternal,
  openLinkInSupportedBrowsers,
} from '@gdg/utils/openLinkInExternalBrowser';
import { useEffect } from 'react';

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
