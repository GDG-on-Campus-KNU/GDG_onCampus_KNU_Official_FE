import styled from '@emotion/styled';
import CommonBtn from '@gdg/components/common/button/CommonBtn';
import Text from '@gdg/components/common/typography/Text';
import { NavLink } from 'react-router-dom';

const ApplyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  margin-bottom: 64px;

  @media (max-width: 767px) {
    margin-bottom: 242px;
  }

  @media (max-width: 500px) {
    row-gap: 30px;
    margin-bottom: 189px;
  }
`;

const ApplyBox = styled.div`
  width: calc(100% - 100px);
  height: 46px;
  border-radius: 12px;
  background-color: #ffffff26;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 29px 50px 29px 50px;

  @media (max-width: 767px) {
    padding: 23px 40px 23px 40px;
  }

  @media (max-width: 500px) {
    width: calc(100% - 40px);
    padding: 25px 20px 25px 20px;
    height: 30px;
  }
`;

const ApplyTextLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextLayout = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ApplyText = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-right: 13px;

  @media (max-width: 767px) {
    margin-right: 0px;
    font-size: clamp(var(--font-size-md), 3vw, var(--font-size-lg));
  }

  @media (max-width: 500px) {
    margin-right: 0px;
    font-size: var(--font-size-md);
  }
`;

const ApplySubText = styled(Text)`
  font-size: var(--font-size-md);
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    font-size: clamp(var(--font-size-xs), 2vw, var(--font-size-md));
  }

  @media (max-width: 500px) {
    font-size: var(--font-size-xs);
  }
`;

const DeveloperData = [
  {
    id: 0,
    korean: '프론트엔드 개발자',
    english: 'Frontend Developer',
    link: '/apply/frontend',
  },
  {
    id: 1,
    korean: '백엔드 개발자',
    english: 'Backend Developer',
    link: '/apply/backend',
  },
  {
    id: 2,
    korean: 'AI 개발자',
    english: 'AI Developer',
    link: '/apply/ai',
  },
  {
    id: 3,
    korean: '안드로이드 개발자',
    english: 'Android Developer',
    link: '/apply/android',
  },
  {
    id: 4,
    korean: '디자이너',
    english: 'Designer',
    link: '/apply/designer',
  },
];

const ApplyNavBox = () => {
  return (
    <ApplyGrid>
      {DeveloperData.map((data) => (
        <ApplyBox key={data.id}>
          <ApplyTextLayout>
            <TextLayout>
              <ApplyText color='var(--color-white)'>{data.korean}</ApplyText>
              <ApplySubText color='var(--color-white)'>
                {data.english}
              </ApplySubText>
            </TextLayout>
          </ApplyTextLayout>
          <NavLink to={data.link}>
            <CommonBtn
              width='200px'
              height='50px'
              size='md'
              mdWidth='150px'
              mdHeight='40px'
              mdSize='md'
              mSize='sm'
              mWidth='112px'
              mHeight='30px'
              padding='8px 63px'
              mPadding='5.5px 24px'
              color='blue'
              backgroundColor='blue'
              hoverColor='blue'
              type='button'
            >
              지원하기
            </CommonBtn>
          </NavLink>
        </ApplyBox>
      ))}
    </ApplyGrid>
  );
};

export default ApplyNavBox;
