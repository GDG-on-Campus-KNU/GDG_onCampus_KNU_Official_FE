import { useEffect } from 'react';

import styled from '@emotion/styled';

import { useDebounce } from '../../../hooks/custom_hooks/useDebounce';
import { SignupQuery } from '../../../hooks/queries/post/SignupQuery';

import { useSignUpStore } from '../../../store/useSignUpstore';

const SignUpForm = () => {
  const {
    name,
    age,
    studentNumber,
    major,
    debounceName,
    debounceAge,
    debounceStudentNumber,
    debounceMajor,
    setName,
    setAge,
    setStudentNumber,
    setMajor,
    setDebounceName,
    setDebounceAge,
    setDebounceStudentNumber,
    setDebounceMajor,
  } = useSignUpStore();

  const debouncedName = useDebounce(debounceName, 500);
  const debouncedAge = useDebounce(debounceAge.toString(), 500);
  const debouncedStudentNumber = useDebounce(debounceStudentNumber, 500);
  const debouncedMajor = useDebounce(debounceMajor, 500);

  const { mutate, isPending, isError, error } = SignupQuery();
  //모달 창 나왔을때 isError랑 error 모달창 집어넣어야함.

  useEffect(() => {
    setName(debouncedName);
    setAge(Number(debouncedAge));
    setStudentNumber(debouncedStudentNumber);
    setMajor(debouncedMajor);
  }, [debouncedName, debouncedAge, debouncedStudentNumber, debouncedMajor]);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebounceName(e.target.value);
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebounceAge(Number(e.target.value));
  };

  const handleStudentNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebounceStudentNumber(e.target.value);
  };
  const handleMajor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebounceMajor(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (debounceAge === 0) {
      alert('나이를 0으로 제출할 수 없습니다.');
      // 에러창 모달로 새로 띄워야함.
      return;
    }

    if (studentNumber.length !== 10) {
      alert('학번은 10자리로 입력해주세요.');
      // 에러창 모달로 새로 띄워야함.
      return;
    }

    const isConfirmed = window.confirm('회원가입을 완료하시겠습니까?');
    if (isConfirmed) {
      const userData = {
        name: name,
        age: age,
        studentNumber: studentNumber,
        major: major,
      };

      mutate(userData);

      // 성공 모달창 띄우고 navigate 시켜야함.
      console.log('회원가입 데이터:', userData);
    }
  };

  // useEffect(() => {
  //   console.log('Name:', name);
  //   console.log('Age:', age);
  //   console.log('Student Number:', studentNumber);
  //   console.log('Major:', major);
  // }, [name, age, studentNumber, major]);

  return (
    <SignFormWrapper onSubmit={handleSubmit}>
      <SignFormTitle>이름</SignFormTitle>
      <input
        placeholder='이름을 입력하세요'
        type='string'
        required
        value={debounceName}
        onChange={(e) => handleName(e)}
      />
      <SignFormTitle>나이</SignFormTitle>
      <input
        placeholder='나이를 입력하세요'
        type='number'
        required
        value={debounceAge}
        onChange={(e) => handleAge(e)}
      />
      <SignFormTitle>학번(10자리로 입력해주세요. ex.2019115615)</SignFormTitle>
      <input
        placeholder='학번을 입력하세요(10자리로 입력해주세요)'
        type='string'
        required
        value={debounceStudentNumber}
        onChange={(e) => handleStudentNumber(e)}
      />
      <SignFormTitle>전공</SignFormTitle>
      <input
        placeholder='전공을 입력하세요'
        type='string'
        required
        value={debounceMajor}
        onChange={(e) => handleMajor(e)}
      />
      {isPending && <button type='submit'>Submitting...</button>}
      {!isPending && <button type='submit'>회원가입</button>}
    </SignFormWrapper>
  );
};

export default SignUpForm;

const SignFormWrapper = styled.form`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

const SignFormTitle = styled.h3`
  font-size: var(--font-size-md);
  font-weight: 600;
`;
