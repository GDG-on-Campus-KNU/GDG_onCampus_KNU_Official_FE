import { useState, useEffect } from 'react';

import CommonBtn from '@gdsc/components/common/button/CommonBtn';
import Text from '@gdsc/components/common/typography/Text';

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
} from './ApplyDetailModal.style';
import ApplyDetailModalSkeleton from './ApplyDetailModalSkeleton';
import ApplyInfo from './ApplyInfo';
import BasicInfo from './BasicInfo';
import Memo from './Memo';
import Stars from './Stars';
import TechStack from './TechStack';
import styled from '@emotion/styled';

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
        alert('합불 여부 저장에 실패하였습니다.');
      },
    });
  };

  return (
    <ModalBackdrop>
      <ModalWrapper>
        {isPending && <ApplyDetailModalSkeleton />}
        {detail && (
          <>
            <TitleWrapper>
              <Text size='xl' weight='bold' color='black'>
                지원자 정보 조회
              </Text>
              <CloseBtn onClick={onClose} />
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
                  본인이 생각하기에 좋은 개발자란 무엇인가요?
                </Text>
                <SelfIntroduce>
                  {detail.answers.length > 0
                    ? `${detail.answers[0].answer}`
                    : '좋은 개발자에 대한 설명란이 비어있습니다.'}
                </SelfIntroduce>
                <DividingLine />
                <Text size='md' weight='bold' color='black'>
                  지원하게 된 동기가 무엇인가요?
                </Text>
                <SelfIntroduce>
                  {detail.answers.length > 1
                    ? `${detail.answers[1].answer}`
                    : '지원동기란이 비어있습니다.'}
                </SelfIntroduce>
                <DividingLine />
                <Text size='md' weight='bold' color='black'>
                  본인이 겪었던 힘들었던 문제 상황을 적어주세요.
                </Text>
                <SelfIntroduce>
                  {detail.answers.length > 1
                    ? `${detail.answers[2].answer}`
                    : '힘들었던 문제 상황란이 비어있습니다.'}
                </SelfIntroduce>
                <DividingLine />
                <Text size='md' weight='bold' color='black'>
                  본인이 협업해본 경험에 대해 적어주세요.
                </Text>
                <SelfIntroduce>
                  {detail.answers.length > 1
                    ? `${detail.answers[3].answer}`
                    : '협업 경험란이 비어있습니다.'}
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
