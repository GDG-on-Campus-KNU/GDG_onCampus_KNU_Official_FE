import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 80%;
  height: 100vh;

  justify-self: center;
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 40px;

  margin: 0 auto;
`;

export const ThumbnailContainer = styled.article`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const ThumbnailElement = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: var(--color-white);
  background-image: url('uploadthumbnail');

  outline: none;
  border: none;
  border-radius: 20px;
`;

export const CategoryContainer = styled.article`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const CategoryElement = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 7px;
  column-gap: 10px;
`;

export const CategoryCard = styled.button`
  width: 100%;
  height: 90%;

  background-color: transparent;
  color: var(--color-smoky);
  border: 1px solid var(--color-smoky);

  border-radius: 50px;

  &:hover {
    color: var(--color-white);
    border: 1px solid var(--color-white);
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: transparent;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 20px;
`;
