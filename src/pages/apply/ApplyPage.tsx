import { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import ApplyNav from '@gdsc/pages/apply/components/ApplyNav';
import ApplyNavEnd from '@gdsc/pages/apply/components/ApplyNavEnd';
import Star from '@gdsc/pages/main/components/Star';

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
  );
};

export default ApplyPage;