import { useForm } from 'react-hook-form';

import styled from '@emotion/styled';
import { signUpUserInterface } from '@gdsc/interface/UserInterface';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';

import { SignupQuery } from '@gdsc/hooks/queries/post/SignupQuery';

import { SignUpSchema, SignUpSchemaType } from '@gdsc/utils/SignUpSchemaUtil';

const SignFormWrapper = styled.form`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

const SignFormTitle = styled.label`
  font-size: var(--font-size-md);
  font-weight: 600;
`;

const SignUpForm = () => {
  const { mutate, isPending, isError, error } = SignupQuery();
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
    <SignFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SignFormTitle htmlFor='name'>이름</SignFormTitle>
      <input
        id='name'
        placeholder='이름을 입력해주세요'
        type='text'
        {...register('name')}
      />
      <ErrorMessage
        errors={errors}
        name='name'
        render={({ message }) => <small role='alert'>{message}</small>}
      />
      <SignFormTitle htmlFor='age'>나이</SignFormTitle>
      <input
        id='age'
        placeholder='나이를 입력하세요'
        type='text'
        {...register('age', { valueAsNumber: true })}
      />
      <ErrorMessage
        errors={errors}
        name='age'
        render={({ message }) => <small role='alert'>{message}</small>}
      />
      <SignFormTitle htmlFor='studentNumber'>학번</SignFormTitle>
      <input
        id='studentNumber'
        placeholder='학번을 입력하세요(10자리로 입력해주세요)'
        type='text'
        {...register('studentNumber')}
      />
      <ErrorMessage
        errors={errors}
        name='studentNumber'
        render={({ message }) => <small role='alert'>{message}</small>}
      />
      <SignFormTitle htmlFor='major'>전공</SignFormTitle>
      <input
        id='major'
        placeholder='전공을 입력하세요'
        type='string'
        {...register('major')}
      />
      <ErrorMessage
        errors={errors}
        name='major'
        render={({ message }) => <small role='alert'>{message}</small>}
      />
      {isPending && <input type='submit' value='Submitting...' />}
      {!isPending && <input type='submit' value='회원가입 완료하기' />}
    </SignFormWrapper>
  );
};

export default SignUpForm;
