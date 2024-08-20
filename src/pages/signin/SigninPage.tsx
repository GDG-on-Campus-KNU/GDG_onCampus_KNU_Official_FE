import { useEffect } from 'react';

import SigninModal from '@gdsc/pages/signin/components/SigninModal';

import { SEO } from '@gdsc/utils/Seo';
import { detectUserAgent } from '@gdsc/utils/detectUserAgent';
import {
  openLinkInKakaoExternal,
  openLinkInSupportedBrowsers,
} from '@gdsc/utils/openLinkInExternalBrowser';

import { AuthWrapper } from '@gdsc/styles/AuthModalStyle';

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
      <SEO
        title='GDSC KNU - 로그인 페이지'
        description='로그인 후 서비스를 이용해보세요.'
        url='https://gdsc-knu.com/signin'
        image='https://gdsc-knu.com/Login.png'
      />
      <AuthWrapper>
        <SigninModal />
      </AuthWrapper>
    </>
  );
};

export default SigninPage;
