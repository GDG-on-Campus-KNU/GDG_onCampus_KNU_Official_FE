import styled from '@emotion/styled';
import Text from '@gdg/components/common/typography/Text';
import { motion } from 'framer-motion';
import { UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';

import ButtonContainer from './ButtonContainer';
import type { FormData } from './CreateTeamModal';
import FormField from './FormField';
import { TextContainer } from './TextContainer';

interface ModalContentProps {
  register: UseFormRegister<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  onSubmit: (data: FormData) => void;
  onClose: () => void;
  isStudy: boolean | null;
  handleStudyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalContent = ({
  register,
  handleSubmit,
  onSubmit,
  onClose,
  isStudy,
  handleStudyChange,
}: ModalContentProps) => {
  return (
    <StyledModalContent
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextContainer>
        <Text color='white' size='lg' weight='700'>
          새로운 팀을 형성 하시겠습니까?
        </Text>
      </TextContainer>
      <FormField label='팀이름을 입력해주세요'>
        <input
          type='text'
          id='teamName'
          placeholder='ex). STUDY-FE'
          {...register('teamName', { required: true })}
        />
      </FormField>
      <div style={{ display: 'flex', width: '100%' }}>
        <FormField label='스터디인가요?'>
          <label className='checkbox-label'>
            <input
              type='radio'
              name='isStudy'
              value='yes'
              onChange={handleStudyChange}
            />
            <span className='custom-checkbox'></span>
            네, 스터디입니다
          </label>
          <label className='checkbox-label'>
            <input
              type='radio'
              name='isStudy'
              value='no'
              onChange={handleStudyChange}
            />
            <span className='custom-checkbox'></span>
            아니요, 스터디가 아닙니다
          </label>
        </FormField>
        <FormField label='직렬을 선택해주세요'>
          <CheckoutGrid>
            <label>
              <input
                type='radio'
                value='FRONT_END'
                disabled={isStudy === false || isStudy === null}
                {...register('track')}
              />
              프론트엔드
            </label>
            <label>
              <input
                type='radio'
                value='BACK_END'
                disabled={isStudy === false || isStudy === null}
                {...register('track')}
              />
              백엔드
            </label>
            <label>
              <input
                type='radio'
                value='ANDROID'
                disabled={isStudy === false || isStudy === null}
                {...register('track')}
              />
              안드로이드
            </label>
            <label>
              <input
                type='radio'
                value='AI'
                disabled={isStudy === false || isStudy === null}
                {...register('track')}
              />
              AI
            </label>
            <label>
              <input
                type='radio'
                value='DESIGNER'
                disabled={isStudy === false || isStudy === null}
                {...register('track')}
              />
              디자인
            </label>
          </CheckoutGrid>
        </FormField>
      </div>
      <ButtonContainer onClose={onClose} />
    </StyledModalContent>
  );
};

export default ModalContent;

const StyledModalContent = styled(motion.form)`
  background: var(--color-que);
  padding: 14px 30px 30px 30px;
  border-radius: 12px;
  width: 600px;
  height: 300px;
  max-width: 80%;
  text-align: center;
  position: relative;
  z-index: 1000;
`;

const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;

  label {
    font-size: var(--font-size-xs);
  }
`;
