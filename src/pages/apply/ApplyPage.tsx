import { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import styled from '@emotion/styled';
import ApplyNav from '@gdg/pages/apply/components/ApplyNav';
import ApplyNavEnd from '@gdg/pages/apply/components/ApplyNavEnd';
import Star from '@gdg/pages/main/components/Star';
import { ApplyMetaData } from '@gdg/router/components/MetaData';
import { DisplayLayout } from '@gdg/styles/LayoutStyle';

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
    const deadline = dayjs('2024-09-06 04:00');
    setShowForm(today.isBefore(deadline));
  }, []);

  return (
    <>
      <ApplyMetaData />
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
