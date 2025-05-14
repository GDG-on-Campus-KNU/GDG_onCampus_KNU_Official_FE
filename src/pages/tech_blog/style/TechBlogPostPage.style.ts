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

  background-color: var(--color-white);
  background-image: url('uploadthumbnail');

  outline: none;
  border: none;
  border-radius: 20px;

  object-fit: cover;
`;

export const ThumbnailUploadButton = styled.label`
  background-color: var(--color-aqua);
  color: var(--color-white);

  border: none;
  border-radius: 12px;

  padding: 10px 20px;

  font-weight: 600;
  font-size: 18px;

  text-transform: none;

  &:hover {
    color: var(--color-silver);
    background-color: var(--color-ocean);
    cursor: pointer;
  }
`;

export const ThumbnailImage = styled.img`
  max-width: 100%;
  max-height: calc(100% - 60px);
  object-fit: cover;
`;

export const ThumbnailButtonContainer = styled.div`
  width: 60%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;

export const ThumbnailButton = styled.label`
  background-color: transparent;
  color: var(--color-battleship);

  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  padding: none;
  margin: none;

  &:hover {
    color: var(--color-black);
    cursor: pointer;
  }
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

  margin-top: 20px;
`;

export const CategoryCard = styled.button`
  width: 80%;
  height: 70%;

  background-color: transparent;
  color: var(--color-smoky);
  border: 1px solid var(--color-smoky);

  border-radius: 50px;
  font-size: var(--font-size-sm);

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
