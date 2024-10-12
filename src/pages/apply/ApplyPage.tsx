import { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import InnerCircle from '@gdg/components/feature/background/InnerCircle';
import CrossShape from '@gdg/components/feature/star/Cross';
import Star from '@gdg/components/feature/star/Star';

import ApplyNav from '@gdg/pages/apply/components/ApplyNav';
import ApplyNavEnd from '@gdg/pages/apply/components/ApplyNavEnd';

import { DisplayLayout } from '@gdg/styles/LayoutStyle';

import styled from '@emotion/styled';
import { ApplyMetaData } from '@gdg/router/components/MetaData';

const ApplyLayout = styled(DisplayLayout)`
  height: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const ApplyPage = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const today = dayjs();
    const deadline = dayjs('2024-09-06 04:00');
    setShowForm(today.isBefore(deadline));
  }, []);

  return (
    <>
      <ApplyMetaData />
      <ApplyLayout>
        {showForm ? <ApplyNav /> : <ApplyNavEnd />}
        <InnerCircle />

        {[...Array(5)].map((_, index) => (
          <CrossShape
            key={index}
            top={`${Math.random() * (50 - 15) + 15}%`}
            left={`${Math.random() * (85 - 15) + 15}%`}
          />
        ))}
        {[...Array(10)].map((_, index) => (
          <Star
            key={index}
            top={`${Math.random() * (50 - 15) + 15}%`}
            left={`${Math.random() * (85 - 15) + 15}%`}
          />
        ))}
      </ApplyLayout>
    </>
  );
};

export default ApplyPage;
