import styled from '@emotion/styled';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';

import { SignupQuery } from '@gdg/apis/hooks/signup/SignupQuery';
import CommonBtn from '@gdg/components/common/button/CommonBtn';
import SignupInput from '@gdg/components/common/form/SignupInput';
import { InputWrapper } from '@gdg/pages/apply/components/ApplyForm.style';
import MobileSignUpForm from '@gdg/pages/signup/components/MobileSignUpForm';
import { AuthBox } from '@gdg/styles/AuthModalStyle';
import { Error, InputLine } from '@gdg/styles/SignUpForm.style';
import { signUpUserInterface } from '@gdg/types/UserInterface';
import { SignUpSchema, SignUpSchemaType } from '@gdg/utils/SignUpSchema.util';

const SignFormWrapper = styled.form`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
`;

const ButtonItem = styled.div`
  width: 60%;
  margin-top: 37px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SignUpForm = () => {
  const { mutate, isPending } = SignupQuery();
  //const { mutate, isPending, isError, error } = SignupQuery();
  //모달 창 나왔을때 isError랑 error 모달창 집어넣어야함.
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: signUpUserInterface) => {
    const isConfirmed = window.confirm('회원가입을 완료하시겠습니까?');
    if (isConfirmed) {
      mutate(data);
      // console.log(data);
    }
    // console.log(data);
  };

  return (
    <AuthBox variant='primary'>
      <SignFormWrapper onSubmit={handleSubmit(onSubmit)}>
        {isMobile ? (
          <MobileSignUpForm />
        ) : (
          <>
            <InputLine>
              <InputWrapper>
                <SignupInput
                  id='name'
                  title='이름'
                  placeholder='ex) 홍길동'
                  type='text'
                  register={register('name')}
                />
                <ErrorMessage
                  errors={errors}
                  name='name'
                  render={({ message }) => (
                    <Error role='alert'>{message}</Error>
                  )}
                />
              </InputWrapper>
              <InputWrapper>
                <SignupInput
                  id='age'
                  title='나이'
                  placeholder='ex) 20'
                  type='text'
                  register={register('age', { valueAsNumber: true })}
                />
                <ErrorMessage
                  errors={errors}
                  name='age'
                  render={({ message }) => (
                    <Error role='alert'>{message}</Error>
                  )}
                />
              </InputWrapper>
              <InputWrapper>
                <SignupInput
                  id='studentNumber'
                  title='학번'
                  placeholder='ex) 2024111222'
                  type='text'
                  register={register('studentNumber')}
                />
                <ErrorMessage
                  errors={errors}
                  name='studentNumber'
                  render={({ message }) => (
                    <Error role='alert'>{message}</Error>
                  )}
                />
              </InputWrapper>
            </InputLine>
            <InputLine>
              <InputWrapper>
                <SignupInput
                  id='major'
                  title='전공'
                  placeholder='전공의 정식명칭을 입력해주세요.'
                  type='string'
                  register={register('major')}
                />
                <ErrorMessage
                  errors={errors}
                  name='major'
                  render={({ message }) => (
                    <Error role='alert'>{message}</Error>
                  )}
                />
              </InputWrapper>
              <InputWrapper>
                <SignupInput
                  id='phoneNumber'
                  title='전화번호'
                  placeholder='010-0000-0000 형식으로 입력해주세요.'
                  type='string'
                  register={register('phoneNumber')}
                />
                <ErrorMessage
                  errors={errors}
                  name='phoneNumber'
                  render={({ message }) => (
                    <Error role='alert'>{message}</Error>
                  )}
                />
              </InputWrapper>
            </InputLine>
          </>
        )}
        <ButtonWrapper>
          <ButtonItem>
            {isPending && (
              <CommonBtn
                backgroundColor='blue'
                color='blue'
                hoverColor='blue'
                type='submit'
                size='lg'
                width='100%'
                height='45px'
                padding='5px'
                mdWidth='100%'
                mdHeight='45px'
                mWidth='100%'
                mHeight='45px'
                mPadding='5px'
              >
                Submitting...
              </CommonBtn>
            )}
            {!isPending && (
              <CommonBtn
                backgroundColor='blue'
                color='blue'
                hoverColor='blue'
                type='submit'
                size='lg'
                width='100%'
                height='45px'
                padding='5px'
                mdWidth='100%'
                mdHeight='45px'
                mWidth='100%'
                mHeight='45px'
                mPadding='5px'
              >
                추가정보 입력하기
              </CommonBtn>
            )}
          </ButtonItem>
        </ButtonWrapper>
      </SignFormWrapper>
    </AuthBox>
  );
};

export default SignUpForm;
