import { useState, useEffect } from 'react';

import CommonBtn from '@gdsc/components/common/button/CommonBtn';
import Text from '@gdsc/components/common/typography/Text';

import {
  FrontendData,
  BackendData,
  AIData,
  AndroidData,
  DesignerData,
} from '@gdsc/pages/apply/components/ApplyFormDocs';

import CloseIcon from '@gdsc/assets/CloseIcon.svg';

import { useGetDocsDetail } from '@gdsc/apis/hooks/admin/docs/useGetDocsDetail';
import { usePatchMark } from '@gdsc/apis/hooks/admin/docs/usePatchMark';
import { usePatchStatus } from '@gdsc/apis/hooks/admin/docs/usePatchStatus';

import {
  ModalBackdrop,
  ModalWrapper,
  TitleWrapper,
  CloseBtn,
  ContentWrapper,
  IntroContainer,
  ProfileContainer,
  DividingLine,
  SelfIntroduce,
  ButtonContainer,
  CloseIconImg,
} from './ApplyDetailModal.style';
import ApplyDetailModalSkeleton from './ApplyDetailModalSkeleton';
import ApplyInfo from './ApplyInfo';
import BasicInfo from './BasicInfo';
import Memo from './Memo';
import Stars from './Stars';
import TechStack from './TechStack';
import styled from '@emotion/styled';

// 트랙별 질문 데이터 가져오기

const MarkBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Answer {
  questionNumber: number;
  answer: string;
}

interface DetailInfo {
  id: number;
  name: string;
  studentNumber: string;
  major: string;
  phoneNumber: string;
  email: string;
  track: string;
  submittedAt: string;
  techStack: string;
  link: string;
  note: string;
  answers: Answer[];
  marked: boolean;
}

const getQuestionsByTrack = (track: string) => {
  switch (track) {
    case 'Frontend':
      return FrontendData;
    case 'Backend':
      return BackendData;
    case 'AI':
      return AIData;
    case 'Android':
      return AndroidData;
    case 'Designer':
      return DesignerData;
    default:
      return null;
  }
};

const ApplyDetailModal = ({
  id,
  onClose,
}: {
  id: number;
  onClose: () => void;
}) => {
  const [detail, setDetail] = useState<DetailInfo | null>(null);

  const { data, isPending } = useGetDocsDetail(id);
  useEffect(() => {
    if (data) {
      setDetail(data);
    }
  }, [data]);

  const { mutate: patchStatus } = usePatchStatus();
  const { mutate: mark } = usePatchMark();

  const handleApprove = (id: number, status: string) => {
    patchStatus(
      { id, status },
      {
        onSuccess: () => {
          alert('합불 여부가 저장되었습니다.');
          window.location.reload();
        },
        onError: (error) => {
          console.error('API 호출 실패:', error);
          alert('합불 여부 저장에 실패하였습니다.');
        },
      }
    );
  };

  const handleMark = (id: number) => {
    mark(id, {
      onSuccess: () => {
        setDetail((prevDetail) => {
          if (prevDetail) {
            return {
              ...prevDetail,
              marked: !prevDetail.marked,
            };
          }
          return prevDetail;
        });
      },
      onError: (error) => {
        console.error('API 호출 실패:', error);
        alert('즐겨찾기 저장에 실패하였습니다.');
      },
    });
  };

  const trackData = detail ? getQuestionsByTrack(detail.track) : null;

  return (
    <ModalBackdrop>
      <ModalWrapper>
        {isPending && <ApplyDetailModalSkeleton />}
        {detail && trackData && (
          <>
            <TitleWrapper>
              <Text size='xl' weight='bold' color='black'>
                지원자 정보 조회
              </Text>
              <CloseBtn onClick={onClose}>
                <CloseIconImg src={CloseIcon} alt='close' />
              </CloseBtn>
            </TitleWrapper>
            <ContentWrapper>
              <IntroContainer>
                <Text size='md' weight='bold' color='black'>
                  기본정보
                </Text>
                <BasicInfo
                  name={detail.name}
                  studentNumber={detail.studentNumber}
                  major={detail.major}
                  phoneNumber={detail.phoneNumber}
                  email={detail.email}
                />
                <DividingLine />

                <Text size='md' weight='bold' color='black'>
                  {trackData.Question1.main}
                </Text>
                <SelfIntroduce>
                  {detail.answers.length > 0
                    ? `${detail.answers[0].answer}`
                    : `${trackData.Question1.main}란이 비어있습니다.`}
                </SelfIntroduce>
                <DividingLine />

                <Text size='md' weight='bold' color='black'>
                  {trackData.Question2.main}
                </Text>
                {trackData.Question2.sub && (
                  <Text size='sm' weight='normal' color='gray'>
                    {trackData.Question2.sub}
                  </Text>
                )}
                <SelfIntroduce>
                  {detail.answers.length > 1
                    ? `${detail.answers[1].answer}`
                    : `${trackData.Question2.main}란이 비어있습니다.`}
                </SelfIntroduce>
                <DividingLine />

                <Text size='md' weight='bold' color='black'>
                  {trackData.Question3.main}
                </Text>
                {trackData.Question3.sub && (
                  <Text size='sm' weight='normal' color='gray'>
                    {trackData.Question3.sub}
                  </Text>
                )}
                <SelfIntroduce>
                  {detail.answers.length > 2
                    ? `${detail.answers[2].answer}`
                    : `${trackData.Question3.main}란이 비어있습니다.`}
                </SelfIntroduce>
                <DividingLine />

                <Text size='md' weight='bold' color='black'>
                  {trackData.Question4.main}
                </Text>
                {trackData.Question4.sub && (
                  <Text size='sm' weight='normal' color='gray'>
                    {trackData.Question4.sub}
                  </Text>
                )}
                <SelfIntroduce>
                  {detail.answers.length > 3
                    ? `${detail.answers[3].answer}`
                    : `${trackData.Question4.main}란이 비어있습니다.`}
                </SelfIntroduce>
                <DividingLine />
              </IntroContainer>
              <ProfileContainer>
                <TitleWrapper>
                  <Text size='xl' weight='bold' color='black'>
                    {detail.name}
                  </Text>
                  {detail.marked === true && (
                    <MarkBtn onClick={() => handleMark(detail.id)}>
                      <Stars color='yellow' width='25px' height='24px' />
                    </MarkBtn>
                  )}
                  {detail.marked === false && (
                    <MarkBtn onClick={() => handleMark(detail.id)}>
                      <Stars color='silver' width='25px' height='24px' />
                    </MarkBtn>
                  )}
                </TitleWrapper>
                <ApplyInfo
                  track={detail.track}
                  submittedAt={detail.submittedAt}
                />
                <DividingLine />
                <TechStack techStack={detail.techStack} link={detail.link} />
                <DividingLine />
                <Memo id={detail.id} note={detail.note} />
                <DividingLine />
                <ButtonContainer>
                  <CommonBtn
                    type='button'
                    width='45%'
                    height='30px'
                    color='yellow'
                    hoverColor='yellow'
                    backgroundColor='yellow'
                    onClick={() => handleApprove(detail.id, 'APPROVED')}
                  >
                    합격
                  </CommonBtn>
                  <CommonBtn
                    type='button'
                    width='45%'
                    height='30px'
                    color='innerYellow'
                    hoverColor='innerYellow'
                    backgroundColor='innerYellow'
                    onClick={() => handleApprove(detail.id, 'REJECTED')}
                  >
                    불합격
                  </CommonBtn>
                </ButtonContainer>
              </ProfileContainer>
            </ContentWrapper>
          </>
        )}
      </ModalWrapper>
    </ModalBackdrop>
  );
};

export default ApplyDetailModal;
