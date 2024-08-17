import { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import ApplyNav from '@gdsc/pages/apply/components/ApplyNav';
import ApplyNavEnd from '@gdsc/pages/apply/components/ApplyNavEnd';
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

const ApplyPage = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const today = dayjs();
    const deadline = dayjs('2024-09-05');
    setShowForm(today.isBefore(deadline));
  }, []);

  return (
    <>
      <SEO
        title='GDSC_KNU_OFFICIAL'
        description='GDSC KNU는 모든 경북대 학생들을 환영합니다.'
        url='https://gdsc-knu.com/apply'
        image='https://gdsc-knu.com/ApplyNav.png'
      />
      <ApplyLayout>
        {showForm ? <ApplyNav /> : <ApplyNavEnd />}
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

export default ApplyPage;
