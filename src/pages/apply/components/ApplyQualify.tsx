import Text from '@gdsc/components/common/typography/Text';

import ApplyArrow from '@gdsc/assets/ApplyArrow.svg';
import ApplyForm from '@gdsc/assets/ApplyForm.svg';
import ApplyInterview from '@gdsc/assets/ApplyInterview.svg';
import ApplyResult from '@gdsc/assets/ApplyResult.svg';

import styled from '@emotion/styled';
import { ApplyExInterface } from '@gdsc/types/ApplyInterface';

const QualifyContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  /* border: 1px solid #fff; */
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    margin-top: 0px;
  }
`;

const TitleBox = styled.div`
  width: 350px;
  height: 43px;
  border-radius: 12px;
  background-color: #ffffff26;

  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: 700;
  font-size: var(--font-size-lg);
  padding: 4px 17px 4px 17px;

  @media (max-width: 500px) {
    width: 250px;
    height: 30px;
    border-radius: 8px;
    font-size: var(--font-size-sm);
  }
`;

const ApplyList = styled.ul`
  list-style: disc;
  margin-block-start: 21px;
  margin-block-end: 70px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 18px;

  @media (max-width: 500px) {
    margin-block-end: 15px;
  }
`;

const ApplyListItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  font-size: var(--font-size-sm);
  font-weight: 400;
  line-height: 2;

  @media (max-width: 500px) {
    font-size: var(--font-size-xs);
  }
`;

const ImageBox = styled.div`
  width: 130px;
  height: 100px;
  border-radius: 12px;
  padding: 18px 0px 12px 0px;
  background-color: var(--color-app);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 70px;
    height: 54px;
    padding: 9px 0px 7px 0px;
  }
`;

const ImageChatBox = styled.div`
  width: 130px;
  height: 93px;
  border-radius: 12px;
  padding: 25px 0px 12px 0px;
  background-color: var(--color-app);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 70px;
    height: 50px;
    padding: 13px 0px 7px 0px;
  }
`;

const ApplyImg = styled.img`
  margin-bottom: 8px;
  @media (max-width: 500px) {
    width: 25px;
    height: auto;
  }
`;

const ApplyArrowImg = styled.img`
  margin: 0px 30px 0px 30px;

  @media (max-width: 500px) {
    margin: 0px 15px 0px 15px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;

  flex-direction: row;
  margin-bottom: 123px;

  @media (max-width: 767px) {
    margin-bottom: 90px;
  }

  @media (max-width: 500px) {
    margin-bottom: 40px;
  }
`;

const ApplyText = styled(Text)`
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

interface PCApplyQualifyProps {
  data: ApplyExInterface | null;
}

const ApplyQualify = ({ data }: PCApplyQualifyProps) => {
  if (!data) {
    return null;
  }

  // console.log(data);

  return (
    <QualifyContainer>
      <TitleBox>이런 분과 함께하고 싶어요</TitleBox>
      <ApplyList>
        {data.recruit.map((item, index) => (
          <ApplyListItem key={index}>{item}</ApplyListItem>
        ))}
      </ApplyList>
      <TitleBox>이런 경험이 있으면 더 좋아요</TitleBox>
      <ApplyList>
        {data.prefer.map((item, index) => (
          <ApplyListItem key={index}>{item}</ApplyListItem>
        ))}
      </ApplyList>
      <TitleBox>합류하게 되면 참여할 활동들이에요</TitleBox>
      <ApplyList>
        {data.event.map((item, index) => (
          <ApplyListItem key={index}>{item}</ApplyListItem>
        ))}
      </ApplyList>
      <ImageWrapper>
        <ImageBox>
          <ApplyImg src={ApplyForm} alt='apply' />
          <ApplyText color='white' size='md'>
            서류 전형
          </ApplyText>
        </ImageBox>
        <ApplyArrowImg src={ApplyArrow} alt='apply' />
        <ImageChatBox>
          <ApplyImg src={ApplyInterview} alt='apply' />
          <ApplyText color='white' size='md'>
            면접 진행
          </ApplyText>
        </ImageChatBox>
        <ApplyArrowImg src={ApplyArrow} alt='apply' />
        <ImageBox>
          <ApplyImg src={ApplyResult} alt='apply' />
          <ApplyText color='white' size='md'>
            최종 결정
          </ApplyText>
        </ImageBox>
      </ImageWrapper>
    </QualifyContainer>
  );
};

export default ApplyQualify;
