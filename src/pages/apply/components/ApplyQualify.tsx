import styled from '@emotion/styled';
import { ApplyExInterface } from '@gdsc/interface/ApplyInterface';

const QualifyContainer = styled.div`
  width: 100%;
  margin-top: 94px;
  /* border: 1px solid #fff; */
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    margin-top: 80px;
  }
`;

const TitleBox = styled.div`
  width: auto;
  max-width: 230px;
  height: 43px;
  border-radius: 12px;
  background-color: #ffffff26;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: var(--font-size-lg);
  padding: 4px 17px 4px 17px;

  @media (max-width: 500px) {
    width: 190px;
    height: 30px;
    border-radius: 8px;
    font-size: var(--font-size-md);
  }
`;

const ApplyList = styled.ul`
  list-style: disc;
  margin-block-start: 21px;
  margin-block-end: 21px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 18px;
`;

const ApplyListItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  font-size: var(--font-size-sm);
  font-weight: 400;
`;

interface PCApplyQualifyProps {
  data: ApplyExInterface | null;
}

const ApplyQualify = ({ data }: PCApplyQualifyProps) => {
  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <QualifyContainer>
      <TitleBox>이런 분과 함께하고 싶어요</TitleBox>
      <ApplyList>
        {data.recruit.map((item, index) => (
          <ApplyListItem key={index}>{item}</ApplyListItem>
        ))}
      </ApplyList>
      <TitleBox>지원자격</TitleBox>
      <ApplyList>
        {data.qualify.map((item, index) => (
          <ApplyListItem key={index}>{item}</ApplyListItem>
        ))}
      </ApplyList>
      <TitleBox>우대사항</TitleBox>
      <ApplyList>
        {data.prefer.map((item, index) => (
          <ApplyListItem key={index}>{item}</ApplyListItem>
        ))}
      </ApplyList>
    </QualifyContainer>
  );
};

export default ApplyQualify;
