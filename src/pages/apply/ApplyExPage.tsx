import { useParams } from 'react-router-dom';

import ApplyEx from '@gdsc/pages/apply/components/ApplyEx';
import Star from '@gdsc/pages/main/components/Star';

import { SEO } from '@gdsc/utils/Seo';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const ApplyLayout = styled(DisplayLayout)`
  height: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ApplyExPage = () => {
  const { tech } = useParams();

  return (
    <>
      <SEO
        title='GDSC_KNU_OFFICIAL'
        description='GDSC KNU는 모든 경북대 학생들을 환영합니다.'
        url={`https://gdsc-knu.com/${tech}`}
        image='https://gdsc-knu.com/WhiteLogo.png'
      />
      <ApplyLayout>
        <ApplyEx />
        {[...Array(25)].map((_, index) => (
          <Star
            key={index}
            top={`${Math.random() * 30}%`}
            left={`${Math.random() * 100}%`}
          />
        ))}
      </ApplyLayout>
    </>
  );
};

export default ApplyExPage;
