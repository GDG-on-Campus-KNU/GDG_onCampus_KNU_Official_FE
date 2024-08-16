import styled from '@emotion/styled';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

const FormField = ({ label, children }: FormFieldProps) => {
  return (
    <StyledFormField>
      <label>{label}</label>
      {children}
    </StyledFormField>
  );
};

export default FormField;

const StyledFormField = styled.div`
  margin-top: 22.5px;
  text-align: left;
  width: 100%;
  label {
    display: block;
    font-size: var(--font-size-md);
    margin-bottom: 10px;
    color: var(--color-white);
  }
  input[type='text'] {
    width: calc(100% - 30px);
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: var(--color-dpurple);
    color: white;
  }
  input[type='radio'] {
    margin-left: 0px;
    margin-right: 10px;
  }
  input[disabled] {
    cursor: not-allowed;
  }
`;
