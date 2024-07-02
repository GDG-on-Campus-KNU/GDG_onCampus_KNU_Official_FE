import { useForm } from 'react-hook-form';

import CommonBtn from '@gdsc/components/button/CommonBtn';
import SignupInput from '@gdsc/components/form/SignupInput';

import { SignupQuery } from '@gdsc/hooks/queries/post/SignupQuery';

import { SignUpSchema, SignUpSchemaType } from '@gdsc/utils/SignUpSchemaUtil';

import { AuthBox } from '@gdsc/styles/AuthModalStyle';

import styled from '@emotion/styled';
import { signUpUserInterface } from '@gdsc/interface/UserInterface';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';

const SignFormWrapper = styled.form`
  width: 90%;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 2fr;
  column-gap: 30px;
  row-gap: 25px;

  & > *:nth-child(3) {
    width: 100%;
  }
  & > *:nth-child(4) {
    grid-column: 1 / -1;
    width: 100%;
  }

  @media (max-width: 500px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    row-gap: 0px;
    column-gap: 15px;
    & > *:nth-child(1) {
      grid-column: 1 / -1;
      width: 100%;
    }
    & > *:nth-child(4) {
      grid-column: 1 / -1;
      width: 100%;
    }
  }
`;

const Error = styled.small`
  color: var(--color-cinarbar);
  font-size: var(--font-size-xs);
  margin: 0px 0px 12px 12px;
`;

const ButtonItem = styled.div`
  width: 90%;
`;

const SignUpForm = () => {
  const { mutate, isPending } = SignupQuery();
  //const { mutate, isPending, isError, error } = SignupQuery();
  //모달 창 나왔을때 isError랑 error 모달창 집어넣어야함.

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
    }
    console.log(data);
  };

  return (
    <AuthBox variant='primary'>
      <SignFormWrapper onSubmit={handleSubmit(onSubmit)}>
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
          render={({ message }) => <Error role='alert'>{message}</Error>}
        />
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
          render={({ message }) => <Error role='alert'>{message}</Error>}
        />
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
          render={({ message }) => <Error role='alert'>{message}</Error>}
        />
        <SignupInput
          id='major'
          title='전공'
          placeholder='전공을 입력해주세요.'
          type='string'
          register={register('major')}
        />
        <ErrorMessage
          errors={errors}
          name='major'
          render={({ message }) => <Error role='alert'>{message}</Error>}
        />
      </SignFormWrapper>

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
            회원가입
          </CommonBtn>
        )}
      </ButtonItem>
    </AuthBox>
  );
};

export default SignUpForm;
