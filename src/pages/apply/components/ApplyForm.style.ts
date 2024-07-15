import Text from '@gdsc/components/typography/Text';

import styled from '@emotion/styled';

export const Error = styled.small`
  color: var(--color-cinarbar);
  font-size: var(--font-size-xs);
  margin-bottom: 14px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px 0px 0px;
  width: 100%;
`;

export const InputNameWrapper = styled(InputWrapper)`
  width: 20%;
`;

export const InputSNWrapper = styled(InputWrapper)`
  width: 30%;
`;

export const InputMJWrapper = styled(InputWrapper)`
  width: 50%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTitleLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  margin-top: 50px;
`;

export const FormLayout = styled.form`
  width: 100%;
`;

export const TextLayout = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const QuestionLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 115px;
`;

export const FormTitle = styled(Text)`
  @media (max-width: 500px) {
    font-size: var(--font-size-md);
  }
`;

export const FormLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-white);
  margin: 8px 0px 10px 0px;
`;

export const FormSubTitle = styled(Text)`
  @media (max-width: 500px) {
    font-size: var(--font-size-sm);
  }

  margin-bottom: 30px;
`;

export const FormInputLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 65px;
`;

export const CommonWrapper = styled.div`
  margin-left: 20px;
  width: 50%;
`;
