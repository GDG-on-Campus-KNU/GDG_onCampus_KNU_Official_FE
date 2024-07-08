import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { useParams, useNavigate } from 'react-router-dom';

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
  InputNameWrapper,
  InputSNWrapper,
  InputMJWrapper,
} from '@gdsc/pages/apply/components/ApplyForm.style';
import {
  FrontendData,
  BackendData,
  AndroidData,
  AIData,
  DesignerData,
} from '@gdsc/pages/apply/components/ApplyFormDocs';

import { useApplyFormMutation } from '@gdsc/hooks/queries/post/ApplyFormQuery';

import { ApplyFormSchema } from '@gdsc/utils/ApplyFormScehmaUtil';

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
} from '@gdsc/interface/ApplyInterface';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';

const getTrack = (tech: string): string => {
  switch (tech.toLowerCase()) {
    case 'frontend':
      return 'FRONT_END';
    case 'backend':
      return 'BACK_END';
    case 'ai':
      return 'AI';
    case 'android':
      return 'ANDROID';
    case 'designer':
      return 'DESIGNER';
    default:
      return '';
  }
};

const ApplyForm = () => {
  const { tech = '' } = useParams();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const initialTrack = getTrack(tech);
  const { mutate: submitApplication } = useApplyFormMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ApplyFormInterface>({
    defaultValues: {
      name: '',
      studentNumber: '',
      major: '',
      email: '',
      phoneNumber: '',
      techStack: '',
      links: '',
      applicationStatus: 'TEMPORAL',
      track: initialTrack,
      answers: [
        { questionNumber: 0, answer: '' },
        { questionNumber: 1, answer: '' },
        { questionNumber: 2, answer: '' },
        { questionNumber: 3, answer: '' },
      ],
    },
    resolver: zodResolver(ApplyFormSchema),
  });

  const getData = (tech: string): ApplyFormQuestionInterface | null => {
    switch (tech) {
      case 'frontend':
        return FrontendData;
      case 'backend':
        return BackendData;
      case 'ai':
        return AIData;
      case 'android':
        return AndroidData;
      case 'designer':
        return DesignerData;
      default:
        return null;
    }
  };

  const data: ApplyFormQuestionInterface | null = getData(tech);

  const onSubmit = (formData: ApplyFormInterface) => {
    const isConfirmed = window.confirm('제출을 완료하시겠습니까?');
    if (isConfirmed) {
      const finalFormData = {
        ...formData,
        answers:
          formData.answers?.map((answer, index) => ({
            questionNumber: index,
            answer: answer.answer,
          })) || [],
      };

      // console.log(finalFormData);
      submitApplication(finalFormData);
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
          <InputNameWrapper>
            <FormInput
              id='name'
              width='100%'
              margin='0px 15px 0px 0px'
              title='이름'
              placeholder='이름을 입력해주세요'
              type='text'
              register={register('name')}
            />
            <ErrorMessage
              errors={errors}
              name='name'
              render={({ message }) => <Error role='alert'>{message}</Error>}
            />
          </InputNameWrapper>
          <InputSNWrapper>
            <FormInput
              id='studentNumber'
              width='100%'
              margin='0px 15px 0px 0px'
              title='학번'
              placeholder='ex) 2019xxxx'
              type='text'
              register={register('studentNumber')}
            />
            <ErrorMessage
              errors={errors}
              name='studentNumber'
              render={({ message }) => <Error role='alert'>{message}</Error>}
            />
          </InputSNWrapper>
          <InputMJWrapper>
            <FormInput
              id='major'
              width='100%'
              margin='0px 0px 0px 0px'
              title='학과'
              placeholder='학과를 입력해주세요.'
              type='text'
              register={register('major')}
            />
            <ErrorMessage
              errors={errors}
              name='major'
              render={({ message }) => <Error role='alert'>{message}</Error>}
            />
          </InputMJWrapper>
        </FormInputLine>
        <FormInputLine>
          <InputWrapper>
            <FormInput
              id='phoneNumber'
              width='100%'
              margin='0px 15px 0px 0px'
              title='전화번호'
              placeholder='ex) 010-xxxx-xxxx'
              type='text'
              register={register('phoneNumber')}
            />
            <ErrorMessage
              errors={errors}
              name='phoneNumber'
              render={({ message }) => <Error role='alert'>{message}</Error>}
            />
          </InputWrapper>
          <InputWrapper>
            <FormInput
              id='email'
              width='100%'
              margin='0px 0px 0px 0px'
              title='이메일'
              placeholder='ex) google@gmail.com'
              type='text'
              register={register('email')}
            />
            <ErrorMessage
              errors={errors}
              name='email'
              render={({ message }) => <Error role='alert'>{message}</Error>}
            />
          </InputWrapper>
        </FormInputLine>
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
          >
            지원하기
          </CommonBtn>

          <CommonWrapper>
            <CommonBtn
              color='gray'
              backgroundColor='gray'
              hoverColor='blue'
              type='button'
              width='100%'
              mdWidth='100%'
              mWidth='100%'
              height='43px'
              size='lg'
              mSize='sm'
              padding='0'
              onClick={() => {
                const isConfirmed = window.confirm(
                  '페이지를 이동할 시 모든 데이터가 소멸될 수 있습니다. 이동하시겠습니까?'
                );
                if (isConfirmed) {
                  navigate('/apply');
                }
              }}
            >
              목록으로
            </CommonBtn>
          </CommonWrapper>
        </ButtonWrapper>
      </FormLayout>
    </>
  );
};

export default ApplyForm;
