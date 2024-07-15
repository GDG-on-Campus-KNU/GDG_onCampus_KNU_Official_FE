import * as React from 'react';
import { useForm } from 'react-hook-form';

import SignupInput from '@gdsc/components/form/SignupInput';

import { InputWrapper } from '@gdsc/pages/apply/components/ApplyForm.style';

import { SignUpSchema, SignUpSchemaType } from '@gdsc/utils/SignUpSchema.util';

import { Error, InputLine } from '@gdsc/styles/SignUpForm.style';

import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';

const MobileSignUpForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  return (
    <React.Fragment>
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
            render={({ message }) => <Error role='alert'>{message}</Error>}
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
            render={({ message }) => <Error role='alert'>{message}</Error>}
          />
        </InputWrapper>
      </InputLine>
      <InputLine>
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
            render={({ message }) => <Error role='alert'>{message}</Error>}
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
            render={({ message }) => <Error role='alert'>{message}</Error>}
          />
        </InputWrapper>
      </InputLine>
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
          render={({ message }) => <Error role='alert'>{message}</Error>}
        />
      </InputWrapper>
    </React.Fragment>
  );
};

export default MobileSignUpForm;
