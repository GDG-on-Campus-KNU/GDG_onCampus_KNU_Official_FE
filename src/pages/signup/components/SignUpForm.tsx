import { useEffect } from 'react';

import styled from '@emotion/styled';

import { Debounce } from '../../../hooks/custom_hooks/Debounce';
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

  const debouncedName = Debounce(debounceName, 500);
  const debouncedAge = Debounce(debounceAge.toString(), 500);
  const debouncedStudentNumber = Debounce(debounceStudentNumber, 500);
  const debouncedMajor = Debounce(debounceMajor, 500);

  const { mutate, isPending, isError, error } = SignupQuery();

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

    const userData = {
      name: name,
      age: age,
      studentNumber: studentNumber,
      major: major,
    };

    mutate(userData);

    console.log('회원가입 데이터:', userData);
  };

  // useEffect(() => {
  //   console.log('Name:', name);
  //   console.log('Age:', age);
  //   console.log('Student Number:', studentNumber);
  //   console.log('Major:', major);
  // }, [name, age, studentNumber, major]);

  return (
    <SignFormWrapper onSubmit={handleSubmit}>
      <h3>이름</h3>
      <input
        placeholder='이름을 입력하세요'
        type='string'
        required
        value={debounceName}
        onChange={(e) => handleName(e)}
      />
      <h3>나이</h3>
      <input
        placeholder='나이를 입력하세요'
        type='number'
        required
        value={debounceAge}
        onChange={(e) => handleAge(e)}
      />
      <h3>학번</h3>
      <input
        placeholder='학번을 입력하세요'
        type='string'
        required
        value={debounceStudentNumber}
        onChange={(e) => handleStudentNumber(e)}
      />
      <h3>전공</h3>
      <input
        placeholder='전공을 입력하세요'
        type='string'
        required
        value={debounceMajor}
        onChange={(e) => handleMajor(e)}
      />
      {isPending && <button type='submit'>'Submitting...'</button>}
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
