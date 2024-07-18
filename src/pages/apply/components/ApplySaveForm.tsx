import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Oval } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';

import CommonBtn from '@gdsc/components/button/CommonBtn';
import FormInput from '@gdsc/components/form/FormInput';
import FormTextArea from '@gdsc/components/form/FormTextArea';

import {
  Error,
  TitleWrapper,
  FormTitleLayout,
  FormLayout,
  TextLayout,
  QuestionLayout,
  FormTitle,
  FormLine,
  FormSubTitle,
  FormInputLine,
  ButtonWrapper,
  CommonWrapper,
  InputWrapper,
} from '@gdsc/pages/apply/components/ApplyForm.style';
import {
  FrontendData,
  BackendData,
  AndroidData,
  AIData,
  DesignerData,
} from '@gdsc/pages/apply/components/ApplyFormDocs';

import { ApplyFormSchema } from '@gdsc/utils/ApplyFormScehma.util';

import { useApplySaveMutation } from '@gdsc/apis/hooks/apply/ApplySaveQuery';

import {
  TitleLayout,
  MainTitle,
  SubTitle,
  Explain,
  SubLayout,
} from '@gdsc/styles/ApplyStyle';

import {
  ApplyFormInterface,
  ApplyFormQuestionInterface,
} from '@gdsc/types/ApplyInterface';
import { ApplyFormAPIInterface } from '@gdsc/types/ApplyInterface';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';

interface ApplySaveFormProps {
  SaveData: ApplyFormAPIInterface;
}

const ApplySaveForm = ({ SaveData }: ApplySaveFormProps) => {
  console.log(SaveData);
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const [submitType, setSubmitType] = useState<'submit' | 'save'>('submit');
  const { mutate: saveApplication, isPending: saveLoading } =
    useApplySaveMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ApplyFormInterface>({
    defaultValues: {
      techStack: `${SaveData.techStack}`,
      links: `${SaveData.links}`,
      applicationStatus: `${SaveData.applicationStatus}`,
      track: `${SaveData.track}`,
      answers: [
        { questionNumber: 0, answer: `${SaveData.answers?.[0]?.answer}` },
        { questionNumber: 1, answer: `${SaveData.answers?.[1]?.answer}` },
        { questionNumber: 2, answer: `${SaveData.answers?.[2]?.answer}` },
        { questionNumber: 3, answer: `${SaveData.answers?.[3]?.answer}` },
      ],
    },
    resolver: zodResolver(ApplyFormSchema),
  });

  const techStack = SaveData.track || '';

  const getData = (techStack: string): ApplyFormQuestionInterface | null => {
    switch (techStack) {
      case 'FRONT_END':
        return FrontendData;
      case 'BACK_END':
        return BackendData;
      case 'AI':
        return AIData;
      case 'ANDROID':
        return AndroidData;
      case 'DESIGNER':
        return DesignerData;
      default:
        return null;
    }
  };

  const data: ApplyFormQuestionInterface | null = getData(techStack);

  const onSubmit = (formData: ApplyFormInterface) => {
    const message =
      submitType === 'submit'
        ? '제출을 완료하시겠습니까? \n제출하시면 조회 및 수정이 불가능합니다.'
        : '저장을 완료하시겠습니까? \n지원기간 동안 지원하기 > 지원서 조회하기를 통해 지원서를 수정하실 수 있습니다.';
    const isConfirmed = window.confirm(message);
    if (isConfirmed) {
      const finalFormData = {
        ...formData,
        applicationStatus: (formData.applicationStatus = 'SAVED'),
        answers:
          formData.answers?.map((answer, index) => ({
            questionNumber: index,
            answer: answer.answer,
          })) || [],
      };
      const saveFormData = {
        ...formData,
        answers:
          formData.answers?.map((answer, index) => ({
            questionNumber: index,
            answer: answer.answer,
          })) || [],
      };
      if (submitType === 'submit') {
        saveApplication(finalFormData);
        // console.log(finalFormData);
      } else if (submitType === 'save') {
        // submitApplication(saveFormData);
        saveApplication(saveFormData);
      }
    }
  };

  return (
    <>
      {isMobile ? (
        <TitleLayout>
          <SubTitle>{data?.korean}</SubTitle>
        </TitleLayout>
      ) : (
        <FormTitleLayout>
          <TitleLayout>
            <SubLayout>
              <SubTitle color=' var(--color-white)'>To Apply</SubTitle>
              <Explain>GDSC KNU</Explain>
            </SubLayout>
            <TitleWrapper>
              <MainTitle color=' var(--color-white)'>{data?.korean}</MainTitle>
              <SubTitle>{data?.english}</SubTitle>
            </TitleWrapper>
          </TitleLayout>
        </FormTitleLayout>
      )}
      <FormLayout onSubmit={handleSubmit(onSubmit)}>
        <TextLayout>
          <FormTitle color='white' size='xl' weight='700'>
            기본정보 <span style={{ color: 'red' }}>*</span>
          </FormTitle>
          <FormLine />
          <FormSubTitle color='white' size='md' weight='400'>
            최종 지원 후, 이름과 학번을 통해 지원서 조회가 가능하니 지원시
            유의해주세요.
          </FormSubTitle>
        </TextLayout>
        <FormInputLine>
          <InputWrapper>
            <FormInput
              id='links'
              width='100%'
              margin='0px 15px 0px 0px'
              title='깃허브 링크'
              placeholder='깃허브 링크를 입력해주세요'
              type='text'
              register={register('links')}
            />
            <ErrorMessage
              errors={errors}
              name='links'
              render={({ message }) => <Error role='alert'>{message}</Error>}
            />
          </InputWrapper>
          <InputWrapper>
            <FormInput
              id='techStack'
              width='100%'
              margin='0px 0px 0px 0px'
              title='기술 스택'
              placeholder='ex) JAVA, JavaScript'
              type='text'
              register={register('techStack')}
            />
            <ErrorMessage
              errors={errors}
              name='techStack'
              render={({ message }) => <Error role='alert'>{message}</Error>}
            />
          </InputWrapper>
        </FormInputLine>
        <QuestionLayout>
          <FormTitle color='white' size='xl' weight='700'>
            {data?.Question1.main}
          </FormTitle>
          <FormLine />
        </QuestionLayout>
        <FormTextArea
          id='question-1'
          label=''
          placeholder='500자 이내로 입력해주세요.'
          maxLength={500}
          register={register('answers.0.answer')}
          color='var(--color-gradient)'
        />
        <TextLayout>
          <FormTitle color='white' size='xl' weight='700'>
            {data?.Question2.main}
          </FormTitle>
          <FormLine />
          <FormSubTitle color='white' size='md' weight='400'>
            {data?.Question2.sub}
          </FormSubTitle>
        </TextLayout>
        <FormTextArea
          id='question-2'
          label=''
          placeholder='500자 이내로 입력해주세요.'
          maxLength={500}
          color='var(--color-gradient)'
          register={register('answers.1.answer')}
        />
        <TextLayout>
          <FormTitle color='white' size='xl' weight='700'>
            {data?.Question3.main}
          </FormTitle>
          <FormLine />
          <FormSubTitle color='white' size='md' weight='400'>
            {data?.Question3.sub}
          </FormSubTitle>
        </TextLayout>
        <FormTextArea
          id='question-3'
          label=''
          placeholder='500자 이내로 입력해주세요.'
          maxLength={500}
          color='var(--color-gradient)'
          register={register('answers.2.answer')}
        />
        <TextLayout>
          <FormTitle color='white' size='xl' weight='700'>
            {data?.Question4.main}
          </FormTitle>
          <FormLine />
          <FormSubTitle color='white' size='md' weight='400'>
            {data?.Question4.sub}
          </FormSubTitle>
        </TextLayout>
        <FormTextArea
          id='question-4'
          label=''
          placeholder='500자 이내로 입력해주세요.'
          maxLength={500}
          color='var(--color-gradient)'
          register={register('answers.3.answer')}
        />

        <ButtonWrapper>
          {saveLoading ? (
            <CommonBtn
              color='blue'
              backgroundColor='blue'
              hoverColor='blue'
              type='submit'
              width='100%'
              mdWidth='100%'
              mWidth='100%'
              size='xl'
              mSize='sm'
              height='43'
              padding='0'
              onClick={() => setSubmitType('submit')}
            >
              <Oval
                visible={true}
                height='30'
                width='30'
                color='#fff'
                ariaLabel='oval-loading'
                wrapperStyle={{}}
                wrapperClass=''
              />
            </CommonBtn>
          ) : (
            <CommonBtn
              color='blue'
              backgroundColor='blue'
              hoverColor='blue'
              type='submit'
              width='100%'
              mdWidth='100%'
              mWidth='100%'
              size='xl'
              mSize='sm'
              height='43'
              padding='0'
              onClick={() => setSubmitType('submit')}
            >
              최종 제출하기
            </CommonBtn>
          )}

          <CommonWrapper>
            {saveLoading ? (
              <CommonBtn
                color='gray'
                backgroundColor='gray'
                hoverColor='blue'
                type='submit'
                width='100%'
                mdWidth='100%'
                mWidth='100%'
                onClick={() => setSubmitType('save')}
                height='43px'
                size='lg'
                mSize='sm'
                padding='0'
              >
                <Oval
                  visible={true}
                  height='30'
                  width='30'
                  color='#fff'
                  ariaLabel='oval-loading'
                  wrapperStyle={{}}
                  wrapperClass=''
                />
              </CommonBtn>
            ) : (
              <CommonBtn
                color='gray'
                backgroundColor='gray'
                hoverColor='blue'
                type='submit'
                width='100%'
                mdWidth='100%'
                mWidth='100%'
                onClick={() => setSubmitType('save')}
                height='43px'
                size='lg'
                mSize='sm'
                padding='0'
              >
                임시저장하기
              </CommonBtn>
            )}
          </CommonWrapper>
        </ButtonWrapper>
      </FormLayout>
    </>
  );
};

export default ApplySaveForm;
