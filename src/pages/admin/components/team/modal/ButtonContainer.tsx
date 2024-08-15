import styled from '@emotion/styled';

interface ButtonContainerProps {
  onClose: () => void;
}

const ButtonContainer = ({ onClose }: ButtonContainerProps) => {
  return (
    <StyledButtonContainer>
      <FormButton type='submit'>형성하기</FormButton>
      <FormButton type='button' onClick={onClose}>
        취소하기
      </FormButton>
    </StyledButtonContainer>
  );
};

export default ButtonContainer;

const StyledButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === 'submit' ? '#4e88ff' : '#cccccc'};
  color: ${(props) => (props.type === 'submit' ? 'white' : '#666')};
  font-weight: 700;
  width: 45%;
`;
