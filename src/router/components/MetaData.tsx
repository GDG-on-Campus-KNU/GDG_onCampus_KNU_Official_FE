import { useParams } from 'react-router-dom';

import { SEO } from '@gdsc/router/components/Seo';

export const MainMetaData = () => {
  return (
    <SEO
      title='GDSC KNU'
      description='GDSC 경북대의 공식 홈페이지에 오신걸 환영합니다. GDSC 활동과 관련된 최신 정보와 이벤트 소식을 확인하세요.'
      url='https://gdsc-knu.com'
      image='https://gdsc-knu.com/WhiteLogo.png'
    />
  );
};

export const SigninMetaData = () => {
  return (
    <SEO
      title='GDSC KNU'
      description='로그인 후 서비스를 이용해보세요.'
      url='https://gdsc-knu.com/signin'
      image='https://gdsc-knu.com/Login.png'
    />
  );
};

export const MypageMetaData = () => {
  return (
    <SEO
      title='GDSC KNU'
      description='마이페이지 정보 확인하기'
      url='https://gdsc-knu.com/mypage'
      image='https://gdsc-knu.com/WhiteLogo.png'
    />
  );
};

export const IntroduceMetaData = () => {
  return (
    <SEO
      title='GDSC KNU'
      description='4기를 앞으로 이어나갈 GDSC KNU의 소개 페이지입니다.'
      url='https://gdsc-knu.com/introduce'
      image='https://gdsc-knu.com/Introduce.png'
    />
  );
};

export const ApplyMetaData = () => {
  return (
    <SEO
      title='GDSC KNU'
      description='GDSC KNU는 모든 경북대 학생들을 환영합니다.'
      url='https://gdsc-knu.com/apply'
      image='https://gdsc-knu.com/ApplyNav.png'
    />
  );
};

export const ApplyFormMetaData = () => {
  const { tech } = useParams();

  return (
    <SEO
      title='GDSC KNU'
      description='GDSC KNU는 모든 경북대 학생들을 환영합니다.'
      url={`https://gdsc-knu.com/apply/${tech}/form`}
      image='https://gdsc-knu.com/WhiteLogo.png'
    />
  );
};

export const ApplyExMetaData = () => {
  const { tech } = useParams();

  return (
    <SEO
      title='GDSC KNU'
      description='GDSC KNU는 모든 경북대 학생들을 환영합니다.'
      url={`https://gdsc-knu.com/apply/${tech}`}
      image='https://gdsc-knu.com/WhiteLogo.png'
    />
  );
};

export const ApplyInquiryMetaData = () => {
  return (
    <SEO
      title='GDSC KNU'
      description='지원하신 서류를 조회하세요.'
      url={`https://gdsc-knu.com/apply/inquiry`}
      image='https://gdsc-knu.com/ApplyInquiry.png'
    />
  );
};

export const TeamBlogMetaData = () => {
  return (
    <SEO
      title='GDSC KNU'
      description='빠른 시일 내에 더 좋은 서비스를 제공할 수 있도록 노력하겠습니다.'
      url={`https://gdsc-knu.com/techblog`}
      image='https://gdsc-knu.com/CommingSoon.png'
    />
  );
};

export const TeamMetaData = () => {
  return (
    <SEO
      title='GDSC KNU'
      description='빠른 시일 내에 더 좋은 서비스를 제공할 수 있도록 노력하겠습니다.'
      url={`https://gdsc-knu.com/team`}
      image='https://gdsc-knu.com/CommingSoon.png'
    />
  );
};

export const CommunityMetaData = () => {
  return (
    <SEO
      title='GDSC KNU'
      description='빠른 시일 내에 더 좋은 서비스를 제공할 수 있도록 노력하겠습니다.'
      url={`https://gdsc-knu.com/community`}
      image='https://gdsc-knu.com/CommingSoon.png'
    />
  );
};
