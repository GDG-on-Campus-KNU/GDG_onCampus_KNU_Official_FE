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
            {isPending && <Text>회원 기본 정보를 불러오는 중입니다... </Text>}
            {detail && (
              <BasicInfo
                name={detail.name}
                studentNumber={detail.studentNumber}
                major={detail.major}
                phoneNumber={detail.phoneNumber}
                email={detail.email}
              />
            )}
            <DividingLine />
            <Text size='md' weight='bold' color='black'>
              자기소개
            </Text>
            <SelfIntroduce>
              {isPending && '자기소개 정보를 불러오는 중입니다...'}
              {detail && detail.answers.length > 0
                ? `${detail.answers[0].answer}`
                : '빈 자기소개 란입니다.'}
            </SelfIntroduce>
          </IntroContainer>
          <ProfileContainer>
            <TitleWrapper>
              <Text size='xl' weight='bold' color='black'>
                {isPending && 'OOO'}
                {detail && `${detail.name}`}
              </Text>
              {isPending && (
                <MarkBtn>
                  <Stars color='silver' width='25px' height='24px' />
                </MarkBtn>
              )}
              {detail && detail.marked === true && (
                <MarkBtn onClick={() => handleMark(detail.id)}>
                  <Stars color='yellow' width='25px' height='24px' />
                </MarkBtn>
              )}
              {detail && detail.marked === false && (
                <MarkBtn onClick={() => handleMark(detail.id)}>
                  <Stars color='silver' width='25px' height='24px' />
                </MarkBtn>
              )}
            </TitleWrapper>
            {isPending && <ApplyInfo track='' submittedAt='' />}
            {detail && (
              <ApplyInfo
                track={detail.track}
                submittedAt={detail.submittedAt}
              />
            )}
            <DividingLine />
            {isPending && <TechStack techStack='' link='' />}
            {detail && (
              <TechStack techStack={detail.techStack} link={detail.link} />
            )}
            <DividingLine />

            {isPending && <Memo id={null} note='' />}
            {detail && <Memo id={detail.id} note={detail.note} />}
            <DividingLine />

            {isPending && (
              <ButtonContainer>
                <CommonBtn
                  type='button'
                  width='45%'
                  height='30px'
                  color='yellow'
                  hoverColor='yellow'
                  backgroundColor='yellow'
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
                >
                  불합격
                </CommonBtn>
              </ButtonContainer>
            )}
            {detail && (
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
            )}
          </ProfileContainer>
        </ContentWrapper>
      </ModalWrapper>
    </ModalBackdrop>
  );
};

export default ApplyDetailModal;
