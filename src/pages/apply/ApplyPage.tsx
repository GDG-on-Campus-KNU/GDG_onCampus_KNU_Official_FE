import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import InnerCircle from '@gdg/components/feature/background/InnerCircle';
import CrossShape from '@gdg/components/feature/star/Cross';
import Star from '@gdg/components/feature/star/Star';
import ApplyNav from '@gdg/pages/apply/components/ApplyNav';
import ApplyNavEnd from '@gdg/pages/apply/components/ApplyNavEnd';
import { ApplyMetaData } from '@gdg/router/components/MetaData';
import { DisplayLayout } from '@gdg/styles/LayoutStyle';

const ApplyLayout = styled(DisplayLayout)`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  position: relative;
`;

const ApplyPage = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const today = dayjs();
    const deadline = dayjs('2024-12-27 23:59:59');
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
